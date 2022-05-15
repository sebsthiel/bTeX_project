

function createGraph(json) {

    nodes = json.nodes;
    links = json.links;
    envs = json.environments;

    lineGraph(nodes, links, envs, json.labelPrefixes, json.nodeToLineText);

}


var colors = new ColorObject(false, "#8C8C8C", "#000000", "#FF2D00", "#BE00FF");

var linkDict = {};
var nodeDict = {};
var envDict = {};
var labPrefixDepth = {};
var unit = 10;
var nodeToLineText = {};
var sectionNodes = [];
var normalNodes = [];
var paperNodes = [];
var envNodes = [];

var nodes, links, envs;


const width = window.innerWidth;
const graphWidth = width * 2;
const xaxisHeight = 50;
const height = window.innerHeight - 50;
const defaultNodeY = xaxisHeight + 50;
const defaultRefNodeY = xaxisHeight;
const defaultPaperY = 30;
const defaultEnvY = xaxisHeight;

const defaultNodeRadius = 6;
const defaultSectionRectHeight = height - 100;
const envRectHeight = defaultSectionRectHeight - 30;

const sectionTextY = xaxisHeight + defaultSectionRectHeight + 15;
const envTextY = xaxisHeight - 10;


var svgLinks;
var envRect;
var nodeCircles;
var svgSectionLine;
var currentScale;
var arrowMarker;

const zoomThreshold = 20;


var currentSelectedNode = null;

var allNodes;


function lineGraph(input_nodes, input_links, input_envs, input_prefix, input_nodeToLine) {


    let tmpVar = setupLabPrefixes(input_prefix);
    labPrefixDepth = tmpVar[0];
    unit = tmpVar[1];

    nodeToLineText = input_nodeToLine;


    allNodes = input_nodes;
    links = input_links;
    envs = input_envs;

    linkDict = {};
    nodeDict = {};
    envDict = {};
    
    sectionNodes = [];
    normalNodes = [];
    paperNodes = [];
    envNodes = [];

    allNodes.sort(compare);

    // create dict of nodes for lookup later  
    let i = 1;



    allNodes.forEach(node => {
        let nodeName = node.name;
        nodeDict[nodeName] = node;
      
        nodeDict[nodeName].radius = defaultNodeRadius;

        if (node.type == "paper") {
            nodeDict[nodeName].y = defaultPaperY;
            i += 1;
            nodeDict[nodeName].lineCount = (50*i);
        }
        else if (node.type == "refNode" || node.type == "citeNode") {
           
            nodeDict[nodeName].y = defaultNodeY;
           
            

        } else if (node.type == "label") {
            let prefixType = nodeName.split(':')[0];
            if (prefixType in labPrefixDepth) {
                nodeDict[nodeName].y = labPrefixDepth[prefixType];
               
              
            } else {
                nodeDict[nodeName].y = defaultNodeY;
            }
            
        }
        else {
            
            nodeDict[nodeName].y = defaultNodeY;
        }
        
        if (node.type.includes("section")) {
            nodeDict[nodeName].color = colors.sectionColor;
        } else {
            nodeDict[nodeName].color = colors.nodeColor;
        }

    })


    links.forEach(link => {
        if (!(link.target in linkDict)) {
            linkDict[link.target] = link.source;
        }
        

    });

    // create dict for env
    envs.forEach(env => {
        envDict[env.name] = env;
    });

    
    var bestLineCount = 0;
    var prevPrefixNode = {}
    var threshold = 100;

    // filter for sections and other nodes  
    allNodes.forEach(node => {
        if (node.type in envDict && !node.type.includes("section")) {
           
            envNodes.push(node);
            nodeDict[node.name].color = colors.envColor;
        }
        
        else if (node.type == "section" || node.type.includes("subsection")) {
           
            sectionNodes.push(node);
        }
        else if (node.type == "paper") {
            paperNodes.push(node);
        }
        else {
            
            normalNodes.push(node);


            if (node.type == "refNode" || node.type == "citeNode") {
                let nameToTarget = node.name.split(":id:")[0];
                nameToTarget = nameToTarget.replace(/(ref to)|(citation to)/, "").trim();
            

                if (nameToTarget in nodeDict) {
                    if (nodeDict[nameToTarget].type == "label") {

                        let prefixType = nameToTarget.split(':')[0];
                        if (prefixType in labPrefixDepth) {
                           
                            nodeDict[node.name].y = labPrefixDepth[prefixType];
                            
                        }


                    }

                }
            }
           


            
            

           
            
        }


        if (bestLineCount < node.lineCountEnd) {
            bestLineCount = node.lineCountEnd;
        }
        // clustering fix 
        if (node.type != "paper") {

            let nodePrefix = node.name.split(':')[0];
            
            if (nodePrefix in prevPrefixNode) {
                let currentPrevNode = prevPrefixNode[nodePrefix];
                if (!currentPrevNode.moved && (node.lineCount - currentPrevNode.lineCount) <= threshold) {
                    node.y = node.y + (unit / 2);
                    let currentNode = node;
                    currentNode.moved = true;
                  
                    prevPrefixNode[nodePrefix] = currentNode;
                } else {
                    let currentNode = node;
                    currentNode.moved = false;
                    prevPrefixNode[nodePrefix] = currentNode;
                }

            }
            else {
                if (node.type == "refNode") {
                    let nameToTarget = node.name.split(":id:")[0];
                    nameToTarget = nameToTarget.replace(/(ref to)|(citation to)/, "").trim();
                    let targetPrefix = nameToTarget.split(':')[0];


                    if (targetPrefix in prevPrefixNode) {
                       
                        let currentPrevNode = prevPrefixNode[targetPrefix];
                        if (!currentPrevNode.moved && (node.lineCount - currentPrevNode.lineCount) <= threshold) {
                            node.y = labPrefixDepth[targetPrefix] + (unit / 2);
                           
                            let currentNode = node;
                            currentNode.moved = true;
                            prevPrefixNode[targetPrefix] = currentNode;
                        } else {
                            let currentNode = node;
                            currentNode.moved = false;
                            prevPrefixNode[targetPrefix] = currentNode;
                        }
                    }



                } else {
                    let currentNode = node;
                    currentNode.moved = false;

                    if (nodePrefix in labPrefixDepth) {

                        prevPrefixNode[nodePrefix] = currentNode;
                    } else {
                        prevPrefixNode["prevNode"] = currentNode;
                    }

                }
                

            }
                

        }
        


    });



  
    const maxLineCount = bestLineCount + 100;

    var xAxisScale = d3.scaleLinear()
        .domain([0, maxLineCount])
        .range([0, width]);

    currentScale = xAxisScale;

    // select the svg for creating the graph
    // and configure the width and height
    
    d3.selectAll("#d3graph > *").remove();
    //d3.selectAll("svg > *").remove();
    var svgCanvas = d3.select("#d3graph")
                .append("svg")
                .attr("width", width)
        .attr("height", height);

    var graphBackground = svgCanvas.append('rect')
        .attr("class", "graphRect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "white");

    // main image of graph 
    var svg = svgCanvas.append("g").attr("id", "graph");

    // working on better arrow
    arrowMarker = svg.append("defs")
        .append("marker")
        .attr("id", "betterArrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 3)
        .attr("refY", 0)
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .style("fill", colors.linkColor)
        .attr('fill-opacity', "0.5")
        .attr("transform", "scale(0.3)");


     // create axis object
    var xAxis = d3.axisBottom(xAxisScale);

    var gX = svgCanvas.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + xaxisHeight + ")")
        .call(xAxis);

    var svgSection =
        svg.selectAll("#sectionLine")
            .data(sectionNodes)
            .enter();
        
    svgSectionLine = svgSection.append('g')
        .append('rect')
        .attr('width', node => getLineCountDiff(node, xAxisScale))
        .attr('height', node => sectionRectHeight(node))
        .attr('fill', colors.sectionColor)
        .attr('fill-opacity', "0.3")
        .attr('x', node => getlineCount(node, xAxisScale))
        .attr('y', getEnvNodeY)
        .attr('stroke-width', 2)
        .attr('stroke', 'black')

    // svg group for environments 
    var svgEnvs = svg
        .selectAll('#envRect')
        .data(envNodes)
        .enter().append('g');

    envRect = svgEnvs
        .append('rect')
        .attr('width', node => getLineCountDiff(node, xAxisScale))
        .attr('height', node => calEnvHeight(node))
        .attr('fill', colors.envColor)
        .attr('fill-opacity', "0.7")
        .attr('x', node => getlineCount(node, xAxisScale))
        .attr('y', getEnvNodeY)
        .attr('stroke-width', 1)
        .attr('stroke', 'black');



    var svgNodes = svg
        .selectAll('circle')
        .data(normalNodes.concat(paperNodes))
        .enter();

    

    nodeCircles = svgNodes.append('circle')
        .attr('r', getRadiusNode)
        .attr('fill', "gray")
        .attr('cx', node => getlineCount(node, xAxisScale))
        .attr('cy', getNodeY)
        .attr('stroke-width', 0.5)
        .attr('stroke', 'black');

    svgLinks = svg
        .selectAll('mylinks')
        .data(links)
        .enter()
        .append('path')
        .attr("class", "link")
        .attr('d', link => createArc(link, xAxisScale))
        .attr("stroke", getLinkColor)
        .attr('stroke-width', 2)
        .style("fill", "none")
        .attr("marker-end", "url(#betterArrow)");


    var prefixesList = Object.keys(labPrefixDepth);

    var prefixLabelDiv = svg.selectAll("prefixLabel")
        .data(prefixesList)
        .enter().append('g');

    var prefixLabels = prefixLabelDiv
        .append('text')
        .text(prefix => prefix)
        .attr("class", "prefixLabel")
        .attr("dx", node => xAxisScale(10))
        .attr("dy", prefix => {
           
            return labPrefixDepth[prefix] + 2;

        });


    
        



    var textDiv = svgNodes.append('g');

    envRect.on("click", function (selected) {
        document.getElementById("nodeTexCode").innerHTML = "Tex Context: " +  nodeToLineText[selected.name]; // TODO: change this so it works like the ones bellow

        textEnvNode.attr("visibility", function (node) { return showName(node, selected) });
        envRect.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", colors.sectionColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", colors.nodeColor);


       

    });

    svgSectionLine.on("click", function (selected) {
       
        document.getElementById("nodeTexCode").innerHTML = "Tex Context: " +  nodeToLineText[selected.name]; // TODO: change this so it works like the ones bellow

        textSection.attr("visibility", function (node) { return showName(node, selected) });
        svgSectionLine.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", colors.envColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", colors.nodeColor);
    });

    nodeCircles.on("click", function (selected) {
        document.getElementById("nodeTexCode").innerHTML = "Tex Context: " + nodeToLineText[selected.name]; // TODO: change this so it works like the ones bellow
       
        textElements.attr("visibility", function (node) { return showName(node, selected) });
        nodeCircles.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", colors.envColor);
        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", colors.sectionColor);
        svgLinks.selectAll("marker").attr("fill", "red");
    });


    graphBackground.on("click", function (selected) {
        document.getElementById("nodeTexCode").innerHTML = "";


        currentSelectedNode = null;
        displayInfoAboutNode();

        svgLinks
            .attr("stroke", getLinkColor)
            .attr("stroke-opacity", link => visibleLinks(link, currentScale));


        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", colors.envColor);
        textBackground.attr("visibility", "hidden" );

        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", colors.sectionColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", colors.nodeColor);
    });

    

    var textSection = svgSection
        .append('text')
        .text(node => node.name)
        .attr("class", "title")
        .attr("dx", node => getlineCount(node, xAxisScale))
        .attr("dy", sectionTextY)
        .attr("visibility", "hidden");

    var textEnvNode = svgEnvs
        .append('text')
        .text(node => node.name)
        .attr("class", "label")
        .attr("dx", node => xAxisScale(node.lineCount))
        .attr("dy", envTextY)
        .attr("visibility", "hidden");

    
    var textElements = textDiv
        .append('text')
        .attr("class", "label")
        .attr("dx", node => xAxisScale(node.lineCount))
        .attr("dy", node => nodeDict[node.name].y - 8)
        .attr("visibility", "hidden")
        .text(function (node) {
            if (node.type == "paper") {
                var paperNodeName = "";
                if (node.information) {
                    paperNodeName = node.information[0] + " Written by " + node.author;
                    
                    return paperNodeName;
                } else if (node.author || node.year || node.title) {
                    if (node.title != null && node.title != "") {
                        paperNodeName += node.title;
                    } else {
                        paperNodeName += node.name.split(":id:")[0];
                    }
                    if (node.author != null && node.author != "")
                        paperNodeName += " Written by " + node.author;
                    if (node.year != null && node.year != "")
                        paperNodeName += " (" + node.year + ")";

                    return paperNodeName;
                } else {
                    return node.name.split(":id:")[0]
                }
                
            } else {
                return node.name.split(":id:")[0];
            }


        }).call(getBB);

    function getBB(selection) {
        selection.each(function (d) { d.bbox = this.getBBox(); })
    }


    var textBackground = textDiv.insert("rect", "text")
        .attr("class", "backgroundColor")
        .attr("width", function (d) { return d.bbox.width })
        .attr("height", function (d) { return d.bbox.height + 4 })
        .attr("x", node => xAxisScale(node.lineCount))
        .attr("y", node => (nodeDict[node.name].y - 8) - node.bbox.height)
        .attr("visibility", "hidden");

   
    function getlineCount(node, scale) {
           
        return scale(node.lineCount);

    }
    

    function handleZoom() {

       
        let new_xScale = d3.event.transform.rescaleX(xAxisScale)
       

        // update axes
        gX.call(xAxis.scale(new_xScale));

        currentScale = new_xScale;

        nodeCircles.attr("cx", node => getlineCount(node, new_xScale));


        svgLinks
            .attr("d", link => createArc(link, new_xScale))
            .attr("stroke-opacity", link => visibleLinks(link, new_xScale));

        svgSectionLine
            .attr('width', node => getLineCountDiff(node, new_xScale))
            .attr('x', node => getlineCount(node, new_xScale))
            

        envRect
            .attr('x', node => getlineCount(node, new_xScale))
            .attr('width', node => getLineCountDiff(node, new_xScale));


        textElements.attr("dx", node => new_xScale(node.lineCount));
        textEnvNode.attr("dx", node => new_xScale(node.lineCount));
        textSection.attr("dx", node => new_xScale(node.lineCount));

        textBackground.attr("x", node => new_xScale(node.lineCount))

        if (d3.event.transform.k > zoomThreshold) {
            textElements.attr("visibility", "visible");
            textBackground.attr("visibility", "visible");
        } else {

            textElements.attr("visibility", function (node) { return showName(node, currentSelectedNode) });
            textBackground.attr("visibility", function (node) { return showName(node, currentSelectedNode) });
        }
        
    }

    let zoom = d3.zoom()
        .translateExtent([[-100, 0], [width, 0]])
        .extent([[0, 0], [(0), 0]])
        .scaleExtent([0.4, 100])
        .on('zoom', handleZoom);


    svgCanvas.call(zoom);
    // start scale zoom: 
    zoom.scaleTo(svgCanvas, 1);
   


    function selectNode(node, selected) {

        currentSelectedNode = selected;
        displayInfoAboutNode(selected);

        svgLinks
            .attr("stroke", link => {

                if (link.source == selected.name) {
                    return "#65FF00";
                } else if (link.target == selected.name) {
                    return "#65FF00";
                }
                else {
                    return getLinkColor(link);
                }
            })
            .attr("stroke-opacity", link => {

                if (link.source == selected.name) {
                    return 1;
                }
                else if (link.target == selected.name) {
                    return 1;
                }
                else {
                    return 0.1;
                }
            });


        if (node.name == selected.name) {
            return "#65FF00";
        }
        else {

            return selected.color;

        }

    }


}

function sectionRectHeight(node) {

    const regex = /sub/gm;
    let numberOfSub = subCount(node.type);

    let newHeight = defaultSectionRectHeight - (numberOfSub * 20);
    if (newHeight <= 20) {
        return 20;
    }

    return newHeight;


}

function subCount(type) {

    const regex = /sub/gm;
    return ((type || '').match(regex) || []).length;

}

function visibleLinks(link, scale) {

    
    let sourceNode = nodeDict[link.source];
    let targetNode = nodeDict[link.target];

    let sx = scale(sourceNode.lineCount);
    let tx = scale(targetNode.lineCount);

    let sourceOutside = (sx < 0 || sx > width)
    let targetOutside = (tx < 0 || tx > width)

    
    if (currentSelectedNode != null && (link.target == currentSelectedNode.name || link.source == currentSelectedNode.name)) {
        return 1; // visible
    }

    if (sourceOutside && targetOutside) {
        return 0;
    } else if ((sourceOutside && !targetOutside) || (targetOutside && !sourceOutside)) {
        return 0.05;
    } else {
        if (currentSelectedNode != null) {
            return 0.05;
        } else {
            return 0.3;// visible
        }
        
    }


}

function getLinkColor(link) {
    if (link.type == "ref") {
        return colors.linkColor;
    } else {
        return "blue";
    }
}




function createArc(d, scale) {


    var newCoord = getTargetNodeCircumferencePoint(d, scale);


    if (!colors.showPaperNodes && nodeDict[d.target].type == "paper") {
        return [];
    } else if (nodeDict[d.target].type == "paper") {
        return ['M', scale(nodeDict[d.source].lineCount), nodeDict[d.source].y, 'L', newCoord[0], newCoord[1]].join(' ');

    }

    var dx = scale(nodeDict[d.target].lineCount) - scale(nodeDict[d.source].lineCount),
        dy = nodeDict[d.target].y - nodeDict[d.source].y,
        dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + scale(nodeDict[d.source].lineCount) + "," + nodeDict[d.source].y + "A" + dr + "," + dr + " 0 0,1 " + newCoord[0] + "," + newCoord[1];


}

function getTargetNodeCircumferencePoint(d, scale) {
   
    var t_radius = getRadiusNode(nodeDict[d.target]); // nodeWidth is just a custom attribute I calculate during the creation of the nodes depending on the node width
    var dx = scale(nodeDict[d.target].lineCount) - scale(nodeDict[d.source].lineCount);
    var dy = nodeDict[d.target].y - nodeDict[d.source].y;
    var gamma = Math.atan2(dy, dx); // Math.atan2 returns the angle in the correct quadrant as opposed to Math.atan
    var tx = scale(nodeDict[d.target].lineCount) - (Math.cos(gamma) * t_radius);
    var ty = nodeDict[d.target].y - (Math.sin(gamma) * t_radius);

    return [tx, ty];
}


function getNodeY(node) {
  
    return nodeDict[node.name].y;
}


function calEnvHeight(node) {
   
    if (node.createdAt.toLowerCase() == "document") {
        return defaultSectionRectHeight;
    }

    let i = 1;
    let nodeCreatedAt = node.createdAt;
    while (true) {
        if (nodeDict[nodeCreatedAt].type in envDict) {
            i += 1;
            nodeCreatedAt = nodeDict[nodeCreatedAt].createdAt;
            if (nodeCreatedAt.toLowerCase() == "document") {
                break;
            }
        } else {
            break;
        }

    }
   
    

    let numberOfSub = 0;
   
    return envRectHeight - (10 * (numberOfSub + i));
   
}



function showName(node, selected) {
    if (selected == null) {
        return "hidden";
    }
    if (node.name == selected.name) {
        return "visible";
    }
    else {
        return "hidden";

    }
}

function getLineCountDiff(node, scale) {
   
    return (scale(node.lineCountEnd) - scale(node.lineCount));
}

function getEnvNodeY(node) {
    return defaultEnvY;
}

function getRadiusNode(node) {
   
    if (node.type == "refNode" || node.type == "citeNode") {
        return 3; //defaultNodeRadius
    } else if (node.type == "paper") {
        return 2; //defaultNodeRadius
    }
    return node.radius;
}

// inclusive min and exclusive max 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function compare(a, b) {
    if (a.lineCount < b.lineCount) {
        return -1;
    }
    if (a.lineCount > b.lineCount) {
        return 1;
    }
    return 0;
}

function setupLabPrefixes(prefixes) {
    prefixHeightDict = {};
    prefixHeight = defaultSectionRectHeight / prefixes.length;
    prefixHeight2 = defaultNodeY
    
    let unit = ((defaultSectionRectHeight - prefixHeight2) / prefixes.length)
    for (var i = 0; i < prefixes.length; i++) {
        prefixHeightDict[prefixes[i]] = prefixHeight2 + (unit * i);
       
    }
    return [prefixHeightDict, unit];
}

function setColors(colorObject) {
    colors = colorObject;


    allNodes.forEach(node => {
        let nodeName = node.name;
        if (node.type.includes("section")) {
            nodeDict[nodeName].color = colors.sectionColor;
        } else if (node.type in envDict) {
            nodeDict[nodeName].color = colors.envColor;
        } else {
            nodeDict[nodeName].color = colors.nodeColor;
        }


    });
    

    arrowMarker.style("fill", colors.linkColor);

    svgLinks
            .attr("stroke", getLinkColor)

        envRect.attr("fill", colors.envColor);
       

     
        svgSectionLine.attr("fill", colors.sectionColor);
       
        nodeCircles.attr("fill", colors.nodeColor);

    
}


function displayInfoAboutNode() {

    let nodeName = document.getElementById("nodeName");
    let nodeCreatedAt = document.getElementById("nodeCreatedAt");
    let nodeType = document.getElementById("nodeType");
    if (currentSelectedNode != null) {

        let createdAtType = "";
        let tmpCreatedAt = currentSelectedNode.createdAt.toLowerCase();
        if (tmpCreatedAt != "document" && tmpCreatedAt != "bibfile" && tmpCreatedAt != "bbl" ) {
            createdAtType = nodeDict[currentSelectedNode.createdAt].type
        }
            


        nodeName.innerHTML = currentSelectedNode.name;
        nodeCreatedAt.innerHTML = "Defined in " + createdAtType + ": " + currentSelectedNode.createdAt;
        nodeType.innerHTML = "Type : " + currentSelectedNode.type;
    } else {
        nodeName.innerHTML = "";
        nodeCreatedAt.innerHTML = "";
        nodeType.innerHTML = "";
    }

    
    
}

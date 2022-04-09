

function test() {
    console.log("From CreateGraph");
}

let nodes;
let links;

function createGraph(json) {


    nodes = json.nodes;
    links = json.links;


    //makeGraph(nodes, links);
    //newGraph(nodes, links);

    funGraph(nodes, links);
    //lineGraph(nodes, links);

}

function createLine() {
    lineGraph();
}

// inclusive min and exclusive max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function lineGraph() {

    var allNodes = [
        { name: "node1", lineNumber: 55, type: "section" },
        { name: "citat af bob", lineNumber: 100, type: "label" },
        { name: "node3", lineNumber: 150, type: "section" },
        { name: "node4", lineNumber: 300, type: "label" },
        { name: "node5", lineNumber: 500, type: "section" },
        { name: "node6", lineNumber: 520, type: "label" },

        { name: "node7", lineNumber: 250, type: "label" },
        { name: "node8", lineNumber: 280, type: "label" },
        { name: "node9", lineNumber: 400, type: "label" },

        { name: "refNode1", lineNumber: 500, type: "refNode" },
        { name: "refNode2", lineNumber: 70, type: "refNode" },
        { name: "refNode3", lineNumber: 460, type: "refNode" },
       

    ];

    var links = [
        { source: "citat af bob", target: "node4", type: "" },
        { source: "node4", target: "node6", type: "" },
        { source: "node6", target: "citat af bob", type: "" },

        { source: "refNode1", target: "node7", type: "" },
        { source: "refNode2", target: "node7", type: "" },
        { source: "refNode3", target: "node7", type: "" }
    ];

    function compare(a, b) {
        if (a.lineNumber < b.lineNumber) {
            return -1;
        }
        if (a.lineNumber > b.lineNumber) {
            return 1;
        }
        return 0;
    }


    allNodes.sort(compare);

    // create dict of nodes for lookup later
    nodeDict = {}
    allNodes.forEach(node => {
        nodeDict[node.name] = node;
        nodeDict[node.name].refSize = 1;
        nodeDict[node.name].y = 1;
    })

    
    // for each ref make target Bigger
    links.forEach(link => {
        nodeDict[link.target].refSize += 2;

    });

    var sectionNodes = [];
    var normalNodes = [];

    // filter for sections and other nodes
    allNodes.forEach(node => {
        if (node.type == "section") {
            console.log("section");
            sectionNodes.push(node);
        }
        else {
            normalNodes.push(node);
        }
    });

    console.log(allNodes[0].lineNumber)


    const width = window.innerWidth;
    const height = 500;
    const xaxisHeight = 10;
    var nodeYIndex = 10;
    const nodeColor = "gray"

    // select the svg for creating the graph
    // and configure the width and height
    var svg = d3.select("#d3graph")
                .append("svg")
                .attr("width", width)
                .attr("height", height);


    // create arrow-head 
    svg.append("svg:defs").append("svg:marker")
        .attr("id", "triangle")
        .attr("refX", 6)
        .attr("refY", 6)
        .attr("markerWidth", 30)
        .attr("markerHeight", 30)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 12 6 0 12 3 6")
        .style("fill", "black");

    // link arrow
    var linkarrow = svg.append("svg:defs").append("svg:marker")
        .attr("id", "linkArrow")
        .attr("refX", 12)
        .attr("refY", 3)
        .attr("markerWidth", 15)
        .attr("markerHeight", 15)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 6 3 0 6 2 3")
        .style("fill", "black");

    // create xaxis (line + arrow) 
    var xaxis = svg.append('g')
        .append("line")
        .attr('stroke-width', 2)
        .attr('stroke', 'black')
        .attr("x1", 50)
        .attr("y1", xaxisHeight)
        .attr("x2", width - 50)
        .attr("y2", xaxisHeight)
        .attr("marker-end", "url(#triangle)");


    var svgNodes = svg
        .selectAll('circle')
        .data(normalNodes)
        .enter().append('g')

    var nodeCircles = svgNodes.append('circle')
        .attr('r', getRadiusNode)
        .attr('fill', "gray")
        .attr('cx', getLineNumber)
        .attr('cy', getRandomNodeY);

    var textElements = svgNodes
        .append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr("dx", node => node.lineNumber + 10)
        .attr("dy", node => nodeDict[node.name].y)
        .attr("visibility", "hidden");

    

    nodeCircles.on("click", function (selected) {
        
        console.log(selected);

        textElements.attr("visibility", function (node) { return showName(node, selected) });
        nodeCircles.attr("fill", function (node) { return selectNode(node, selected) });
    })

    console.log(sectionNodes)

    var svgSection = svg.append('g')
        .selectAll("#sectionLine")
        .data(sectionNodes)
        .enter()
        .append('line')
        .attr('stroke-width', 2)
        .attr('stroke', 'red')
        .attr("x1", getLineNumber)
        .attr("y1", xaxisHeight - 10)
        .attr("x2", getLineNumber)
        .attr("y2", xaxisHeight + 10)


    var links = svg
        .selectAll('mylinks')
        .data(links)
        .enter()
        .append('path')
        .attr('d', createArc)
        .attr("stroke", randomColor)
        .attr('stroke-width', 2)
        .style("fill", "none")
        .attr("marker-end", "url(#linkArrow)");

    function getRadiusNode(node) {
        if (node.type == "refNode") {
            return 3;
        }
        return node.refSize +5;
    }

    function getLineNumber(node) {
        return node.lineNumber;

    }
    function randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    

    function createArc(d) {

        start = nodeDict[d.source].lineNumber    // X position of start node on the X axis
        end = nodeDict[d.target].lineNumber      // X position of end node

        startY = nodeDict[d.source].y
        endY = nodeDict[d.target].y
        return ['M', start, startY,    // the arc starts at the coordinate x=start, y=height-10 (where the starting node is)
            'A',                            // This means we're gonna build an elliptical arc 
            (start - end) , ',',         // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance 
            (start - end) , 0, 0, ',',
            start < end ? 1 : 1, end, ',', endY] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
            .join(' ');

    }

    function getRandomNodeY(node) {

        //let randomInt = getRandomInt(0, 200);
        nodeYIndex += 10;

        nodeDict[node.name].y = xaxisHeight + nodeYIndex;

        return xaxisHeight + nodeYIndex;
    }

    function selectNode(node, selected) {

        if (node.name == selected.name) {
            return "green";
        }
        else {
            return nodeColor;

        }

    }

    function showName(node, selected) {
        if (node.name == selected.name) {
            return "visible";
        }
        else {
            return "hidden";

        }
    }

    
   


}




// uses d3 v4 
function funGraph(nodes, links) {

    const width = 500;
    const height = 400;

    var svg = d3.select('#d3graph').append('svg')
        .attr('width', width)
        .attr('height', height);

    // simulation setup with all forces
    var linkForce = d3
        .forceLink()
        .id(function (link) { return link.name })
        .strength(function (link) { return 0.5 })

    var simulation = d3.forceSimulation()
        .force('link', linkForce)
        .force('charge', d3.forceManyBody().strength(-30))
        .force('center', d3.forceCenter(width / 2, height / 2));

    console.log("Gravity: " + (width / 2)+  " "+ (height / 2));



    // method for drag and drop
    const dragDrop = d3.drag()
        .on('start', node => {
            node.fx = node.x
            node.fy = node.y
        })
        .on('drag', node => {
            simulation.alphaTarget(0.7).restart()
            node.fx = d3.event.x
            node.fy = d3.event.y
        })
        .on('end', node => {
            if (!d3.event.active) {
                simulation.alphaTarget(0)
            }
            node.fx = null
            node.fy = null
        });


    const linkElements = svg.append('g')
        .selectAll('line')
        .data(links)
        .enter().append('line')
        .attr('stroke-width', 1)
        .attr('stroke', '#E5E5E5');


    var nodeElements = svg.append('g')
        .selectAll('circle')
        .data(nodes)
        .enter().append('circle')
        .attr('r', 5)
        .attr('fill', "gray")
        .call(dragDrop)
        .on('click', selectNode);

    var textElements = nodeElements.append('g')
        .selectAll('text')
        .data(nodes)
        .enter().append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr('dx', 15)
        .attr('dy', 4);

    

    simulation.nodes(nodes).on('tick', () => {
        nodeElements
            .attr('cx', function (node) { return node.x })
            .attr('cy', function (node) { return node.y })
        textElements
            .attr('x', function (node) { return node.x })
            .attr('y', function (node) { return node.y })
        linkElements
            .attr('x1', function (link) { return link.source.x })
            .attr('y1', function (link) { return link.source.y })
            .attr('x2', function (link) { return link.target.x })
            .attr('y2', function (link) { return link.target.y })
    })

    simulation.force("link").links(links);


    function getNeighbors(node) {
        return links.reduce(function (neighbors, link) {
            if (link.target.name === node.name) {
                neighbors.push(link.source.name)
            } else if (link.source.name === node.name) {
                neighbors.push(link.target.name)
            }
            return neighbors
        },
            [node.id]
        )
    }

    function isNeighborLink(node, link) {
        return link.target.name === node.name || link.source.name === node.name
    }

    function selectNode(selectedNode) {
        var neighbors = getNeighbors(selectedNode)

        // we modify the styles to highlight selected nodes
        nodeElements.attr('fill', function (node) { return getNodeColor(node, neighbors) })
        textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
        linkElements.attr('stroke', function (link) { return getLinkColor(selectedNode, link) })
    }

    function getNodeColor(node, neighbors) {
        if (Array.isArray(neighbors) && neighbors.indexOf(node.name) > -1) {
            return 'green';
        }

        return 'gray';
    }


    function getLinkColor(node, link) {
        return isNeighborLink(node, link) ? 'green' : '#E5E5E5'
    }

    function getTextColor(node, neighbors) {
        return Array.isArray(neighbors) && neighbors.indexOf(node.name) > -1 ? 'green' : 'black'
    }



 

}



function newGraph(nodes, links) {

    
    
    var width = 640,
        height = 480;

    var nodeWidth = 5;

    // Before we do anything else, let's define the data for the visualization.

    //var dataNodes = [];
    //for (let key in node_dict) {
    //    dataNodes.push(node_dict[key])
    //}

    // Here's were the code begins. We start off by creating an SVG
    // container to hold the visualization. We only need to specify
    // the dimensions for this container.

    var svg = d3.select('#d3graph').append('svg')
        .attr('width', width)
        .attr('height', height);

    // Extract the nodes and links from the data.

    for (var i = 0, leni = links.length; i < leni; i++) {
        for (var j = 0, lenj = nodes.length; j < lenj; j++) {

            //console.log("Source : "+links[i].source)
            //console.log("Target : "+ links[i].target)
            //console.log("nodeName : " + nodes[j].name)
            
            if (links[i].source == nodes[j].name) {
                links[i].source = j;
            }
            
            if (links[i].target == nodes[j].name) {
                //console.log("TARGET");
                links[i].target = j;
            }
        }
    }

        
     //links.forEach(element => {
     //    console.log(element)
     //    console.log(element.target in dataNodes)
     //});
    console.log("amount of nodes " + nodes.length)
    console.log("amount of links " + links.length)
    // Now we create a force layout object and define its properties.
    // Those include the dimensions of the visualization and the arrays
    // of nodes and links.

    var force = d3.layout.force()
        .size([width, height])
        .nodes(nodes)
        .links(links)
        .on("tick", tick)
        .charge(-200)
        .linkDistance(50)

    // There's one more property of the layout we need to define,
    // its `linkDistance`. That's generally a configurable value and,
    // for a simple example, we'd normally leave it at its default.
    // Unfortunately, the default value results in a visualization
    // that's not especially clear. This parameter defines the
    // distance (normally in pixels) that we'd like to have between
    // nodes that are connected. (It is, thus, the length we'd
    // like our links to have.)

    force.gravity(0.5);

    // Next we'll add the nodes and links to the visualization.
    // Note that we're just sticking them into the SVG container
    // at this point. We start with the links. The order here is
    // important because we want the nodes to appear "on top of"
    // the links. SVG doesn't really have a convenient equivalent
    // to HTML's `z-index`; instead it relies on the order of the
    // elements in the markup. By adding the nodes _after_ the
    // links we ensure that nodes appear on top of links.

    // Links are pretty simple. They're just SVG lines. We're going
    // to position the lines according to the centers of their
    // source and target nodes. You'll note that the `source`
    // and `target` properties are indices into the `nodes`
    // array. That's how our JSON is structured and that's how
    // D3's force layout expects its inputs. As soon as the layout
    // begins executing, however, it's going to replace those
    // properties with references to the actual node objects
    // instead of indices.

    svg.append("defs").append("marker")
    .attr("id", "marker")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", nodeWidth+10)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5");

    var link = svg.selectAll('.link')
        .data(links)
        .enter().append('line')
        .attr("marker-end", "url(#marker)")
        .attr('class', 'link');
        
        // .attr('x1', function(d) { return d.source.x; })
        // .attr('y1', function(d) { return d.source.y; })
        // .attr('x2', function(d) { return d.target.x; })
        // .attr('y2', function(d) { return d.target.y; });

    // Now it's the nodes turn. Each node is drawn as a circle and
    // given a radius and initial position within the SVG container.
    // As is normal with SVG circles, the position is specified by
    // the `cx` and `cy` attributes, which define the center of the
    // circle. We actually don't have to position the nodes to start
    // off, as the force layout is going to immediately move them.
    // But this makes it a little easier to see what's going on
    // before we start the layout executing.

    var noded3 = svg.selectAll('.node')
        .data(nodes)
        .enter().append('circle')
        .attr('class', 'node')
        .attr('r', nodeWidth);
    
    var text2 = svg.selectAll("textCircle")
    .data(nodes)
    .enter()
    .append("text")
    .attr("class", "labels")
    .text(function(d) { return d.name })
    
    // .style("text-anchor", "middle")
    // .style("font-weight", "bold")
    // .style("font-size", "10pt")
    // .style("fill", "#344761");

    // var text = svg.append("g")
    //     .attr("class", "labels")
    //     .selectAll("text")
    //     .data(nodes)
    //     .enter().append("text")
    //     .attr()
    //     .text(function(d) { return d.name });

        // .attr('cx', function(d) { return d.x; })
        // .attr('cy', function(d) { return d.y; });


    // Next we define a function that executes at each
    // iteration of the force layout.

    noded3.each(function(d){
        if (d.type) {
            d3.select(this).classed(d.type, true)
        }
    });

    function tick(e) {

        // When this function executes, the force layout
        // calculations have been updated. The layout will
        // have set various properties in our nodes and
        // links objects that we can use to position them
        // within the SVG container.

        // First let's reposition the nodes. As the force
        // layout runs it updates the `x` and `y` properties
        // that define where the node should be centered.
        // To move the node, we set the appropriate SVG
        // attributes to their new values.

        // Because we want to emphasize how the nodes and
        // links move, we use a transition to move them to
        // their positions instead of simply setting the
        // values abruptly.

        // noded3.transition().ease('linear').duration(100)
        //     .attr('cx', function(d) { return d.x; })
        //     .attr('cy', function(d) { return d.y; });
            //.call(force.drag); // function for dragging

        noded3.attr('cx', function(d) { return d.x; })
              .attr('cy', function(d) { return d.y; })
              .call(force.drag);

        // We also need to update positions of the links.
        // For those elements, the force layout sets the
        // `source` and `target` properties, specifying
        // `x` and `y` values in each case.

        // Here's where you can see how the force layout has
        // changed the `source` and `target` properties of
        // the links. Now that the layout has executed at least
        // one iteration, the indices have been replaced by
        // references to the node objects.

        link.attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });

        text2.attr('dx', function(d) { return d.x; })
        .attr('dy', function(d) { return d.y; })
        
    };

 
   

    force.start()
}


function makeGraph(nodes, links) {

    // Define the dimensions of the visualization. We're using
    // a size that's convenient for displaying the graphic on
    // http://jsDataV.is

    var width = 640,
        height = 480;

    // Before we do anything else, let's define the data for the visualization.

    //var dataNodes = [];
    //for (let key in node_dict) {
    //    dataNodes.push(node_dict[key])
    //}

    // Here's were the code begins. We start off by creating an SVG
    // container to hold the visualization. We only need to specify
    // the dimensions for this container.

    var svg = d3.select('#d3graph').append('svg')
        .attr('width', width)
        .attr('height', height);

    // Extract the nodes and links from the data.

    for (var i = 0, leni = links.length; i < leni; i++) {
        for (var j = 0, lenj = nodes.length; j < lenj; j++) {

            //console.log("Source : "+links[i].source)
            console.log("Target : "+ links[i].target)
            console.log("nodeName : " + nodes[j].name)
            
            if (links[i].source == nodes[j].name) {
                links[i].source = j;
            }
            
            if (links[i].target == nodes[j].name) {
                console.log("TARGET");
                links[i].target = j;
            }
        }
    }

    

    links.forEach(print);

    function print(item, index) {

        console.log(item);

    }

    var force = d3.layout.force()
        .size([width, height])
        .nodes(nodes)
        .links(links);

    // There's one more property of the layout we need to define,
    // its `linkDistance`. That's generally a configurable value and,
    // for a simple example, we'd normally leave it at its default.
    // Unfortunately, the default value results in a visualization
    // that's not especially clear. This parameter defines the
    // distance (normally in pixels) that we'd like to have between
    // nodes that are connected. (It is, thus, the length we'd
    // like our links to have.)

    force.linkDistance(width / 3.05);

    // Next we'll add the nodes and links to the visualization.
    // Note that we're just sticking them into the SVG container
    // at this point. We start with the links. The order here is
    // important because we want the nodes to appear "on top of"
    // the links. SVG doesn't really have a convenient equivalent
    // to HTML's `z-index`; instead it relies on the order of the
    // elements in the markup. By adding the nodes _after_ the
    // links we ensure that nodes appear on top of links.

    // Links are pretty simple. They're just SVG lines, and
    // we're not even going to specify their coordinates. (We'll
    // let the force layout take care of that.) Without any
    // coordinates, the lines won't even be visible, but the
    // markup will be sitting inside the SVG container ready
    // and waiting for the force layout.

    var link = svg.selectAll('.link')
        .data(links)
        .enter().append('line')
        .attr('class', 'link');

    // Now it's the nodes turn. Each node is drawn as a circle.

    var node = svg.selectAll('.node')
        .data(nodes)
        .enter().append('circle')
        .attr('class', 'node');

    // We're about to tell the force layout to start its
    // calculations. We do, however, want to know when those
    // calculations are complete, so before we kick things off
    // we'll define a function that we want the layout to call
    // once the calculations are done.

    force.on('end', function () {

        // When this function executes, the force layout
        // calculations have concluded. The layout will
        // have set various properties in our nodes and
        // links objects that we can use to position them
        // within the SVG container.

        // First let's reposition the nodes. As the force
        // layout runs it updates the `x` and `y` properties
        // that define where the node should be centered.
        // To move the node, we set the appropriate SVG
        // attributes to their new values. Also give the
        // nodes a non-zero radius so they're visible.

        node.attr('r', width / 100)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; });

        // We also need to update positions of the links.
        // For those elements, the force layout sets the
        // `source` and `target` properties, specifying
        // `x` and `y` values in each case.

        link.attr('x1', function (d) { return d.source.x; })
            .attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; })
            .attr('y2', function (d) { return d.target.y; });

    });

    // Okay, everything is set up now so it's time to turn
    // things over to the force layout. Here we go.

    force.start();


};
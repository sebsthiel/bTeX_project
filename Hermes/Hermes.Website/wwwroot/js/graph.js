
document.getElementById("fileInput").addEventListener("change", function () {
    let test;
    var fr = new FileReader();
    fr.onload = function () {
        test = fr.result
        //document.getElementById('output').textContent = test;
        searchFile(test);
        makeGraph();
        console.log("HEJSA");
        
    }

    fr.readAsText(this.files[0]);

})

//Label
// ccould use this node for referencing articles
// by adding a field "informationNode"
// for a normal label this would just be = null
class node {
    constructor(name, createdAt, type) {
        this.name = name;
        this.createdAt = createdAt;
        this.type = type;
        this.id = name;
    }
}

class envNode extends node {
    constructor(name, createdAt, type, references, counter) {
        super(name, createdAt, type);
        this.references = references;
        this.counter = counter;
        this.id = name;
    }
}

class env {
    constructor(name, text, counter, countersShouldReset, countersShouldUpdate) {
        this.name = name;
        this.text = text;
        this.counter = counter;
        this.countersShouldReset = countersShouldReset;
        this.countersShouldUpdate = countersShouldUpdate;
    }

    addToCounterShouldReset(env) {
        this.countersShouldReset.push(env);
    }

    addToCounterShouldUpdate(env) {
        this.countersShouldUpdate.push(env);
    }
}

function add(env, ref) {
    env.references.push(ref);
}

function startsWith(str1, str2) {
    let aStr = String(str1);
    let bStr = String(str2);
    if (aStr.length < bStr.length) {
        return false;
    }
    let charArray1 = [...aStr];
    let charArray2 = [...bStr];
    for (let i = 0; i < charArray2.length; i++) {
        if (charArray1[i] != charArray2[i]) {
            return false;
        }
    }
    return true;
}



// node_name -> node dict
var node_dict = {};
var linksList = [];

var sectionEnv = new env("section", "section", 0, [], []);
// list of env made with the \newtheorem command
var envTypeDict = {};

envTypeDict["section"] = sectionEnv;

//Returns createdAt's counter
function calTotalCount(createdAt)
{
    let newCreatedAt = createdAt;
    let acc = ""
    while (newCreatedAt in node_dict) {
        acc = String(node_dict[newCreatedAt].counter) + "." + acc;
        newCreatedAt = node_dict[newCreatedAt].createdAt;
    }
    return acc;
}

function subCount(section) {
    const re = /sub/g;
    return ((section || '').match(re) || []).length;
}

function subSection2Section(createdAt, diff){
    let newCreatedAt = createdAt;
    for (let i = 0; i < diff; i++) {
        newCreatedAt = node_dict[newCreatedAt].createdAt;   
    }
    return node_dict[newCreatedAt].createdAt;
}

function updateCounters(envName){

    envTypeDict[envName].counter = envTypeDict[envName].counter + 1;
              
    envTypeDict[envName].countersShouldUpdate.forEach(element => {
        envTypeDict[element].counter = envTypeDict[envName].counter;
    });
    
    envTypeDict[envName].countersShouldReset.forEach(element => {
        envTypeDict[element].counter = 1;
    });

}

var outerEnv = "DOCUMENT"

function searchFile(fileText) {
    const regex = /\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<newtheorem>newtheorem)(?<envName>{.+?})(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?/gm;
    ///\\((ref|label|section|cite?(p|t|author|year)?\*?){(.+?)})|(newtheorem)({.+?})({.+?}|\[.+?\])({.+?}|\[.+?\])?/gm;
    let createdAt = outerEnv;

   
    let match = regex.exec(fileText);
    
    do {
        
        let node1 = null;
       
        if (match.groups.type == "section") {
            //TODO What if sub-sections?
            //currentSection++;
            //console.log(`Section ${match.groups.typeName} is defined in ${outerEnv}`);

            // currentSection = this new env //TODO: counter should not be zero
            let newEnvNode = new envNode(match.groups.typeName, outerEnv, match.groups.type, [], envTypeDict["section"].counter);

            // Update section counter and stuff that depends on it
            updateCounters("section");

            createdAt = match.groups.typeName; 
            
            // add newEnvNode to node:dict
            node_dict[match.groups.typeName] = newEnvNode;
        }
        else if (startsWith(match.groups.type, "sub")) {
           
            // tjek hvor mange sub den har
            let subCountSubsection = subCount(match.groups.type); //current
            let subCountCreatedAt = subCount(node_dict[createdAt].type);
            let newSubSection = null;
            console.log(subCountSubsection + " " + subCountCreatedAt);
            if (subCountSubsection == subCountCreatedAt) {
                // same sub amount
                
                
                // Update Counters
                newSubSection = new envNode(match.groups.typeName, node_dict[createdAt].createdAt, match.groups.type, [], envTypeDict[match.groups.type].counter);
                updateCounters(match.groups.type);
                //console.log(`SUB: ${match.groups.type} ${match.groups.typeName} is defined in ${node_dict[createdAt].createdAt}`);
                createdAt = newSubSection.name;
                
            }
            else if (subCountSubsection > subCountCreatedAt) {
                
                // større sub amount
                // hvis denne subsection IKKE findes i envTypeDict
                if (!(match.groups.type in envTypeDict)) {
                    envTypeDict[match.groups.type] = new env(match.groups.type, match.groups.type, 1, [], []);

                    // skal vi adde den som afhængig af createdAt (counter)
                    //console.log(createdAt);
                    let createdAtType = node_dict[createdAt].type;                    
                    envTypeDict[createdAtType].addToCounterShouldReset(match.groups.type);
                }

                // newEnvNode() med createdAt som createdAt
                newSubSection = new envNode(match.groups.typeName, createdAt, match.groups.type, [], envTypeDict[match.groups.type].counter);
                    
                // updateCounters
                //console.log(`SUB: ${match.groups.type} ${match.groups.typeName} is defined in ${createdAt}`);
                updateCounters(match.groups.type);
                createdAt = newSubSection.name;
                
                
                

            } 
            else if (subCountSubsection < subCountCreatedAt) {
                // mindre sub amount
                // newEnvNode() med createdAt.createdAt
                let differenceInSubCount = (subCountCreatedAt - subCountSubsection);
               
                let newCreatedAt = subSection2Section(createdAt, differenceInSubCount);
                newSubSection = new envNode(match.groups.typeName, newCreatedAt, match.groups.type, [], envTypeDict[match.groups.type].counter);

                // updateCounters 
                updateCounters(match.groups.type);
                //console.log(`SUB: ${match.groups.type} ${match.groups.typeName} is defined in ${newCreatedAt}`);
                createdAt = newCreatedAt;
                
                
            }

            node_dict[match.groups.typeName] = newSubSection;
            

            

            
        }
        else if (match.groups.type == "label") {
            //console.log(`Label ${match.groups.typeName} is defined in ${createdAt}`);
            node1 = new node(match.groups.typeName, createdAt, match.groups.type);
        }
        else if (match.groups.type == "ref") {
            //console.log(`Ref ${match.groups.typeName} is defined in ${createdAt}`);
            //TODO Ref should not create new node1 but should add a reference
            // from current env
            // if not in env then currentSection
            //node1 = new node(Ref, match.groups.typeName, createdAt, []);

            // adding reference to the currentEnv references.
            // this reference is a name of a node (label)
            
            //add(node_dict[createdAt], match.groups.typeName);
            console.log("adding: " + createdAt + " -> " + match.groups.typeName );
            linksList.push({"source": createdAt, "target": match.groups.typeName, "type": "ref"});
        }
        else if (startsWith(match.groups.type, "cite")) {
            //console.log(`Cite ${match.groups.typeName} is defined in ${createdAt}`);
            
            //add(node_dict[createdAt], match.groups.typeName);
            //console.log("adding: " + createdAt + " -> " + match.groups.typeName );
            //linksList.push({"source": createdAt, "target": match.groups.typeName, "type": "cite"});
        }
        else if (match.groups.type == "begin"){
    
            //console.log(`Begin ${match.groups.typeName} is defined in ${createdAt}`);

            // Make sure that stuff like enumerate isn't created as a node
            if(!(match.groups.typeName in envTypeDict)){
                continue;
            }
                
            let thisEnvCount = calTotalCount(createdAt) + String(envTypeDict[match.groups.typeName].counter);
            console.log("thisEnvCount: " + thisEnvCount)
            //Example of name: Lemma 1.2.4
            let newEnvNodeName = match.groups.typeName + " " + thisEnvCount;
            let newEnvNode = new envNode(newEnvNodeName, createdAt, match.groups.typeName, [], thisEnvCount); 
            node_dict[newEnvNodeName] = newEnvNode;

            // update counter
            updateCounters(match.groups.typeName);
            //envTypeDict[match.groups.typeName].counter = envTypeDict[match.groups.typeName].counter + 1;
            
            //envTypeDict[match.groups.typeName].countersShouldUpdate.forEach(element => {
            //    envTypeDict[element].counter = envTypeDict[match.groups.typeName].counter;
            //});
            
            //envTypeDict[match.groups.typeName].countersShouldReset.forEach(element => {
            //    envTypeDict[element].counter = 1;
            //});

            createdAt = newEnvNodeName;
            

        }
        else if (match.groups.type == "end"){
           
            //console.log(`End ${match.groups.typeName} is defined in ${createdAt}`);
            
            // Makes sure that the end of types like eunemerate doesn't affect the current environment
            if(!(match.groups.typeName in envTypeDict)){
                continue;
            }

            if(createdAt != outerEnv)
                createdAt = node_dict[createdAt].createdAt;
            
            // counter ++
            // go through lists and update / reset

        }

        if (match.groups.newtheorem == "newtheorem") {
            //console.log(`Theorem ${match.groups.newtheorem} is defined in ${createdAt}`);

            let envName = String(match.groups.envName).replace(/{|}/gm, '');
            let arg2 = String(match.groups.arg2);
            let arg3 = String(match.groups.arg3);
            let envText;
            let counterName;
            if (arg2.startsWith('{')) {
                envText = arg2.replace(/{|}/gm, '');

                // env should get own counter witch will reset each time the counterName is called
                // this counterName could for example be \begin{theorem} or just \section

                // check if there is a counter in the command
                if (arg3 != "undefined") {
                    counterName = arg3.replace(/\[|\]/gm, '');
                    // add this new env to dict{counterName}.counterShouldReset
                    if (counterName in envTypeDict) {
                        envTypeDict[counterName].addToCounterShouldReset(envName);
                        //envTypeDict[counterName].countersShouldReset.push(envName);
                    } else {
                        console.warn("ENVIRONMENT that is referenced as counter does NOT exists 1 " + counterName + " " + arg3);
                    }
                }

                // The second argument (group7) starts with [, meaning its counter is dependent
                // on the env called counterName
            } else {
                envText = arg3.replace(/{|}/gm, '');

                counterName = arg2.replace(/\[|\]/gm, '');
                // create env
                // add env to env_dict
                // add this to dict{counterName}.CounterShouldUpdate
                if (counterName in envTypeDict) {
                    envTypeDict[counterName].addToCounterShouldUpdate(envName);
                    //envTypeDict[counterName].countersShouldUpdate.push(envText);
                } else {
                    console.warn("ENVIRONMENT that is referenced as counter does NOT exists 2");
                }
            }

            envTypeDict[envName] = new env(envName, envText, 1, [], []);
            if ("theorem" in envTypeDict) {
                //console.log("added env: " + envTypeDict["theorem"].name);
            }
        }

        if (node1 == null) {
            continue;
        }

        // Add current node to section
        if (createdAt in node_dict) {
            let tmp = node_dict[createdAt];
            //add(tmp, match.groups.typeName);
            console.log("adding: " + createdAt + " -> " + match.groups.typeName );
            linksList.push({"source": createdAt, "target": match.groups.typeName, "type": "createdIn"});
        }

        node_dict[node1.name] = node1;
    } while ((match = regex.exec(fileText)) !== null);
}





function makeGraph(){

    // Define the dimensions of the visualization. We're using
    // a size that's convenient for displaying the graphic on
    // http://jsDataV.is

    var width = 640,
        height = 480;

    var nodeWidth = width/50;

    // Before we do anything else, let's define the data for the visualization.

    var dataNodes = [];
    for(let key in node_dict){
        dataNodes.push(node_dict[key])
    }

    // Here's were the code begins. We start off by creating an SVG
    // container to hold the visualization. We only need to specify
    // the dimensions for this container.

    var svg = d3.select('#d3graph').append('svg')
        .attr('width', width)
        .attr('height', height);

    // Extract the nodes and links from the data.
    var nodes = dataNodes,
        links = linksList;

    for (var i = 0, leni = links.length; i < leni; i++) {
        for (var j = 0, lenj = nodes.length; j < lenj; j++) {
            if (links[i].source == nodes[j].id) {
            links[i].source = j;
            }
            if (links[i].target == nodes[j].id) {
            links[i].target = j;
            }
        }
    }

    
    // linksList.forEach(element => {
    //     console.log(element)
    //     console.log(element.target in dataNodes)
    // });
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
        .linkDistance(width/2.5)
        .charge(-300);

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
            console.log("HEY: " + d.type)
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
};
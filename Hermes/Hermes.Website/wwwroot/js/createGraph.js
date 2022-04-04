

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

}


// uses d3 v4
function funGraph(nodes, links) {

    //nodes = [
    //    { id: "mammal", group: 0, label: "Mammals", level: 1 },
    //    { id: "dog", group: 0, label: "Dogs", level: 2 },
    //    { id: "cat", group: 0, label: "Cats", level: 2 },
    //    { id: "fox", group: 0, label: "Foxes", level: 2 },
    //    { id: "elk", group: 0, label: "Elk", level: 2 },
    //    { id: "insect", group: 1, label: "Insects", level: 1 },
    //    { id: "ant", group: 1, label: "Ants", level: 2 },
    //    { id: "bee", group: 1, label: "Bees", level: 2 },
    //    { id: "fish", group: 2, label: "Fish", level: 1 },
    //    { id: "carp", group: 2, label: "Carp", level: 2 },
    //    { id: "pike", group: 2, label: "Pikes", level: 2 }
    //];

    //links = [
    //    { target: "mammal", source: "dog", strength: 0.7 },
    //    { target: "mammal", source: "cat", strength: 0.7 },
    //    { target: "mammal", source: "fox", strength: 0.7 },
    //    { target: "mammal", source: "elk", strength: 0.7 },
    //    { target: "insect", source: "ant", strength: 0.7 },
    //    { target: "insect", source: "bee", strength: 0.7 },
    //    { target: "fish", source: "carp", strength: 0.7 },
    //    { target: "fish", source: "pike", strength: 0.7 },
    //    { target: "cat", source: "elk", strength: 0.1 },
    //    { target: "carp", source: "ant", strength: 0.1 },
    //    { target: "elk", source: "bee", strength: 0.1 },
    //    { target: "dog", source: "cat", strength: 0.1 },
    //    { target: "fox", source: "ant", strength: 0.1 },
    //    { target: "pike", source: "dog", strength: 0.1 }
    //];

    const width = 900;
    const height = 900;

    var svg = d3.select('#d3graph').append('svg')
        .attr('width', width)
        .attr('height', height);

    // simulation setup with all forces
    var linkForce = d3
        .forceLink()
        .id(function (link) { return link.name })
        .strength(function (link) { return 0.1 })

    var simulation = d3.forceSimulation()
        .force('link', linkForce)
        .force('charge', d3.forceManyBody().strength(-120))
        .force('center', d3.forceCenter(width / 2, height / 2));

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
        .attr('r', 10)
        .attr('fill', "gray")
        .call(dragDrop);

    var textElements = svg.append('g')
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
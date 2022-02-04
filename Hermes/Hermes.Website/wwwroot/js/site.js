var test;
document.getElementById("fileInput").addEventListener("change", function () {

    var fr = new FileReader();
    fr.onload = function () {
        test = fr.result
        document.getElementById('output').textContent = test;
        searchFile(test);
    }

    fr.readAsText(this.files[0]);
    


})


function node(type, name, createdAt, references)
{
    this.type = type;
    this.name = name;
    this.createdAt = createdAt;
    this.references = references;  
}

function add(node, ref){
    node.references.push(ref);
}
// enums
const Label     = 0;
const Ref       = 1;
const Section   = 2;
const Cite      = 3;
const Theorem   = 4;


// node_name -> node dict
var node_dict = {};

function searchFile(fileText) {
    const regex = /\\((ref|label|section|cite?(p|t|author|year)?\*){(.+?)})|newtheorem({.+?})({.+?}|\[.+?\])({.+?}|\[.+?\])?/gm;
    
    const commands = [...fileText.matchAll(regex)];
    //console.log(arrayTest[0])

    let currentSection = 0
    for (let i = 0; i < commands.length; i++) {
        const currentCommand = commands[i];
        let node1;
        if (currentCommand[2] == "section") {
            //TODO What if subsections?
            currentSection++;
            node1 = new node(Section, currentCommand[2], currentSection,[]);
        }
        else if (currentCommand[2] == "label") {
            console.log("label " + currentCommand[4] + " is defined in " + currentSection);
            node1 = new node(Label, currentCommand[4], currentSection, []);
            

        }
        else if (currentCommand[2] == "ref") {

            console.log("ref")
        }
        else if (currentCommand[2].startsWith("cite")) {
            console.log("cite")

        }
        node_dict[node1.name] = node1;
    }
    console.log("HALLO");

    console.log("DICT: " + node_dict["rank3"].createdAt);

}


//  \\((ref|label|section|cite?(p|t|author|year)?\*){(.+?)})


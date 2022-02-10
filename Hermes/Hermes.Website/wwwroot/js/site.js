document.getElementById("fileInput").addEventListener("change", function () {
    let test;
    var fr = new FileReader();
    fr.onload = function () {
        test = fr.result
        document.getElementById('output').textContent = test;
        searchFile(test);
    }

    fr.readAsText(this.files[0]);
    
})


function node(type, name, createdAt, references) {
    this.type = type;
    this.name = name;
    this.createdAt = createdAt;
    this.references = references;  
}

function env(name, text, counter, countersShouldReset, countersShouldUpdate){
    this.name = name;
    this.text = text;
    this.counter = counter;
    this.countersShouldReset = countersShouldReset;
    this.countersShouldUpdate = countersShouldUpdate;
}

function add(node, ref) {
    node.references.push(ref);
}

function startsWith(str1, str2) { 
    let aStr = String(str1);
    let bStr = String(str2);
    if (aStr.length < bStr.length) {
        return false;
    }
    let charArray1 = [...aStr];
    let charArray2 = [...bStr];
    for (let i = 0; i < charArray1.length; i++) {
        if (charArray1[i] != charArray2[i]) {
            return false;
        }
    }
    return true;
}

// enums
const Label     = 0;
const Ref       = 1;
const Section   = 2;
const Cite      = 3;
const Theorem   = 4;

// node_name -> node dict
var node_dict = {};


var sectionEnv = new env("section", "section", 0, [],[])
// list of env made with the \newtheorem command
var env_dict = {};
env_dict["section"] = sectionEnv;

function searchFile(fileText) {
    const regex = /\\((ref|label|section|cite?(p|t|author|year)?\*?){(.+?)})|(newtheorem)({.+?})({.+?}|\[.+?\])({.+?}|\[.+?\])?/gm;
    const commands = [...fileText.matchAll(regex)];
    //console.log(arrayTest[0])

    let currentSection = "";
    for (let i = 0; i < commands.length; i++) {
        const currentCommand = commands[i];
        let node1 = null;
        if (currentCommand[2] == "section") {
            //TODO What if sub-sections?
            //currentSection++;
            currentSection = currentCommand[4];
            node1 = new node(Section, currentCommand[4], currentSection, []);
        }
        else if (currentCommand[2] == "label") {
            //console.log("label " + currentCommand[4] + " is defined in " + currentSection);
            node1 = new node(Label, currentCommand[4], currentSection, []);
        }
        else if (currentCommand[2] == "ref") {
            //console.log("Ref " + currentCommand[4] + " is defined in " + currentSection);
            node1 = new node(Ref, currentCommand[4], currentSection, []);
        }
        else if (startsWith(currentCommand[2], "cite")) {
            //console.log("Cite " + currentCommand[4] + " is defined in " + currentSection);
            node1 = new node(Cite, currentCommand[4], currentSection, []);
        }
 
        if (currentCommand[5] == "newtheorem") {
            let group6 = String(currentCommand[6]).replace(/{|}/gm, '');
            let group7 = String(currentCommand[7]);
            let group8 = String(currentCommand[8]);
            let name;
            let counterName;
            if (group7.startsWith('{')) {
                name = group7.replace(/{|}/gm, '');

                // env should get own counter witch will reset each time the counterName is called
                // this counterName could for example be \begin{theorem} or just \section
                counterName = group8.replace(/\[|\]/gm, '');

                // add this to dict{counterName}.counterShouldReset

                if (counterName in env_dict) {
                    env_dict[counterName].countersShouldReset.push(name);
                } else {
                    console.log("Env is NULL 1");
                }

            } else {
                name = group8.replace(/{|}/gm, '');

                // env has same counter as group8
                counterName = group7.replace(/\[|\]/gm, '');
                // create env
                // add env to env_dict
                // add this to dict{counterName}.CounterShouldUpdate
                if (counterName in env_dict) {
                    env_dict[counterName].countersShouldUpdate.push(name);
                } else {
                    console.log("Env is NULL 2");
                }
            }

            env_dict[group6] = new env(group6, name, 0, [], []);
            if ("theorem" in env_dict) {
                console.log("added env: " + env_dict["theorem"].name);
            }
        }

        if(node1 == null) {
            continue;
        }
        
        
        console.log(node_dict);
        if(currentSection in node_dict){
            let tmp = node_dict[currentSection];
            add(tmp, currentCommand[4]);
        }

        node_dict[node1.name] = node1;
    }

}


//  \\((ref|label|section|cite?(p|t|author|year)?\*){(.+?)})


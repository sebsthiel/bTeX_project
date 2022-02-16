﻿document.getElementById("fileInput").addEventListener("change", function () {
    let test;
    var fr = new FileReader();
    fr.onload = function () {
        test = fr.result
        document.getElementById('output').textContent = test;
        searchFile(test);
    }

    fr.readAsText(this.files[0]);

})

//Label
// ccould use this node for referencing articles
// by adding a field "informationNode"
// for a normal label this would just be = null
class node {
    constructor(name, createdAt) {
        this.name = name;
        this.createdAt = createdAt;
    }
}

class envNode extends node{
    constructor(name, createdAt, references, counter)
    {
        super(name,createdAt);
        this.references = references;
        this.counter = counter;
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
        console.log("TYPE: " +match.groups.type);
        console.log("IS SUB SECTION : " + (startsWith(match.groups.type, "sub")));
        if (match.groups.type == "section") {
            //TODO What if sub-sections?
            //currentSection++;
            console.log(`Section ${match.groups.typeName} is defined in ${createdAt}`);

            // currentSection = this new env //TODO: counter should not be zero
            let newEnvNode = new envNode(match.groups.typeName, outerEnv, [], envTypeDict["section"].counter);

            // Update section counter and stuff that depends on it
            updateCounters("section");
            //envTypeDict["section"].counter = envTypeDict["section"].counter + 1;
            
            //envTypeDict["section"].countersShouldUpdate.forEach(element => {
            //    envTypeDict[element].counter = envTypeDict["section"].counter;
            //});
            
            //envTypeDict["section"].countersShouldReset.forEach(element => {
            //    envTypeDict[element].counter = 1;
            //});

            createdAt = match.groups.typeName; 
            
            // add newEnvNode to node:dict
            node_dict[match.groups.typeName] = newEnvNode;
        }
        else if (startsWith(match.groups.type, "sub")) {
            console.log(`Sub...Section ${match.groups.typeName} is defined in ${createdAt}`);
            // tjek hvor mange sub den har
            let subCountSubsection = subCount(match.groups.type);
            let subCountCreatedAt = subCount(createdAt);
            let newSubSection = null;
            console.log("SectionSubCount: " + subCountSubsection + " CreatedAtSubCount: " + subCountCreatedAt);
            if (subCountSubsection == subCountCreatedAt) {
                // same sub amount

                
                // Update Counters
                newSubSection = new envNode(match.groups.typeName, createdAt, [], envTypeDict[match.groups.type].counter);
                updateCounters(match.groups.type);
            }
            else if (subCountSubsection > subCountCreatedAt) {
                // større sub amount
                // hvis denne subsection IKKE findes i envTypeDict
                if (!(match.groups.type in envTypeDict)) {
                    envTypeDict[match.groups.type] = new env(match.groups.type, match.groups.type, 1, [], []);

                    // skal vi adde den som afhængig af createdAt (counter)
                    console.log(createdAt);
                    add(envTypeDict[createdAt].countersShouldReset, match.group.type);
                }

                // newEnvNode() med createdAt som createdAt
                newSubSection = new envNode(match.groups.typeName, createdAt, [], envTypeDict[match.groups.type]);
                    
                // updateCounters
                updateCounters(match.groups.type);
                createdAt = newSubSection.name;

            } 
            else if (subCountSubsection < subCountCreatedAt) {
                // mindre sub amount
                // newEnvNode() med createdAt.createdAt
                let differenceInSubCount = (subCountCreatedAt - subCountSubsection) -1;
                let newCreatedAt = subSection2Section(createdAt, differenceInSubCount);
                newSubSection = new envNode(match.groups.typeName, newCreatedAt);

                // updateCounters 
                updateCounters(match.groups.type);

                createdAt = newCreatedAt;
                
            }

            node_dict[match.groups.typeName] = newSubSection;
            
            

            

            

            
        }
        else if (match.groups.type == "label") {
            console.log(`Label ${match.groups.typeName} is defined in ${createdAt}`);
            node1 = new node(match.groups.typeName, createdAt);
        }
        else if (match.groups.type == "ref") {
            //TODO Ref should not create new node1 but should add a reference
            // from current env
            // if not in env then currentSection
            console.log(`Ref ${match.groups.typeName} is defined in ${createdAt}`);
            //node1 = new node(Ref, match.groups.typeName, createdAt, []);

            // adding reference to the currentEnv references.
            // this reference is a name of a node (label)
            add(node_dict[createdAt], match.groups.typeName);
        }
        else if (startsWith(match.groups.type, "cite")) {
            console.log(`Cite ${match.groups.typeName} is defined in ${createdAt}`);
            
            add(node_dict[createdAt], match.groups.typeName);
        }
        else if (match.groups.type == "begin"){
            console.log(`Begin ${match.groups.typeName} is defined in ${createdAt}`);

            // Make sure that stuff like enumerate isn't created as a node
            if(!(match.groups.typeName in envTypeDict)){
                continue;
            }
                
            let thisEnvCount = calTotalCount(createdAt) + envTypeDict[match.groups.typeName].counter;

            //Example of name: Lemma 1.2.4
            let newEnvNodeName = match.groups.typeName+" "+thisEnvCount;
            let newEnvNode = new envNode(newEnvNodeName, createdAt, [], thisEnvCount); 
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
            console.log(`End ${match.groups.typeName} is defined in ${createdAt}`);
            
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
            console.log(`Theorem ${match.groups.newtheorem} is defined in ${createdAt}`);

            let envName = String(match.groups.envName).replace(/{|}/gm, '');
            let group7 = String(match.groups.arg2);
            let group8 = String(match.groups.arg3);
            let envText;
            let counterName;
            if (group7.startsWith('{')) {
                envText = group7.replace(/{|}/gm, '');

                // env should get own counter witch will reset each time the counterName is called
                // this counterName could for example be \begin{theorem} or just \section

                // check if there is a counter in the command
                if (group8 != "undefined") {
                    counterName = group8.replace(/\[|\]/gm, '');
                    // add this new env to dict{counterName}.counterShouldReset
                    if (counterName in envTypeDict) {
                        envTypeDict[counterName].countersShouldReset.push(envName);
                    } else {
                        console.warn("ENVIRONMENT that is referenced as counter does NOT exists 1 " + counterName + " " + group8);
                    }
                }

                // The second argument (group7) starts with [, meaning its counter is dependent
                // on the env called counterName
            } else {
                envText = group8.replace(/{|}/gm, '');

                counterName = group7.replace(/\[|\]/gm, '');
                // create env
                // add env to env_dict
                // add this to dict{counterName}.CounterShouldUpdate
                if (counterName in envTypeDict) {
                    envTypeDict[counterName].countersShouldUpdate.push(envText);
                } else {
                    console.warn("ENVIRONMENT that is referenced as counter does NOT exists 2");
                }
            }

            envTypeDict[envName] = new env(envName, envText, 1, [], []);
            if ("theorem" in envTypeDict) {
                console.log("added env: " + envTypeDict["theorem"].name);
            }
        }

        if (node1 == null) {
            continue;
        }

        // Add current node to section
        if (createdAt in node_dict) {
            let tmp = node_dict[createdAt];
            add(tmp, match.groups.typeName);
        }

        node_dict[node1.name] = node1;
    } while ((match = regex.exec(fileText)) !== null);
}


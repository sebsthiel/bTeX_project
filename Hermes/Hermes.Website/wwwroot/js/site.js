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

//Label
// ccould use this node for referencing articles
// by adding a field "informationNode"
// for a normal label this would just be = null
function node(name, createdAt) {
    this.name = name;
    this.createdAt = createdAt;
}

function env(name, text, counter, countersShouldReset, countersShouldUpdate, createdAt, references) {
    this.name = name;
    this.text = text;
    this.counter = counter;
    this.countersShouldReset = countersShouldReset;
    this.countersShouldUpdate = countersShouldUpdate;
    this.createdAt = createdAt;
    this.references = references;
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
    for (let i = 0; i < charArray1.length; i++) {
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
var env_dict = {};
env_dict["section"] = sectionEnv;

function searchFile(fileText) {
    const regex = /((?<type>ref|label|begin|end|section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<newtheorem>newtheorem)(?<envName>{.+?})(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?/gm;
    ///\\((ref|label|section|cite?(p|t|author|year)?\*?){(.+?)})|(newtheorem)({.+?})({.+?}|\[.+?\])({.+?}|\[.+?\])?/gm;
    let createdAt = sectionEnv.name;

    let match = regex.exec(fileText);
    do {
        let node1 = null;
        if (match.groups.type == "section") {
            //TODO What if sub-sections?
            //currentSection++;
            console.log(`Section ${match.groups.typeName} is defined in ${createdAt}`);
            createdAt = match.groups.typeName; 
            //node1 = new node(Section, match.groups.typeName, currentSection, []);

            // currentSection = this new env //TODO: counter should not be zero
            env_dict["section"].counter = env_dict["section"].counter + 1;
            let newEnv = new env(match.groups.typeName, "section", env_dict["section"].counter, [], [], createdAt, []);
            createdAt = newEnv.name;
            env_dict[newEnv.name] = newEnv;
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
            add(env_dict[createdAt], match.groups.typeName);
        }
        else if (startsWith(match.groups.type, "cite")) {
            console.log(`Cite ${match.groups.typeName} is defined in ${createdAt}`);
            //node1 = new node(Cite, match.groups.typeName, createdAt, []);
            //add(env_dict[createdAt], match.groups.typeName);

        }
        else if (match.groups.type, "begin"){
            console.log("Start env")
            let tmp = match.groups.typeName;

            // counter ++
            // go through lists and update / reset

        }

        if (match.groups.newtheorem == "newtheorem") {
            console.log(`Theorem ${match.groups.newtheorem} is defined in ${createdAt}`);

            let envName = String(match.groups.envName).replace(/{|}/gm, '');
            let group7 = String(match.groups.arg2);
            let group8 = String(match.groups.arg3);
            console.log("group 8: ", match.groups.arg3)
            let envText;
            let counterName;
            if (group7.startsWith('{')) {
                envText = group7.replace(/{|}/gm, '');

                // env should get own counter witch will reset each time the counterName is called
                // this counterName could for example be \begin{theorem} or just \section

                // check if there is a counter in the command
                console.log(group8 != "undefined")
                if (group8 != "undefined") {
                    counterName = group8.replace(/\[|\]/gm, '');
                    // add this new env to dict{counterName}.counterShouldReset
                    if (counterName in env_dict) {
                        env_dict[counterName].countersShouldReset.push(envName);
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
                if (counterName in env_dict) {
                    env_dict[counterName].countersShouldUpdate.push(envText);
                } else {
                    console.warn("ENVIRONMENT that is referenced as counter does NOT exists 2");
                }
            }

            env_dict[envName] = new env(envName, envText, 0, [], []);
            if ("theorem" in env_dict) {
                console.log("added env: " + env_dict["theorem"].name);
            }
        }

        if (node1 == null) {
            continue;
        }


        console.log(node_dict);
        // Add current node to section
        if (createdAt in node_dict) {
            let tmp = node_dict[createdAt];
            add(tmp, match.groups.typeName);
        }

        node_dict[node1.name] = node1;
    } while ((match = regex.exec(fileText)) !== null);
}


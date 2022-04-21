
async function getPdf(guid) {

    let formData = new FormData();

    formData.append("guid", guid);

    let response = await fetch("/api/pdf/pdf", {
        method: 'POST',
        body: formData
    });

    //check if bad request
    if (!response.ok) {
        alert("Something went wrong when creating the pdf")
    }

    let pdfBlob = await response.blob();

    console.log("Type: " + typeof (pdfBlob));

    let fileUrl = URL.createObjectURL(pdfBlob);

    return fileUrl;

}

async function getJson(guid) {

    let formData = new FormData();

    formData.append("guid", guid);

    let response = await fetch("/api/pdf/json", {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        alert("Something went wrong when creating your user ID")
    }

    let json = await response.json();

    console.log(json.nodes[1]);

    console.log("Type: " + typeof (json));

    return json;

}


async function uploadFile() {
    console.log("test hej");

    let file = document.getElementById("uploadFile").files[0];
    let mainName = document.getElementById("mainName").value;

    let formData = new FormData();

    formData.append("file", file);

    if (mainName == null)
        mainName = "";

    formData.append("mainName", mainName);

    let response = await fetch("/api/pdf", {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        alert("Something went wrong when loading your file")
    }

    // THIS NEEDS TO BE ASYNC
    response.json().then(async data => {


        //console.log("guid: " + await data.guid);
        let guid = await data.guid;
        let pdf = await getPdf(guid);
        let json = await getJson(guid);


        document.getElementById("outputPdf").src = pdf;


        // Load json into d3 graph
        createGraph(json);



    });

    //let pdfBlob = await response.blob();

    //let fileUrl = URL.createObjectURL(pdfBlob);


    //document.getElementById("outputPdf").src = fileUrl;
}

async function getPdf(guid, mainTex) {

    let formData = new FormData();

    formData.append("guid", guid);
    formData.append("mainTex", mainTex);

    let response = await fetch("/api/pdf/pdf", {
        method: 'POST',
        body: formData
    });

    //check if bad request
    if (!response.ok) {
        alert("Something went wrong when creating the pdf")
    } else {
        let pdfBlob = await response.blob();

     

        let fileUrl = URL.createObjectURL(pdfBlob);

        return fileUrl;
    }

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
    } else {
        let json = await response.json();


        return json;
    }
}


async function uploadFile() {

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
    }).catch(err => console.log("ERROR"));

    if (!response.ok) {
        alert("Something went wrong when loading your file. Please make sure the name of the main .tex file is correct and try again.");
    } else {

        response.json().then(async data => {

           
            let guid = await data.guid;
            let mainTex = await data.mainName;
           
            let json = await getJson(guid);
            // Load json into d3 graph
            createGraph(json);
            let pdf = await getPdf(guid,mainTex);
            document.getElementById("outputPdf").src = pdf;

            
        });
    }

    

}
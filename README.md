# bTeX_project
Bachelor project: Creating a visualization tool for logical structure in scientific papers (using Tex-files)

## Link to web-application:
https://hermesoverview.azurewebsites.net/

## Link to Github:
https://github.com/sebsthiel/bTeX_project

## Manual for web-application:
(_Also found in appendix of the report_)
* On the homepage click on the Get "Started!" to go to the main page.
* On the main page you can click on "Preferences" to customize the colours of the graph. You can also enable to see references to other papers.
* To upload a paper, click on the "choose file" button in the upper right corner. (This file have to be a zip file of the LaTeX project).
    * If the main.tex file is not named "main" you will have to specify the name (WITHOUT ".tex" in the input field next to the button. 
    
* Thereafter you can click on "submit" to generate the visualisation of the paper.
* After some seconds a graph should pop up to the right and after about 10 seconds a PDF should pop up to the left.
    

# Creating docker images
Building docker image on mac to linux:
docker buildx build --platform=linux/amd64 -t hermesbachreg.azurecr.io/hermesimage:latest .

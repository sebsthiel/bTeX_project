

function test() {
    console.log("From CreateGraph");
}

let nodes;
let links;

function createGraph(json) {


    nodes = json.nodes;
    links = json.links;
    envs = json.environments;


    //makeGraph(nodes, links);
    //newGraph(nodes, links);

    //funGraph(nodes, links);
    lineGraph(nodes, links, envs);

}

function createLine(json) {
    data = {
        "nodes": [
            {
                "counter": 1,
                "name": "Introduction",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 51,
                "lineCountEnd": null
            },
            {
                "name": "sec:introduction",
                "createdAt": "Introduction",
                "type": "label",
                "lineCount": 51,
                "lineCountEnd": null
            },
            {
                "name": "89",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "90",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "91",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "92",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "93",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 55,
                "lineCountEnd": null
            },
            {
                "name": "94",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 57,
                "lineCountEnd": null
            },
            {
                "name": "95",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 57,
                "lineCountEnd": null
            },
            {
                "name": "96",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 57,
                "lineCountEnd": null
            },
            {
                "name": "fig:kdtree",
                "createdAt": "Introduction",
                "type": "label",
                "lineCount": 63,
                "lineCountEnd": null
            },
            {
                "name": "97",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 66,
                "lineCountEnd": null
            },
            {
                "name": "98",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 66,
                "lineCountEnd": null
            },
            {
                "name": "99",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 66,
                "lineCountEnd": null
            },
            {
                "name": "100",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "101",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "102",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "103",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "104",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "105",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "106",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "107",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "108",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "109",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "110",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "111",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Intuition underlying k-d tree construction in parallel, distributed environments",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 72,
                "lineCountEnd": null
            },
            {
                "name": "sec:intution",
                "createdAt": "Intuition underlying k-d tree construction in parallel, distributed environments",
                "type": "label",
                "lineCount": 72,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Main results",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 108,
                "lineCountEnd": null
            },
            {
                "name": "sec:main",
                "createdAt": "Main results",
                "type": "label",
                "lineCount": 108,
                "lineCountEnd": null
            },
            {
                "name": "112",
                "createdAt": "Main results",
                "type": "citet",
                "lineCount": 110,
                "lineCountEnd": null
            },
            {
                "name": "113",
                "createdAt": "Main results",
                "type": "ref",
                "lineCount": 110,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Approximation of indicator functions",
                "createdAt": "Main results",
                "type": "subsection",
                "lineCount": 112,
                "lineCountEnd": null
            },
            {
                "name": "subsec:approx",
                "createdAt": "Approximation of indicator functions",
                "type": "label",
                "lineCount": 112,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "lemma 1.1.1",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "lemma",
                "lineCount": 867,
                "lineCountEnd": 872
            },
            {
                "name": "lemma:1d:exp",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 121,
                "lineCountEnd": null
            },
            {
                "name": "114",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 136,
                "lineCountEnd": null
            },
            {
                "name": "115",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 139,
                "lineCountEnd": null
            },
            {
                "name": "lemma:1d:unif",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 150,
                "lineCountEnd": null
            },
            {
                "name": "116",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 157,
                "lineCountEnd": null
            },
            {
                "name": "lemma:pd:unif",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 176,
                "lineCountEnd": null
            },
            {
                "name": "117",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 183,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Stochastic bounds on accuracy",
                "createdAt": "Main results",
                "type": "subsection",
                "lineCount": 186,
                "lineCountEnd": null
            },
            {
                "name": "subsec:stoch",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "label",
                "lineCount": 186,
                "lineCountEnd": null
            },
            {
                "name": "kd:eq:a",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "label",
                "lineCount": 200,
                "lineCountEnd": null
            },
            {
                "name": "118",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "ref",
                "lineCount": 203,
                "lineCountEnd": null
            },
            {
                "name": "kd:eq:b",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "label",
                "lineCount": 209,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "assumption 1.1.1",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "assumption",
                "lineCount": 235,
                "lineCountEnd": 239
            },
            {
                "name": "assumption:positive_density",
                "createdAt": "assumption 1.1.1",
                "type": "label",
                "lineCount": 231,
                "lineCountEnd": null
            },
            {
                "name": "assumption:sup_null_set",
                "createdAt": "assumption 1.1.1",
                "type": "label",
                "lineCount": 235,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "theorem 1.1.1",
                "createdAt": "Algorithmic approach",
                "type": "theorem",
                "lineCount": 760,
                "lineCountEnd": 765
            },
            {
                "name": "thm:n_l=n_r",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 243,
                "lineCountEnd": null
            },
            {
                "name": "119",
                "createdAt": "theorem 1.1.1",
                "type": "ref",
                "lineCount": 244,
                "lineCountEnd": null
            },
            {
                "name": "120",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "ref",
                "lineCount": 254,
                "lineCountEnd": null
            },
            {
                "name": "thm:n_l=n/2",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 257,
                "lineCountEnd": null
            },
            {
                "name": "121",
                "createdAt": "theorem 1.1.1",
                "type": "ref",
                "lineCount": 258,
                "lineCountEnd": null
            },
            {
                "name": "122",
                "createdAt": "theorem 1.1.1",
                "type": "ref",
                "lineCount": 258,
                "lineCountEnd": null
            },
            {
                "name": "123",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "ref",
                "lineCount": 267,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Constructing a balanced k-d tree from distributed data",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 270,
                "lineCountEnd": null
            },
            {
                "name": "sec:algorithm",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "label",
                "lineCount": 270,
                "lineCountEnd": null
            },
            {
                "name": "124",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 272,
                "lineCountEnd": null
            },
            {
                "name": "125",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 276,
                "lineCountEnd": null
            },
            {
                "name": "126",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 276,
                "lineCountEnd": null
            },
            {
                "name": "127",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 282,
                "lineCountEnd": null
            },
            {
                "name": "128",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 282,
                "lineCountEnd": null
            },
            {
                "name": "129",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 282,
                "lineCountEnd": null
            },
            {
                "name": "130",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 303,
                "lineCountEnd": null
            },
            {
                "name": "131",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 303,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Accuracy and computational scalability",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 309,
                "lineCountEnd": null
            },
            {
                "name": "sec:performance",
                "createdAt": "Accuracy and computational scalability",
                "type": "label",
                "lineCount": 309,
                "lineCountEnd": null
            },
            {
                "name": "132",
                "createdAt": "Accuracy and computational scalability",
                "type": "ref",
                "lineCount": 311,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Assessment of accuracy",
                "createdAt": "Accuracy and computational scalability",
                "type": "subsection",
                "lineCount": 315,
                "lineCountEnd": null
            },
            {
                "name": "sec:accuracy",
                "createdAt": "Assessment of accuracy",
                "type": "label",
                "lineCount": 315,
                "lineCountEnd": null
            },
            {
                "name": "fig:norm_acc",
                "createdAt": "Assessment of accuracy",
                "type": "label",
                "lineCount": 323,
                "lineCountEnd": null
            },
            {
                "name": "133",
                "createdAt": "Assessment of accuracy",
                "type": "ref",
                "lineCount": 326,
                "lineCountEnd": null
            },
            {
                "name": "134",
                "createdAt": "Assessment of accuracy",
                "type": "ref",
                "lineCount": 326,
                "lineCountEnd": null
            },
            {
                "name": "135",
                "createdAt": "Assessment of accuracy",
                "type": "ref",
                "lineCount": 330,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Computational scalability",
                "createdAt": "Accuracy and computational scalability",
                "type": "subsection",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "sec:runtime",
                "createdAt": "Computational scalability",
                "type": "label",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "fig:norm_run",
                "createdAt": "Computational scalability",
                "type": "label",
                "lineCount": 338,
                "lineCountEnd": null
            },
            {
                "name": "136",
                "createdAt": "Computational scalability",
                "type": "ref",
                "lineCount": 341,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Discussion",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 343,
                "lineCountEnd": null
            },
            {
                "name": "sec:disc",
                "createdAt": "Discussion",
                "type": "label",
                "lineCount": 343,
                "lineCountEnd": null
            },
            {
                "name": "137",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 345,
                "lineCountEnd": null
            },
            {
                "name": "138",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 345,
                "lineCountEnd": null
            },
            {
                "name": "139",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 345,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Ailon and Chazelle(2009)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Ailon2009",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 350,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Bayer(1972)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Bayer1972",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 357,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Bentley(1975)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Bentley1975",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 362,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Friedman and Finkel(1977)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Friedman1977",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 368,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Blelloch et~al.(2018)Blelloch, Gu, Shun, and Sun",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Bleloch2018",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 374,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Brown(2015a)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Brown2015",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 381,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Brown(2015b)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Brown2015b",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 387,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Cao et~al.(2020)Cao, Wang, Zhao, Duan, and Zhang",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Cao2020",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 391,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Chakravorty(2019)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Chakravorty2019",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 396,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Chakravorty et~al.(2021)Chakravorty, Cleveland, and   Wolfe",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Chakravorty2021",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 401,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Chen et~al.(2019)Chen, Zhou, Tang, Singh, Bouguila, Wang, Wang, and   Dua",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Chen2018",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 406,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Choi et~al.(2010)Choi, Komuravelli, Lu, Sung, Bocchino, Adve, and   Hart",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Choi2010",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 412,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Dean and Ghemawat(2008)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Dean2008",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 419,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Guibas and Sedgewick(1978)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Guibas1978",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 425,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Hunt et~al.(2006)Hunt, Mark, and Stoll",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Hunt2006",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 431,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Hu and Ahmadi(2015)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Hu2015",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 438,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Pinkham and Zhang(2020)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Pinkman2020",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 445,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Procopiuc et~al.(2003)Procopiuc, Agarwal, Arge, and   Vitter",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Procopiuc2003",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 452,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Rudin(1976)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Rudin1976",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 459,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Shevtsov et~al.(2007)Shevtsov, Soupikov, and Kapustin",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Shevtsov2007",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 464,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Soupikov et~al.(2008)Soupikov, Shevtsov, and Kapustin",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Soupikov2008",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 471,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Velskii and Landis(1962)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Velskii1962",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 477,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Wald and Havran(2006)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Wald2006",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 483,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Wehr and Radkowski(2018)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Wehr2018",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 490,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Xiao and Biros(2016)",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Xiao2016",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 497,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Zaharia et~al.(2016)Zaharia, R.~S.~Xin, Wendell, Das, Armbrust, Dave,   Meng, Rosen, Venkataraman, Franklin, et~al.",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Zaharia2016",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 504,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": "Zhou et~al.(2008)Zhou, Hou, Wang, and Guo",
                "note": null,
                "journal": null,
                "fJournal": null,
                "volume": null,
                "year": null,
                "pages": null,
                "issn": null,
                "mrClass": null,
                "mrNumber": null,
                "doi": null,
                "url": null,
                "key": null,
                "series": null,
                "month": null,
                "number": null,
                "isbn": null,
                "organization": null,
                "publisher": null,
                "mrReviewer": null,
                "booktitle": null,
                "name": "Zhou2008",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 511,
                "lineCountEnd": null
            },
            {
                "name": "140",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 521,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proofs of results from section subsec:approx",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 521,
                "lineCountEnd": null
            },
            {
                "name": "ap:approx_proofs",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "label",
                "lineCount": 521,
                "lineCountEnd": null
            },
            {
                "name": "proof:eq:1",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "label",
                "lineCount": 528,
                "lineCountEnd": null
            },
            {
                "name": "141",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "ref",
                "lineCount": 536,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Lemma lemma:1d:exp",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 536,
                "lineCountEnd": null
            },
            {
                "name": "142",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 538,
                "lineCountEnd": null
            },
            {
                "name": "proof:eq:2",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "label",
                "lineCount": 539,
                "lineCountEnd": null
            },
            {
                "name": "143",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 547,
                "lineCountEnd": null
            },
            {
                "name": "144",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 547,
                "lineCountEnd": null
            },
            {
                "name": "145",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 566,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Lemma lemma:1d:unif",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 566,
                "lineCountEnd": null
            },
            {
                "name": "146",
                "createdAt": "Proof of Lemma lemma:1d:unif",
                "type": "ref",
                "lineCount": 574,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Lemma lemma:pd:unif",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 574,
                "lineCountEnd": null
            },
            {
                "name": "147",
                "createdAt": "Proof of Lemma lemma:pd:unif",
                "type": "ref",
                "lineCount": 588,
                "lineCountEnd": null
            },
            {
                "name": "148",
                "createdAt": "Proof of Lemma lemma:pd:unif",
                "type": "ref",
                "lineCount": 592,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proofs of results from section subsec:stoch",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 592,
                "lineCountEnd": null
            },
            {
                "name": "ap:stoch_proofs",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "label",
                "lineCount": 592,
                "lineCountEnd": null
            },
            {
                "name": "149",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "ref",
                "lineCount": 594,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Theorem thm:n_l=n_r",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "subsection",
                "lineCount": 594,
                "lineCountEnd": null
            },
            {
                "name": "pf:n_l=n_r",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 594,
                "lineCountEnd": null
            },
            {
                "name": "150",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 597,
                "lineCountEnd": null
            },
            {
                "name": "151",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 599,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:a",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 622,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:b",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 631,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:c",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 637,
                "lineCountEnd": null
            },
            {
                "name": "152",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "153",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "154",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "155",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "156",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "157",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 649,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Theorem thm:n_l=n/2",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "subsection",
                "lineCount": 649,
                "lineCountEnd": null
            },
            {
                "name": "pf:n_l=n/2",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 649,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:d",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 665,
                "lineCountEnd": null
            },
            {
                "name": "158",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 670,
                "lineCountEnd": null
            },
            {
                "name": "159",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 675,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:e",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 676,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:f",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 682,
                "lineCountEnd": null
            },
            {
                "name": "160",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 687,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:g",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 688,
                "lineCountEnd": null
            },
            {
                "name": "main:proof:eq:h",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 692,
                "lineCountEnd": null
            },
            {
                "name": "161",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 696,
                "lineCountEnd": null
            },
            {
                "name": "162",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 696,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 731,
                "lineCountEnd": null
            },
            {
                "name": "ap:construct",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "label",
                "lineCount": 731,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Algorithmic approach",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 733,
                "lineCountEnd": null
            },
            {
                "name": "sec:eff",
                "createdAt": "Algorithmic approach",
                "type": "label",
                "lineCount": 733,
                "lineCountEnd": null
            },
            {
                "name": "163",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "164",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "165",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "chev:thm:main",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 760,
                "lineCountEnd": null
            },
            {
                "name": "166",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 768,
                "lineCountEnd": null
            },
            {
                "name": "167",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 773,
                "lineCountEnd": null
            },
            {
                "name": "168",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 773,
                "lineCountEnd": null
            },
            {
                "name": "169",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 773,
                "lineCountEnd": null
            },
            {
                "name": "170",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 775,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Map-reduce implementation",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 777,
                "lineCountEnd": null
            },
            {
                "name": "sec:MapReduce",
                "createdAt": "Map-reduce implementation",
                "type": "label",
                "lineCount": 777,
                "lineCountEnd": null
            },
            {
                "name": "171",
                "createdAt": "Map-reduce implementation",
                "type": "citep",
                "lineCount": 781,
                "lineCountEnd": null
            },
            {
                "name": "172",
                "createdAt": "Map-reduce implementation",
                "type": "ref",
                "lineCount": 785,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Theorem chev:thm:main",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 785,
                "lineCountEnd": null
            },
            {
                "name": "pf:chev:thm:main",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "label",
                "lineCount": 785,
                "lineCountEnd": null
            },
            {
                "name": "173",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 787,
                "lineCountEnd": null
            },
            {
                "name": "chev:lem:gen:1d",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 807,
                "lineCountEnd": null
            },
            {
                "name": "chev:lem:gen:pd",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 867,
                "lineCountEnd": null
            },
            {
                "name": "174",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 875,
                "lineCountEnd": null
            },
            {
                "name": "175",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 920,
                "lineCountEnd": null
            },
            {
                "name": "176",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 923,
                "lineCountEnd": null
            }
        ],
        "links": [
            {
                "source": "89",
                "target": "Zaharia2016",
                "type": "cite"
            },
            {
                "source": "90",
                "target": "Ailon2009",
                "type": "cite"
            },
            {
                "source": "91",
                "target": "Hu2015",
                "type": "cite"
            },
            {
                "source": "91",
                "target": "Chen2018",
                "type": "cite"
            },
            {
                "source": "91",
                "target": "Pinkman2020",
                "type": "cite"
            },
            {
                "source": "92",
                "target": "Xiao2016",
                "type": "cite"
            },
            {
                "source": "93",
                "target": "Bentley1975",
                "type": "cite"
            },
            {
                "source": "94",
                "target": "Friedman1977",
                "type": "cite"
            },
            {
                "source": "95",
                "target": "Velskii1962",
                "type": "cite"
            },
            {
                "source": "96",
                "target": "Bayer1972",
                "type": "cite"
            },
            {
                "source": "96",
                "target": "Guibas1978",
                "type": "cite"
            },
            {
                "source": "97",
                "target": "fig:kdtree",
                "type": "ref"
            },
            {
                "source": "98",
                "target": "Bentley1975",
                "type": "cite"
            },
            {
                "source": "99",
                "target": "Wald2006",
                "type": "cite"
            },
            {
                "source": "100",
                "target": "Dean2008",
                "type": "cite"
            },
            {
                "source": "101",
                "target": "Bleloch2018",
                "type": "cite"
            },
            {
                "source": "102",
                "target": "Wehr2018",
                "type": "cite"
            },
            {
                "source": "103",
                "target": "Brown2015b",
                "type": "cite"
            },
            {
                "source": "103",
                "target": "Cao2020",
                "type": "cite"
            },
            {
                "source": "104",
                "target": "Wald2006",
                "type": "cite"
            },
            {
                "source": "105",
                "target": "Procopiuc2003",
                "type": "cite"
            },
            {
                "source": "105",
                "target": "Brown2015",
                "type": "cite"
            },
            {
                "source": "106",
                "target": "Hunt2006",
                "type": "cite"
            },
            {
                "source": "106",
                "target": "Shevtsov2007",
                "type": "cite"
            },
            {
                "source": "106",
                "target": "Zhou2008",
                "type": "cite"
            },
            {
                "source": "106",
                "target": "Soupikov2008",
                "type": "cite"
            },
            {
                "source": "106",
                "target": "Choi2010",
                "type": "cite"
            },
            {
                "source": "107",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "108",
                "target": "sec:main",
                "type": "ref"
            },
            {
                "source": "109",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "110",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "111",
                "target": "sec:disc",
                "type": "ref"
            },
            {
                "source": "112",
                "target": "Chakravorty2021",
                "type": "cite"
            },
            {
                "source": "113",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "114",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "115",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "116",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "117",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "118",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "119",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "120",
                "target": "ap:stoch_proofs",
                "type": "ref"
            },
            {
                "source": "121",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "122",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "123",
                "target": "ap:stoch_proofs",
                "type": "ref"
            },
            {
                "source": "124",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "125",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "126",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "127",
                "target": "thm:n_l=n/2",
                "type": "ref"
            },
            {
                "source": "128",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "129",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "130",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "131",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "132",
                "target": "ap:construct",
                "type": "ref"
            },
            {
                "source": "133",
                "target": "fig:norm_acc",
                "type": "ref"
            },
            {
                "source": "134",
                "target": "sec:eff",
                "type": "ref"
            },
            {
                "source": "135",
                "target": "fig:norm_acc",
                "type": "ref"
            },
            {
                "source": "136",
                "target": "fig:norm_run",
                "type": "ref"
            },
            {
                "source": "137",
                "target": "sec:main",
                "type": "ref"
            },
            {
                "source": "138",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "139",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "140",
                "target": "subsec:approx",
                "type": "ref"
            },
            {
                "source": "141",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "142",
                "target": "proof:eq:1",
                "type": "ref"
            },
            {
                "source": "143",
                "target": "proof:eq:2",
                "type": "ref"
            },
            {
                "source": "144",
                "target": "proof:eq:1",
                "type": "ref"
            },
            {
                "source": "145",
                "target": "lemma:1d:unif",
                "type": "ref"
            },
            {
                "source": "146",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "147",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "148",
                "target": "subsec:stoch",
                "type": "ref"
            },
            {
                "source": "149",
                "target": "thm:n_l=n_r",
                "type": "ref"
            },
            {
                "source": "150",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "151",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "152",
                "target": "main:proof:eq:c",
                "type": "ref"
            },
            {
                "source": "153",
                "target": "main:proof:eq:a",
                "type": "ref"
            },
            {
                "source": "154",
                "target": "main:proof:eq:b",
                "type": "ref"
            },
            {
                "source": "155",
                "target": "main:proof:eq:a",
                "type": "ref"
            },
            {
                "source": "156",
                "target": "main:proof:eq:b",
                "type": "ref"
            },
            {
                "source": "157",
                "target": "thm:n_l=n/2",
                "type": "ref"
            },
            {
                "source": "158",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "159",
                "target": "main:proof:eq:d",
                "type": "ref"
            },
            {
                "source": "160",
                "target": "thm:n_l=n_r",
                "type": "ref"
            },
            {
                "source": "161",
                "target": "main:proof:eq:e",
                "type": "ref"
            },
            {
                "source": "162",
                "target": "main:proof:eq:h",
                "type": "ref"
            },
            {
                "source": "163",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "164",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "165",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "166",
                "target": "pf:chev:thm:main",
                "type": "ref"
            },
            {
                "source": "167",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "168",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "169",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "170",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "171",
                "target": "Zaharia2016",
                "type": "cite"
            },
            {
                "source": "172",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "173",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "174",
                "target": "chev:lem:gen:1d",
                "type": "ref"
            },
            {
                "source": "175",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "176",
                "target": "chev:lem:gen:pd",
                "type": "ref"
            }
        ],
        "environments": [
            {
                "name": "section",
                "text": "section",
                "counter": 1,
                "countersShouldReset": [
                    "theorem",
                    "subsection"
                ],
                "countersShouldUpdate": []
            },
            {
                "name": "theorem",
                "text": "Theorem",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "corollary",
                    "lemma",
                    "remark",
                    "definition",
                    "example",
                    "assumption",
                    "proposition"
                ]
            },
            {
                "name": "corollary",
                "text": "Corollary",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "lemma",
                "text": "Lemma",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "remark",
                "text": "Remark",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "definition",
                "text": "Definition",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "example",
                "text": "Example",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "assumption",
                "text": "Assumption",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "proposition",
                "text": "Proposition",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "subsection",
                "text": "subsection",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            }
        ]
    };
    nodes = data.nodes;
    links = data.links;
    envs = data.environments;
    lineGraph(nodes, links, envs);
  
}

var linkDict = {};
var nodeDict = {};
var envDict = {};
var sectionNodes = [];
var normalNodes = [];
var paperNodes = [];
var envNodes = [];

// TODO figure out what width and height
const width = window.innerWidth;//600; 
const height = 600;
const graphWidth = width * 2;
const xaxisHeight = 100;
const defaultNodeY = xaxisHeight + 20;
const defaultPaperY = xaxisHeight - 20;
const nodeColor = "gray"


function lineGraph(nodes, links, envs) {


    allNodes = nodes;
    links = links;
    console.log("env: " + envs[0]);

    allNodes.sort(compare);

    // create dict of nodes for lookup later  
   
    allNodes.forEach(node => {
        nodeDict[node.name] = node;
        nodeDict[node.name].refSize = 1;
        nodeDict[node.name].y = 1;
    })

    
    // for each ref make target Bigger  

    links.forEach(link => {
        nodeDict[link.target].refSize += 2;
        if (!(link.target in linkDict)) {
            linkDict[link.target] = link.source;
        }
        

    });

    // create dict for env
    
    envs.forEach(env => {
        envDict[env.name] = env;
    });

    
    var bestLineCount = 0;
    

    // filter for sections and other nodes
    allNodes.forEach(node => {
        if (node.type in envDict && !node.type.includes("section")) {
            console.log("WUHU " + node.name + "\n " + node.type + "\n" + node.lineCountEnd + "\n" + node.lineCount);
            envNodes.push(node);
        }
        // TODO subsection 
        else if (node.type == "section") {
            console.log("section " + node.name);
            sectionNodes.push(node);
        }
        else if (node.type == "paper") {
            paperNodes.push(node);
        }
        else {
            normalNodes.push(node);
        }


        if (bestLineCount < node.lineCount) {
            bestLineCount = node.lineCount;
        }


    });


  
    const maxLineCount = bestLineCount + 100;

    var xAxisScale = d3.scaleLinear()
        .domain([0, maxLineCount])
        .range([0, graphWidth]);

    // select the svg for creating the graph
    // and configure the width and height

    var svgCanvas = d3.select("#d3graph")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    // main image of graph 
    var svg = svgCanvas.append("g").attr("id", "graph");


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

    // link arrow TODO fix arrow 
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
    //var xaxis = svgCanvas.append("svg").append('g')
    //    .append("line")
    //    .attr('stroke-width', 2)
    //    .attr('stroke', 'black')
    //    .attr("x1", 0)
    //    .attr("y1", xaxisHeight)
    //    .attr("x2", width - 50)
    //    .attr("y2", xaxisHeight)
    //    .attr("marker-end", "url(#triangle)");


     // create axis object
    var xAxis = d3.axisBottom(xAxisScale);

    var gX = svgCanvas.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + xaxisHeight + ")")
        .call(xAxis);

    
    // svg group for environments 
    var svgEnvs = svg
        .selectAll('rect')
        .data(envNodes)
        .enter().append('g');

    var nodeRect = svgEnvs
        .append('rect')
        .attr('width', getLinecountEnd)
        .attr('height', 100)
        .attr('fill', "black")
        .attr('fill-opacity', "0.3")
        .attr('x', node => getlineCount(node, xAxisScale))
        .attr('y', getEnvNodeY);

   

    var svgNodes = svg
        .selectAll('circle')
        .data(normalNodes.concat(paperNodes))
        .enter();

    var nodeCircles = svgNodes.append('circle')
        .attr('r', getRadiusNode)
        .attr('fill', "gray")
        .attr('cx', node => getlineCount(node, xAxisScale))
        .attr('cy', getNodeY);
    

    
    nodeCircles.on("click", function (selected) {

        textElements.attr("visibility", function (node) { return showName(node, selected) });
        nodeCircles.attr("fill", function (node) { return selectNode(node, selected) });
    });

    nodeRect.on("click", function (selected) {

        textEnvNode.attr("visibility", function (node) { return showName(node, selected) });
        nodeRect.attr("fill", function (node) { return selectNode(node, selected) });
    });

    

    var svgSection =
        svg.selectAll("#sectionLine")
            .data(sectionNodes)
            .enter();
        
    var svgSectionLine = svgSection.append('g')
        .selectAll("#sectionLine")
        .data(sectionNodes)
        .enter()
        .append('line')
        .attr('stroke-width', 2)
        .attr('stroke', 'red')
        .attr("x1", node => getlineCount(node, xAxisScale))
        .attr("y1", xaxisHeight - 10)
        .attr("x2", node => getlineCount(node, xAxisScale))
        .attr("y2", height+ 1000)

    svgSectionLine.on("click", function (selected) {

        console.log(selected);

        textSection.attr("visibility", function (node) { return showName(node, selected) });
        
    });



    var links = svg
        .selectAll('mylinks')
        .data(links)
        .enter()
        .append('path')
        .attr('d', link => createArc(link, xAxisScale))
        .attr("stroke", getLinkColour)
        .attr('stroke-width', 2)
        .style("fill", "none")
        .attr("marker-end", "url(#linkArrow)");

    var textSection = svgSection
        .append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr("dx", node => getlineCount(node, xAxisScale))
        .attr("dy", xaxisHeight)
        .attr("visibility", "hidden");

    var textEnvNode = svgEnvs
        .append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr("dx", node => xAxisScale(node.lineCount))
        .attr("dy", getEnvNodeY)
        .attr("visibility", "hidden");

    var textElements = svgNodes
        .append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr("dx", node => xAxisScale(node.lineCount))
        .attr("dy", node => nodeDict[node.name].y)
        .attr("visibility", "hidden");



    

    function getlineCount(node, scale) {

        if (node.type == "paper") {
            //let firstSourceNode = linkDict[node.name];
            //console.log("Target node: " + node.name);
            //if (firstSourceNode) {
            //    let newLineCount = nodeDict[firstSourceNode].lineCount;
            //    nodeDict[node.name].lineCount = newLineCount;
            //    return scale(newLineCount);
            //}

           

            //return scale(bestLineCount/2)
            
           
        }
        
        return scale(node.lineCount);

    }

    

   

    

    function handleZoom() {

       
        let new_xScale = d3.event.transform.rescaleX(xAxisScale)
        console.log(d3.event.transform)

        // update axes
        gX.call(xAxis.scale(new_xScale));

        nodeCircles.attr("cx", node => getlineCount(node, new_xScale));
        links.attr("d", link => createArc(link, new_xScale))
        svgSectionLine
            .attr("x1", node => getlineCount(node, new_xScale))
            .attr("y1", xaxisHeight - 10)
            .attr("x2", node => getlineCount(node, new_xScale))
            .attr("y2", height + 1000)

        nodeRect
            .attr('x', node => getlineCount(node, new_xScale));

        textElements.attr("dx", node => new_xScale(node.lineCount));
        textEnvNode.attr("dx", node => new_xScale(node.lineCount));
        textSection.attr("dx", node => new_xScale(node.lineCount));
        
    }

    let zoom = d3.zoom()
        //.scaleExtent([0.5, 5])
        //.translateExtent([[-10, 0], [width, 0]])
        .extent([[0, 0], [50, 0]])
        .on('zoom', handleZoom);


    svgCanvas.call(zoom);
    // start scale zoom: 
    zoom.scaleTo(svgCanvas, 0.5);


    
   


}

function getLinkColour(link) {
    if (link.type == "ref") {
        return "blue";
    } else {
        return "orange";
    }
}


function createArc(node, scale) {

    start = scale(nodeDict[node.source].lineCount)   // X position of start node on the X axis
    end = scale(nodeDict[node.target].lineCount)    // X position of end node

    startY = nodeDict[node.source].y
    endY = nodeDict[node.target].y
    return ['M', start, startY,    // the arc starts at the coordinate x=start, y=height-10 (where the starting node is)
        'A',                            // This means we're gonna build an elliptical arc 
        (start - end), ',',         // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance 
        (start - end), 0, 0, ',',
        start < end ? 1 : 1, end, ',', endY] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
        .join(' ');

}

function getNodeY(node) {

    //let randomInt = getRandomInt(0, 200);

    if (node.type == "paper") {
        nodeDict[node.name].y = defaultPaperY;
        return defaultPaperY;
    } else {
        nodeDict[node.name].y = defaultNodeY;
        return defaultNodeY;
    }


    return defaultNodeY;
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

function getLinecountEnd(node) {
    console.log("lineCount: " + node.lineCountEnd)
    return node.lineCountEnd - node.lineCount;
}

function getEnvNodeY(node) {
    return defaultNodeY - 50;
}

function getRadiusNode(node) {
    if (node.type == "refNode") {
        return 3;
    } else if (node.type == "paper") {
        return 3;
    }
    return node.refSize + 5;
}

// inclusive min and exclusive max 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function compare(a, b) {
    if (a.lineCount < b.lineCount) {
        return -1;
    }
    if (a.lineCount > b.lineCount) {
        return 1;
    }
    return 0;
}




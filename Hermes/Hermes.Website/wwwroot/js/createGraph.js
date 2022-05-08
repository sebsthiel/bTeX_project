function test() {
    console.log("From CreateGraph");
}

function createGraph(json) {

    nodes = json.nodes;
    links = json.links;
    envs = json.environments;

    let tmpVar = setupLabPrefixes(json.labelPrefixes);
    labPrefixDepth = tmpVar[0];
    unit = tmpVar[1];

    nodeToLineText = json.nodeToLineText;

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
                "lineCountEnd": 72
            },
            {
                "name": "sec:introduction",
                "createdAt": "Introduction",
                "type": "label",
                "lineCount": 51,
                "lineCountEnd": null
            },
            {
                "name": "citation to zaharia2016 :id:1",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "citation to ailon2009 :id:2",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "citation to hu2015,chen2018,pinkman2020 :id:3",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "citation to xiao2016 :id:4",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 53,
                "lineCountEnd": null
            },
            {
                "name": "citation to bentley1975 :id:5",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 55,
                "lineCountEnd": null
            },
            {
                "name": "citation to friedman1977 :id:6",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 57,
                "lineCountEnd": null
            },
            {
                "name": "citation to velskii1962 :id:7",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 57,
                "lineCountEnd": null
            },
            {
                "name": "citation to bayer1972, guibas1978 :id:8",
                "createdAt": "Introduction",
                "type": "citeNode",
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
                "name": "ref to fig:kdtree :id:9",
                "createdAt": "Introduction",
                "type": "refNode",
                "lineCount": 66,
                "lineCountEnd": null
            },
            {
                "name": "citation to bentley1975 :id:10",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 66,
                "lineCountEnd": null
            },
            {
                "name": "citation to wald2006 :id:11",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 66,
                "lineCountEnd": null
            },
            {
                "name": "citation to dean2008 :id:12",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "citation to bleloch2018 :id:13",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "citation to wehr2018 :id:14",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "citation to brown2015b, cao2020 :id:15",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "citation to wald2006 :id:16",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "citation to procopiuc2003, brown2015 :id:17",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "citation to hunt2006, shevtsov2007, zhou2008, soupikov2008, choi2010 :id:18",
                "createdAt": "Introduction",
                "type": "citeNode",
                "lineCount": 68,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:intution :id:19",
                "createdAt": "Introduction",
                "type": "refNode",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:main :id:20",
                "createdAt": "Introduction",
                "type": "refNode",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:algorithm :id:21",
                "createdAt": "Introduction",
                "type": "refNode",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:performance :id:22",
                "createdAt": "Introduction",
                "type": "refNode",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:disc :id:23",
                "createdAt": "Introduction",
                "type": "refNode",
                "lineCount": 70,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Intuition underlying k-d tree construction in parallel, distributed environments",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 72,
                "lineCountEnd": 108
            },
            {
                "name": "sec:intution",
                "createdAt": "Intuition underlying k-d tree construction in parallel, distributed environments",
                "type": "label",
                "lineCount": 72,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "Main results",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 108,
                "lineCountEnd": 270
            },
            {
                "name": "sec:main",
                "createdAt": "Main results",
                "type": "label",
                "lineCount": 108,
                "lineCountEnd": null
            },
            {
                "name": "citation to chakravorty2021 :id:24",
                "createdAt": "Main results",
                "type": "citeNode",
                "lineCount": 110,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:intution :id:25",
                "createdAt": "Main results",
                "type": "refNode",
                "lineCount": 110,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Approximation of indicator functions",
                "createdAt": "Main results",
                "type": "subsection",
                "lineCount": 112,
                "lineCountEnd": 186
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
                "name": "lemma 3.1.1",
                "createdAt": "Approximation of indicator functions",
                "type": "lemma",
                "lineCount": 121,
                "lineCountEnd": 133
            },
            {
                "name": "lemma:1d:exp",
                "createdAt": "lemma 3.1.1",
                "type": "label",
                "lineCount": 121,
                "lineCountEnd": null
            },
            {
                "name": "ref to ap:approx_proofs :id:26",
                "createdAt": "Approximation of indicator functions",
                "type": "refNode",
                "lineCount": 136,
                "lineCountEnd": null
            },
            {
                "name": "ref to lemma:1d:exp :id:27",
                "createdAt": "Approximation of indicator functions",
                "type": "refNode",
                "lineCount": 139,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "lemma 3.1.2",
                "createdAt": "Approximation of indicator functions",
                "type": "lemma",
                "lineCount": 150,
                "lineCountEnd": 154
            },
            {
                "name": "lemma:1d:unif",
                "createdAt": "lemma 3.1.2",
                "type": "label",
                "lineCount": 150,
                "lineCountEnd": null
            },
            {
                "name": "ref to ap:approx_proofs :id:28",
                "createdAt": "Approximation of indicator functions",
                "type": "refNode",
                "lineCount": 157,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "lemma 3.1.3",
                "createdAt": "Approximation of indicator functions",
                "type": "lemma",
                "lineCount": 176,
                "lineCountEnd": 180
            },
            {
                "name": "lemma:pd:unif",
                "createdAt": "lemma 3.1.3",
                "type": "label",
                "lineCount": 176,
                "lineCountEnd": null
            },
            {
                "name": "ref to ap:approx_proofs :id:29",
                "createdAt": "Approximation of indicator functions",
                "type": "refNode",
                "lineCount": 183,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Stochastic bounds on accuracy",
                "createdAt": "Main results",
                "type": "subsection",
                "lineCount": 186,
                "lineCountEnd": 270
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
                "name": "ref to sec:intution :id:30",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "refNode",
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
                "counter": 4,
                "name": "assumption 3.2.4",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "assumption",
                "lineCount": 231,
                "lineCountEnd": 233
            },
            {
                "name": "assumption:positive_density",
                "createdAt": "assumption 3.2.4",
                "type": "label",
                "lineCount": 231,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "assumption 3.2.5",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "assumption",
                "lineCount": 235,
                "lineCountEnd": 239
            },
            {
                "name": "assumption:sup_null_set",
                "createdAt": "assumption 3.2.5",
                "type": "label",
                "lineCount": 235,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "theorem 3.2.6",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "theorem",
                "lineCount": 243,
                "lineCountEnd": 251
            },
            {
                "name": "thm:n_l=n_r",
                "createdAt": "theorem 3.2.6",
                "type": "label",
                "lineCount": 243,
                "lineCountEnd": null
            },
            {
                "name": "ref to assumption:positive_density :id:31",
                "createdAt": "theorem 3.2.6",
                "type": "refNode",
                "lineCount": 244,
                "lineCountEnd": null
            },
            {
                "name": "ref to ap:stoch_proofs :id:32",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "refNode",
                "lineCount": 254,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "theorem 3.2.7",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "theorem",
                "lineCount": 257,
                "lineCountEnd": 264
            },
            {
                "name": "thm:n_l=n/2",
                "createdAt": "theorem 3.2.7",
                "type": "label",
                "lineCount": 257,
                "lineCountEnd": null
            },
            {
                "name": "ref to assumption:positive_density :id:33",
                "createdAt": "theorem 3.2.7",
                "type": "refNode",
                "lineCount": 258,
                "lineCountEnd": null
            },
            {
                "name": "ref to assumption:sup_null_set :id:34",
                "createdAt": "theorem 3.2.7",
                "type": "refNode",
                "lineCount": 258,
                "lineCountEnd": null
            },
            {
                "name": "ref to ap:stoch_proofs :id:35",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "refNode",
                "lineCount": 267,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "Constructing a balanced k-d tree from distributed data",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 270,
                "lineCountEnd": 309
            },
            {
                "name": "sec:algorithm",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "label",
                "lineCount": 270,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:intution :id:36",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 272,
                "lineCountEnd": null
            },
            {
                "name": "ref to kd:eq:a :id:37",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 276,
                "lineCountEnd": null
            },
            {
                "name": "ref to kd:eq:b :id:38",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 276,
                "lineCountEnd": null
            },
            {
                "name": "ref to thm:n_l=n/2 :id:39",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 282,
                "lineCountEnd": null
            },
            {
                "name": "ref to assumption:positive_density :id:40",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 282,
                "lineCountEnd": null
            },
            {
                "name": "ref to assumption:sup_null_set :id:41",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 282,
                "lineCountEnd": null
            },
            {
                "name": "ref to assumption:positive_density :id:42",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 303,
                "lineCountEnd": null
            },
            {
                "name": "ref to assumption:sup_null_set :id:43",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "refNode",
                "lineCount": 303,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "Accuracy and computational scalability",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 309,
                "lineCountEnd": 343
            },
            {
                "name": "sec:performance",
                "createdAt": "Accuracy and computational scalability",
                "type": "label",
                "lineCount": 309,
                "lineCountEnd": null
            },
            {
                "name": "ref to ap:construct :id:44",
                "createdAt": "Accuracy and computational scalability",
                "type": "refNode",
                "lineCount": 311,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Assessment of accuracy",
                "createdAt": "Accuracy and computational scalability",
                "type": "subsection",
                "lineCount": 315,
                "lineCountEnd": 332
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
                "name": "ref to fig:norm_acc :id:45",
                "createdAt": "Assessment of accuracy",
                "type": "refNode",
                "lineCount": 326,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:eff :id:46",
                "createdAt": "Assessment of accuracy",
                "type": "refNode",
                "lineCount": 326,
                "lineCountEnd": null
            },
            {
                "name": "ref to fig:norm_acc :id:47",
                "createdAt": "Assessment of accuracy",
                "type": "refNode",
                "lineCount": 330,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Computational scalability",
                "createdAt": "Accuracy and computational scalability",
                "type": "subsection",
                "lineCount": 332,
                "lineCountEnd": 343
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
                "name": "ref to fig:norm_run :id:48",
                "createdAt": "Computational scalability",
                "type": "refNode",
                "lineCount": 341,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "Discussion",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 343,
                "lineCountEnd": 521
            },
            {
                "name": "sec:disc",
                "createdAt": "Discussion",
                "type": "label",
                "lineCount": 343,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:main :id:49",
                "createdAt": "Discussion",
                "type": "refNode",
                "lineCount": 345,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:algorithm :id:50",
                "createdAt": "Discussion",
                "type": "refNode",
                "lineCount": 345,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:performance :id:51",
                "createdAt": "Discussion",
                "type": "refNode",
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
                "name": "ailon2009",
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
                "name": "bayer1972",
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
                "name": "bentley1975",
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
                "name": "friedman1977",
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
                "name": "bleloch2018",
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
                "name": "brown2015",
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
                "name": "brown2015b",
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
                "name": "cao2020",
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
                "name": "chakravorty2019",
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
                "name": "chakravorty2021",
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
                "name": "chen2018",
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
                "name": "choi2010",
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
                "name": "dean2008",
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
                "name": "guibas1978",
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
                "name": "hunt2006",
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
                "name": "hu2015",
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
                "name": "pinkman2020",
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
                "name": "procopiuc2003",
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
                "name": "rudin1976",
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
                "name": "shevtsov2007",
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
                "name": "soupikov2008",
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
                "name": "velskii1962",
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
                "name": "wald2006",
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
                "name": "wehr2018",
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
                "name": "xiao2016",
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
                "name": "zaharia2016",
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
                "name": "zhou2008",
                "createdAt": "Discussion",
                "type": "paper",
                "lineCount": 511,
                "lineCountEnd": null
            },
            {
                "name": "ref to subsec:approx :id:52",
                "createdAt": "Discussion",
                "type": "refNode",
                "lineCount": 521,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "Proofs of results from section subsec:approx",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 521,
                "lineCountEnd": 592
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
                "name": "ref to lemma:1d:exp :id:53",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "refNode",
                "lineCount": 536,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Lemma lemma:1d:exp",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 536,
                "lineCountEnd": 566
            },
            {
                "name": "ref to proof:eq:1 :id:54",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "refNode",
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
                "name": "ref to proof:eq:2 :id:55",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "refNode",
                "lineCount": 547,
                "lineCountEnd": null
            },
            {
                "name": "ref to proof:eq:1 :id:56",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "refNode",
                "lineCount": 547,
                "lineCountEnd": null
            },
            {
                "name": "ref to lemma:1d:unif :id:57",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "refNode",
                "lineCount": 566,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Proof of Lemma lemma:1d:unif",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 566,
                "lineCountEnd": 574
            },
            {
                "name": "ref to lemma:pd:unif :id:58",
                "createdAt": "Proof of Lemma lemma:1d:unif",
                "type": "refNode",
                "lineCount": 574,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "Proof of Lemma lemma:pd:unif",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 574,
                "lineCountEnd": 592
            },
            {
                "name": "ref to lemma:1d:exp :id:59",
                "createdAt": "Proof of Lemma lemma:pd:unif",
                "type": "refNode",
                "lineCount": 588,
                "lineCountEnd": null
            },
            {
                "name": "ref to subsec:stoch :id:60",
                "createdAt": "Proof of Lemma lemma:pd:unif",
                "type": "refNode",
                "lineCount": 592,
                "lineCountEnd": null
            },
            {
                "counter": 8,
                "name": "Proofs of results from section subsec:stoch",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 592,
                "lineCountEnd": 731
            },
            {
                "name": "ap:stoch_proofs",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "label",
                "lineCount": 592,
                "lineCountEnd": null
            },
            {
                "name": "ref to thm:n_l=n_r :id:61",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "refNode",
                "lineCount": 594,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Proof of Theorem thm:n_l=n_r",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "subsection",
                "lineCount": 594,
                "lineCountEnd": 649
            },
            {
                "name": "pf:n_l=n_r",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 594,
                "lineCountEnd": null
            },
            {
                "name": "ref to lemma:pd:unif :id:62",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
                "lineCount": 597,
                "lineCountEnd": null
            },
            {
                "name": "ref to lemma:pd:unif :id:63",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
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
                "name": "ref to main:proof:eq:c :id:64",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "ref to main:proof:eq:a :id:65",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "ref to main:proof:eq:b :id:66",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "ref to main:proof:eq:a :id:67",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "ref to main:proof:eq:b :id:68",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
                "lineCount": 642,
                "lineCountEnd": null
            },
            {
                "name": "ref to thm:n_l=n/2 :id:69",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "refNode",
                "lineCount": 649,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Proof of Theorem thm:n_l=n/2",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "subsection",
                "lineCount": 649,
                "lineCountEnd": 731
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
                "name": "ref to assumption:sup_null_set :id:70",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "refNode",
                "lineCount": 670,
                "lineCountEnd": null
            },
            {
                "name": "ref to main:proof:eq:d :id:71",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "refNode",
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
                "name": "ref to thm:n_l=n_r :id:72",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "refNode",
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
                "name": "ref to main:proof:eq:e :id:73",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "refNode",
                "lineCount": 696,
                "lineCountEnd": null
            },
            {
                "name": "ref to main:proof:eq:h :id:74",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "refNode",
                "lineCount": 696,
                "lineCountEnd": null
            },
            {
                "counter": 9,
                "name": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 731,
                "lineCountEnd": 935
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
                "lineCountEnd": 777
            },
            {
                "name": "sec:eff",
                "createdAt": "Algorithmic approach",
                "type": "label",
                "lineCount": 733,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:algorithm :id:75",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "ref to kd:eq:a :id:76",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "ref to kd:eq:b :id:77",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "theorem 9.1.1",
                "createdAt": "Algorithmic approach",
                "type": "theorem",
                "lineCount": 760,
                "lineCountEnd": 765
            },
            {
                "name": "chev:thm:main",
                "createdAt": "theorem 9.1.1",
                "type": "label",
                "lineCount": 760,
                "lineCountEnd": null
            },
            {
                "name": "ref to pf:chev:thm:main :id:78",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 768,
                "lineCountEnd": null
            },
            {
                "name": "ref to chev:thm:main :id:79",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 773,
                "lineCountEnd": null
            },
            {
                "name": "ref to kd:eq:a :id:80",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 773,
                "lineCountEnd": null
            },
            {
                "name": "ref to kd:eq:b :id:81",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 773,
                "lineCountEnd": null
            },
            {
                "name": "ref to sec:performance :id:82",
                "createdAt": "Algorithmic approach",
                "type": "refNode",
                "lineCount": 775,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Map-reduce implementation",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 777,
                "lineCountEnd": 785
            },
            {
                "name": "sec:mapreduce",
                "createdAt": "Map-reduce implementation",
                "type": "label",
                "lineCount": 777,
                "lineCountEnd": null
            },
            {
                "name": "citation to zaharia2016 :id:83",
                "createdAt": "Map-reduce implementation",
                "type": "citeNode",
                "lineCount": 781,
                "lineCountEnd": null
            },
            {
                "name": "ref to chev:thm:main :id:84",
                "createdAt": "Map-reduce implementation",
                "type": "refNode",
                "lineCount": 785,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "Proof of Theorem chev:thm:main",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 785,
                "lineCountEnd": 935
            },
            {
                "name": "pf:chev:thm:main",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "label",
                "lineCount": 785,
                "lineCountEnd": null
            },
            {
                "name": "ref to chev:thm:main :id:85",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "refNode",
                "lineCount": 787,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "lemma 9.3.2",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "lemma",
                "lineCount": 807,
                "lineCountEnd": 812
            },
            {
                "name": "chev:lem:gen:1d",
                "createdAt": "lemma 9.3.2",
                "type": "label",
                "lineCount": 807,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "lemma 9.3.3",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "lemma",
                "lineCount": 867,
                "lineCountEnd": 872
            },
            {
                "name": "chev:lem:gen:pd",
                "createdAt": "lemma 9.3.3",
                "type": "label",
                "lineCount": 867,
                "lineCountEnd": null
            },
            {
                "name": "ref to chev:lem:gen:1d :id:86",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "refNode",
                "lineCount": 875,
                "lineCountEnd": null
            },
            {
                "name": "ref to chev:thm:main :id:87",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "refNode",
                "lineCount": 920,
                "lineCountEnd": null
            },
            {
                "name": "ref to chev:lem:gen:pd :id:88",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "refNode",
                "lineCount": 923,
                "lineCountEnd": null
            }
        ],
        "links": [
            {
                "source": "citation to zaharia2016 :id:1",
                "target": "zaharia2016",
                "type": "cite"
            },
            {
                "source": "citation to ailon2009 :id:2",
                "target": "ailon2009",
                "type": "cite"
            },
            {
                "source": "citation to hu2015,chen2018,pinkman2020 :id:3",
                "target": "hu2015",
                "type": "cite"
            },
            {
                "source": "citation to hu2015,chen2018,pinkman2020 :id:3",
                "target": "chen2018",
                "type": "cite"
            },
            {
                "source": "citation to hu2015,chen2018,pinkman2020 :id:3",
                "target": "pinkman2020",
                "type": "cite"
            },
            {
                "source": "citation to xiao2016 :id:4",
                "target": "xiao2016",
                "type": "cite"
            },
            {
                "source": "citation to bentley1975 :id:5",
                "target": "bentley1975",
                "type": "cite"
            },
            {
                "source": "citation to friedman1977 :id:6",
                "target": "friedman1977",
                "type": "cite"
            },
            {
                "source": "citation to velskii1962 :id:7",
                "target": "velskii1962",
                "type": "cite"
            },
            {
                "source": "citation to bayer1972, guibas1978 :id:8",
                "target": "bayer1972",
                "type": "cite"
            },
            {
                "source": "citation to bayer1972, guibas1978 :id:8",
                "target": "guibas1978",
                "type": "cite"
            },
            {
                "source": "ref to fig:kdtree :id:9",
                "target": "fig:kdtree",
                "type": "ref"
            },
            {
                "source": "citation to bentley1975 :id:10",
                "target": "bentley1975",
                "type": "cite"
            },
            {
                "source": "citation to wald2006 :id:11",
                "target": "wald2006",
                "type": "cite"
            },
            {
                "source": "citation to dean2008 :id:12",
                "target": "dean2008",
                "type": "cite"
            },
            {
                "source": "citation to bleloch2018 :id:13",
                "target": "bleloch2018",
                "type": "cite"
            },
            {
                "source": "citation to wehr2018 :id:14",
                "target": "wehr2018",
                "type": "cite"
            },
            {
                "source": "citation to brown2015b, cao2020 :id:15",
                "target": "brown2015b",
                "type": "cite"
            },
            {
                "source": "citation to brown2015b, cao2020 :id:15",
                "target": "cao2020",
                "type": "cite"
            },
            {
                "source": "citation to wald2006 :id:16",
                "target": "wald2006",
                "type": "cite"
            },
            {
                "source": "citation to procopiuc2003, brown2015 :id:17",
                "target": "procopiuc2003",
                "type": "cite"
            },
            {
                "source": "citation to procopiuc2003, brown2015 :id:17",
                "target": "brown2015",
                "type": "cite"
            },
            {
                "source": "citation to hunt2006, shevtsov2007, zhou2008, soupikov2008, choi2010 :id:18",
                "target": "hunt2006",
                "type": "cite"
            },
            {
                "source": "citation to hunt2006, shevtsov2007, zhou2008, soupikov2008, choi2010 :id:18",
                "target": "shevtsov2007",
                "type": "cite"
            },
            {
                "source": "citation to hunt2006, shevtsov2007, zhou2008, soupikov2008, choi2010 :id:18",
                "target": "zhou2008",
                "type": "cite"
            },
            {
                "source": "citation to hunt2006, shevtsov2007, zhou2008, soupikov2008, choi2010 :id:18",
                "target": "soupikov2008",
                "type": "cite"
            },
            {
                "source": "citation to hunt2006, shevtsov2007, zhou2008, soupikov2008, choi2010 :id:18",
                "target": "choi2010",
                "type": "cite"
            },
            {
                "source": "ref to sec:intution :id:19",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "ref to sec:main :id:20",
                "target": "sec:main",
                "type": "ref"
            },
            {
                "source": "ref to sec:algorithm :id:21",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "ref to sec:performance :id:22",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "ref to sec:disc :id:23",
                "target": "sec:disc",
                "type": "ref"
            },
            {
                "source": "citation to chakravorty2021 :id:24",
                "target": "chakravorty2021",
                "type": "cite"
            },
            {
                "source": "ref to sec:intution :id:25",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "ref to ap:approx_proofs :id:26",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "ref to lemma:1d:exp :id:27",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "ref to ap:approx_proofs :id:28",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "ref to ap:approx_proofs :id:29",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "ref to sec:intution :id:30",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "ref to assumption:positive_density :id:31",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "ref to ap:stoch_proofs :id:32",
                "target": "ap:stoch_proofs",
                "type": "ref"
            },
            {
                "source": "ref to assumption:positive_density :id:33",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "ref to assumption:sup_null_set :id:34",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "ref to ap:stoch_proofs :id:35",
                "target": "ap:stoch_proofs",
                "type": "ref"
            },
            {
                "source": "ref to sec:intution :id:36",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "ref to kd:eq:a :id:37",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "ref to kd:eq:b :id:38",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "ref to thm:n_l=n/2 :id:39",
                "target": "thm:n_l=n/2",
                "type": "ref"
            },
            {
                "source": "ref to assumption:positive_density :id:40",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "ref to assumption:sup_null_set :id:41",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "ref to assumption:positive_density :id:42",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "ref to assumption:sup_null_set :id:43",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "ref to ap:construct :id:44",
                "target": "ap:construct",
                "type": "ref"
            },
            {
                "source": "ref to fig:norm_acc :id:45",
                "target": "fig:norm_acc",
                "type": "ref"
            },
            {
                "source": "ref to sec:eff :id:46",
                "target": "sec:eff",
                "type": "ref"
            },
            {
                "source": "ref to fig:norm_acc :id:47",
                "target": "fig:norm_acc",
                "type": "ref"
            },
            {
                "source": "ref to fig:norm_run :id:48",
                "target": "fig:norm_run",
                "type": "ref"
            },
            {
                "source": "ref to sec:main :id:49",
                "target": "sec:main",
                "type": "ref"
            },
            {
                "source": "ref to sec:algorithm :id:50",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "ref to sec:performance :id:51",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "ref to subsec:approx :id:52",
                "target": "subsec:approx",
                "type": "ref"
            },
            {
                "source": "ref to lemma:1d:exp :id:53",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "ref to proof:eq:1 :id:54",
                "target": "proof:eq:1",
                "type": "ref"
            },
            {
                "source": "ref to proof:eq:2 :id:55",
                "target": "proof:eq:2",
                "type": "ref"
            },
            {
                "source": "ref to proof:eq:1 :id:56",
                "target": "proof:eq:1",
                "type": "ref"
            },
            {
                "source": "ref to lemma:1d:unif :id:57",
                "target": "lemma:1d:unif",
                "type": "ref"
            },
            {
                "source": "ref to lemma:pd:unif :id:58",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "ref to lemma:1d:exp :id:59",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "ref to subsec:stoch :id:60",
                "target": "subsec:stoch",
                "type": "ref"
            },
            {
                "source": "ref to thm:n_l=n_r :id:61",
                "target": "thm:n_l=n_r",
                "type": "ref"
            },
            {
                "source": "ref to lemma:pd:unif :id:62",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "ref to lemma:pd:unif :id:63",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:c :id:64",
                "target": "main:proof:eq:c",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:a :id:65",
                "target": "main:proof:eq:a",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:b :id:66",
                "target": "main:proof:eq:b",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:a :id:67",
                "target": "main:proof:eq:a",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:b :id:68",
                "target": "main:proof:eq:b",
                "type": "ref"
            },
            {
                "source": "ref to thm:n_l=n/2 :id:69",
                "target": "thm:n_l=n/2",
                "type": "ref"
            },
            {
                "source": "ref to assumption:sup_null_set :id:70",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:d :id:71",
                "target": "main:proof:eq:d",
                "type": "ref"
            },
            {
                "source": "ref to thm:n_l=n_r :id:72",
                "target": "thm:n_l=n_r",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:e :id:73",
                "target": "main:proof:eq:e",
                "type": "ref"
            },
            {
                "source": "ref to main:proof:eq:h :id:74",
                "target": "main:proof:eq:h",
                "type": "ref"
            },
            {
                "source": "ref to sec:algorithm :id:75",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "ref to kd:eq:a :id:76",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "ref to kd:eq:b :id:77",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "ref to pf:chev:thm:main :id:78",
                "target": "pf:chev:thm:main",
                "type": "ref"
            },
            {
                "source": "ref to chev:thm:main :id:79",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "ref to kd:eq:a :id:80",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "ref to kd:eq:b :id:81",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "ref to sec:performance :id:82",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "citation to zaharia2016 :id:83",
                "target": "zaharia2016",
                "type": "cite"
            },
            {
                "source": "ref to chev:thm:main :id:84",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "ref to chev:thm:main :id:85",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "ref to chev:lem:gen:1d :id:86",
                "target": "chev:lem:gen:1d",
                "type": "ref"
            },
            {
                "source": "ref to chev:thm:main :id:87",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "ref to chev:lem:gen:pd :id:88",
                "target": "chev:lem:gen:pd",
                "type": "ref"
            }
        ],
        "environments": [
            {
                "name": "section",
                "text": "section",
                "counter": 10,
                "countersShouldReset": [
                    "theorem",
                    "subsection"
                ],
                "countersShouldUpdate": []
            },
            {
                "name": "theorem",
                "text": "Theorem",
                "counter": 4,
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
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "theorem"
                ]
            },
            {
                "name": "lemma",
                "text": "Lemma",
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "theorem"
                ]
            },
            {
                "name": "remark",
                "text": "Remark",
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "theorem"
                ]
            },
            {
                "name": "definition",
                "text": "Definition",
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "theorem"
                ]
            },
            {
                "name": "example",
                "text": "Example",
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "theorem"
                ]
            },
            {
                "name": "assumption",
                "text": "Assumption",
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "theorem"
                ]
            },
            {
                "name": "proposition",
                "text": "Proposition",
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": [
                    "theorem"
                ]
            },
            {
                "name": "subsection",
                "text": "subsection",
                "counter": 4,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            }
        ],
        "labelPrefixes": [
            "sec",
            "fig",
            "subsec",
            "lemma",
            "kd",
            "assumption",
            "thm",
            "ap",
            "proof",
            "pf",
            "main",
            "chev"
        ]
    };
    nodes = data.nodes;
    links = data.links;
    envs = data.environments;
    let tmpVar = setupLabPrefixes(data.labelPrefixes);
    labPrefixDepth = tmpVar[0];
    unit = tmpVar[1];
    lineGraph(nodes, links, envs);
  
}

var colors = new ColorObject(false, "#8C8C8C", "#000000", "#FF2D00", "#BE00FF");

var linkDict = {};
var nodeDict = {};
var envDict = {};
var labPrefixDepth = {};
var unit = 10;
var nodeToLineText = {};
var sectionNodes = [];
var normalNodes = [];
var paperNodes = [];
var envNodes = [];

var nodes, links, envs;

// TODO figure out what width and height
const width = window.innerWidth;//600; 
const graphWidth = width * 2;
const xaxisHeight = 50;
const height = window.innerHeight - 50;
const defaultNodeY = xaxisHeight + 50;
const defaultRefNodeY = xaxisHeight//defaultNodeY + 100;
const defaultPaperY = 30;
const defaultEnvY = xaxisHeight;
//const nodeColor = "gray" //isn't used
//const envColor = "purple" //isn't used
//const sectionColor = "red" //isn't used
const defaultNodeRadius = 6;
const defaultSectionRectHeight = height - 100;//envRectHeight + 50
const envRectHeight = defaultSectionRectHeight - 30;

const sectionTextY = xaxisHeight + defaultSectionRectHeight + 15;
const envTextY = xaxisHeight - 10;
const ShowPaperNodes = true; //isn't used


var svgLinks;
var envRect;
var nodeCircles;
var svgSectionLine;
var currentScale;
var arrowMarker;

const zoomThreshold = 20;


var currentSelectedNode = null;

var allNodes;


function lineGraph(input_nodes, input_links, input_envs) {


    allNodes = input_nodes;
    links = input_links;
    envs = input_envs;
    //console.log("env: " + envs[0]);

    allNodes.sort(compare);

    // create dict of nodes for lookup later  
    let preSectionName;
    let preSubSect;
    let i = 1;


    // TODO COMBINE TO ONE LOOB
    allNodes.forEach(node => {
        let nodeName = node.name;
        nodeDict[nodeName] = node;
      
        nodeDict[nodeName].radius = defaultNodeRadius;

        if (node.type == "paper") {
            nodeDict[nodeName].y = defaultPaperY;
            i += 1;
            nodeDict[nodeName].lineCount = (50*i);
        }
        else if (node.type == "refNode" || node.type == "citeNode") {
            //TODO ÆNDRING
            nodeDict[nodeName].y = defaultNodeY;//labPrefixDepth["refNode"]//defaultRefNodeY;//defaultNodeY; //defaultRefNodeY;
           
            

        } else if (node.type == "label") {
            let prefixType = nodeName.split(':')[0];
            if (prefixType in labPrefixDepth) {
                nodeDict[nodeName].y = labPrefixDepth[prefixType];
                console.log("prefixType " + prefixType + " " + labPrefixDepth[prefixType]);

              
            } else {
                nodeDict[nodeName].y = defaultNodeY;
            }
            
        }
        else {
            //console.log("setting normal y: " + node.type); 
            nodeDict[nodeName].y = defaultNodeY;
        }
        
        if (node.type.includes("section")) {
            nodeDict[nodeName].color = colors.sectionColor;
        } else {
            nodeDict[nodeName].color = colors.nodeColor;
        }


        // new code for prefixY
        //nodeDict[nodeName].y = prefixY[nodeName];
        

    })

    
    // for each ref make target Bigger  

    links.forEach(link => {
        //nodeDict[link.target].radius += 2;
        if (!(link.target in linkDict)) {
            linkDict[link.target] = link.source;
        }
        

    });

    // create dict for env
    
    envs.forEach(env => {
        envDict[env.name] = env;
    });

    
    var bestLineCount = 0;
    var prevNode = null;
    var prevPrefixNode = {}
    var prevNodeMoved = false;
    var threshold = 100;

    // filter for sections and other nodes  
    allNodes.forEach(node => {
        if (node.type in envDict && !node.type.includes("section")) {
           
            envNodes.push(node);
            nodeDict[node.name].color = colors.envColor;
        }
        
        else if (node.type == "section" || node.type.includes("subsection")) {
           
            sectionNodes.push(node);
        }
        else if (node.type == "paper") {
            paperNodes.push(node);
        }
        else {
            //if (node.name.includes("sec:")) {
            //    // TODO set nodes coordinate to be createdAt
            //    // or something so it looks like the links point to
            //    // createdAt
            //}

            // if label for env (lemma, theorem...) 
            if (node.type == "label" && nodeDict[node.createdAt].type in envDict) {
                //nodeDict[node.name].lineCount = nodeDict[node.createdAt].lineCount;
                //nodeDict[node.name].y = nodeDict[node.createdAt].y;
                //console.log("hmm : " + calEnvHeight(nodeDict[node.createdAt]));
                //nodeDict[node.name].y = calEnvHeight(nodeDict[node.createdAt]) + defaultEnvY-10;

            } else {
                // TODO move out of else to draw all nodes
               
            }
            normalNodes.push(node);


            if (node.type == "refNode" || node.type == "citeNode") {
                let nameToTarget = node.name.split(":id:")[0];
                nameToTarget = nameToTarget.replace(/(ref to)|(citation to)/, "").trim();
                console.log("nameTotarget " + nameToTarget);
                console.log("nameTotarget " + nodeDict[nameToTarget]);

                if (nameToTarget in nodeDict) {
                    if (nodeDict[nameToTarget].type == "label") {

                        let prefixType = nameToTarget.split(':')[0];
                        if (prefixType in labPrefixDepth) {
                            console.log("prefixType " + prefixType + " " + labPrefixDepth[prefixType])
                            nodeDict[node.name].y = labPrefixDepth[prefixType];
                            
                        }


                    }

                }
            }
           


            
            

           
            
        }


        if (bestLineCount < node.lineCountEnd) {
            bestLineCount = node.lineCountEnd;
        }
        // clustering fix 
        if (node.type != "paper") {


            // if node.prefix in prevPrefixNode (instead of null)
            let nodePrefix = node.name.split(':')[0];
            console.log("test2 " + node.type);
            if (nodePrefix in prevPrefixNode) {
                let currentPrevNode = prevPrefixNode[nodePrefix];
                if (!currentPrevNode.moved && (node.lineCount - currentPrevNode.lineCount) <= threshold) {
                    node.y = node.y + (unit / 2);
                    let currentNode = node;
                    currentNode.moved = true;
                    console.log("moving regular");
                    prevPrefixNode[nodePrefix] = currentNode;
                } else {
                    let currentNode = node;
                    currentNode.moved = false;
                    prevPrefixNode[nodePrefix] = currentNode;
                }

            }
            else {
                if (node.type == "refNode") {
                    let nameToTarget = node.name.split(":id:")[0];
                    nameToTarget = nameToTarget.replace(/(ref to)|(citation to)/, "").trim();
                    let targetPrefix = nameToTarget.split(':')[0];


                    if (targetPrefix in prevPrefixNode) {
                        console.log("targetPre " + targetPrefix);
                        let currentPrevNode = prevPrefixNode[targetPrefix];
                        if (!currentPrevNode.moved && (node.lineCount - currentPrevNode.lineCount) <= threshold) {
                            node.y = labPrefixDepth[targetPrefix] + (unit / 2);
                            console.log("UNIT" + (unit / 2));
                            let currentNode = node;
                            currentNode.moved = true;
                            prevPrefixNode[targetPrefix] = currentNode;
                        } else {
                            let currentNode = node;
                            currentNode.moved = false;
                            prevPrefixNode[targetPrefix] = currentNode;
                        }
                    }



                } else {
                    let currentNode = node;
                    currentNode.moved = false;

                    if (nodePrefix in labPrefixDepth) {

                        prevPrefixNode[nodePrefix] = currentNode;
                    } else {
                        prevPrefixNode["prevNode"] = currentNode;
                    }

                }
                

            }
                // if !prevNodeMoved && (node.lineCount - prevNode.lineCount) <= threshold
              

            //if (prevNode != null) {
            //    if (!prevNodeMoved && (node.lineCount - prevNode.lineCount) <= threshold) {
            //        node.y = node.y + (unit / 2);//getRandomInt(-30, 30);
            //        prevNode = node;
            //        prevNodeMoved = true;
            //        //console.log("new prevNode: " + node.type +  " " +  (node.type != "refNode"));
            //    } else {
            //        prevNode = node;
            //        prevNodeMoved = false;
            //    }

            //}
            //else {
            //    prevNode = node;
            //}

        }
        
            

        

         //if (!node.type.includes("section") && (node.type != "refNode" && node.type != "citeNode")) {
        //    if (prevNode != null) {
        //        if (prevNode.y == defaultNodeY && (node.lineCount - prevNode.lineCount) <= threshold) {
        //            node.y = defaultNodeY + getRandomInt(10,30);
        //            prevNode = node;
        //            //console.log("new prevNode: " + node.type +  " " +  (node.type != "refNode"));
        //        } else {
        //            prevNode = node;
        //        }

        //    }
        //    else {
        //        prevNode = node;
        //    }


        //}
       


    });


  
    const maxLineCount = bestLineCount + 100;

    var xAxisScale = d3.scaleLinear()
        .domain([0, maxLineCount])
        .range([0, width]);

    currentScale = xAxisScale;

    // select the svg for creating the graph
    // and configure the width and height

    var svgCanvas = d3.select("#d3graph")
                .append("svg")
                .attr("width", width)
        .attr("height", height);

    var graphBackground = svgCanvas.append('rect')
        .attr("class", "graphRect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "white");

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
        .style("fill", "black")
        .attr("transform", "scale(0.5)");

    
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

    // working on better arrow
    arrowMarker = svg.append("defs")
        //.selectAll("marker")
        //.data(["selectedArrow", "arrow"])
        .append("marker")
        .attr("id", "betterArrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 3)
        .attr("refY", 0)
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .style("fill", colors.linkColor)
        .attr('fill-opacity', "0.5")
        .attr("transform", "scale(0.3)");
;

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

   
    

    var svgSection =
        svg.selectAll("#sectionLine")
            .data(sectionNodes)
            .enter();
        
    svgSectionLine = svgSection.append('g')
        .append('rect')
        .attr('width', node => getLineCountDiff(node, xAxisScale))
        .attr('height', node => sectionRectHeight(node))
        .attr('fill', colors.sectionColor)
        .attr('fill-opacity', "0.3")
        .attr('x', node => getlineCount(node, xAxisScale))
        .attr('y', getEnvNodeY)
        .attr('stroke-width', 2)
        .attr('stroke', 'black')

    // svg group for environments 
    var svgEnvs = svg
        .selectAll('#envRect')
        .data(envNodes)
        .enter().append('g');

    envRect = svgEnvs
        .append('rect')
        .attr('width', node => getLineCountDiff(node, xAxisScale))
        .attr('height', node => calEnvHeight(node))
        .attr('fill', colors.envColor)
        .attr('fill-opacity', "0.7")
        .attr('x', node => getlineCount(node, xAxisScale))
        .attr('y', getEnvNodeY)
        .attr('stroke-width', 1)
        .attr('stroke', 'black');


    

        //svgSection.append('g').append('line')
        //.attr('stroke-width', 2)
        //.attr('stroke', 'red')
        //.attr("x1", node => getlineCount(node, xAxisScale))
        //.attr("y1", xaxisHeight - 10)
        //.attr("x2", node => getlineCount(node, xAxisScale))
        //.attr("y2", height+ 1000)

    


    var svgNodes = svg
        .selectAll('circle')
        .data(normalNodes.concat(paperNodes))
        .enter();

    

    nodeCircles = svgNodes.append('circle')
        .attr('r', getRadiusNode)
        .attr('fill', "gray")
        .attr('cx', node => getlineCount(node, xAxisScale))
        .attr('cy', getNodeY)
        .attr('stroke-width', 0.5)
        .attr('stroke', 'black');

    svgLinks = svg
        .selectAll('mylinks')
        .data(links)
        .enter()
        .append('path')
        .attr("class", "link")
        .attr('d', link => createArc(link, xAxisScale)/*createArc(link, xAxisScale)*/)
        .attr("stroke", getLinkColor)
        .attr('stroke-width', 2)
        .style("fill", "none")
        .attr("marker-end", "url(#betterArrow)");
        

    var textDiv = svgNodes.append('g');

    envRect.on("click", function (selected) {
        document.getElementById("nodeTexCode").innerHTML = nodeToLineText[selected.name]; // TODO: change this so it works like the ones bellow

        textEnvNode.attr("visibility", function (node) { return showName(node, selected) });
        envRect.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", colors.sectionColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", colors.nodeColor);


       

    });

    svgSectionLine.on("click", function (selected) {
        //console.log("OH NO! ")
        document.getElementById("nodeTexCode").innerHTML = ""; // TODO: change this so it works like the ones bellow

        textSection.attr("visibility", function (node) { return showName(node, selected) });
        svgSectionLine.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", colors.envColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", colors.nodeColor);
    });

    nodeCircles.on("click", function (selected) {
        document.getElementById("nodeTexCode").innerHTML = nodeToLineText[selected.name]; // TODO: change this so it works like the ones bellow
       
        textElements.attr("visibility", function (node) { return showName(node, selected) });
        nodeCircles.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", colors.envColor);
        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", colors.sectionColor);
        svgLinks.selectAll("marker").attr("fill", "red");
    });


    graphBackground.on("click", function (selected) {
        document.getElementById("nodeTexCode").innerHTML = ""; 

        currentSelectedNode = null;
        displayInfoAboutNode();

        svgLinks
            .attr("stroke", getLinkColor)
            .attr("stroke-opacity", link => visibleLinks(link, currentScale));


        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", colors.envColor);
        textBackground.attr("visibility", "hidden" );

        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", colors.sectionColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", colors.nodeColor);
    });

    

    var textSection = svgSection
        .append('text')
        .text(node => node.name)
        .attr("class", "title")
        .attr("dx", node => getlineCount(node, xAxisScale))
        .attr("dy", sectionTextY)
        .attr("visibility", "hidden");

    var textEnvNode = svgEnvs
        .append('text')
        .text(node => node.name)
        .attr("class", "label")
        .attr("dx", node => xAxisScale(node.lineCount))
        .attr("dy", envTextY)
        .attr("visibility", "hidden");

    
    var textElements = textDiv
        .append('text')
        .attr("class", "label")
        .attr("dx", node => xAxisScale(node.lineCount))
        .attr("dy", node => nodeDict[node.name].y - 8)
        .attr("visibility", "hidden")
        .text(function (node) {
            if (node.type == "paper") {
                if (node.information) {
                    return node.information[0];
                }
                else {
                    return node.name.split(":id:")[0]
                }
                   
            } else {
                return node.name.split(":id:")[0];
            }


        }).call(getBB);

    var textBackground = textDiv.insert("rect", "text")
        .attr("class", "backgroundColor")
        .attr("width", function (d) { return d.bbox.width })
        .attr("height", function (d) { return d.bbox.height + 4 })
        .attr("x", node => xAxisScale(node.lineCount))
        .attr("y", node => (nodeDict[node.name].y - 8) - node.bbox.height)
        .attr("visibility", "hidden")

    function getBB(selection) {
        selection.each(function (d) { d.bbox = this.getBBox(); })
    }
    

    function getlineCount(node, scale) {

        //if (node.type == "paper") {
        //    let firstSourceNode = linkDict[node.name];
        //    //console.log("Target node: " + node.name);
        //    if (firstSourceNode) {
               
        //        let newLineCount = nodeDict[firstSourceNode].lineCount;
        //        nodeDict[node.name].lineCount = newLineCount;
        //        return scale(newLineCount);
        //    }

        //    return scale(bestLineCount/2)
            
           
        //}
        
           
        return scale(node.lineCount);

    }
    

    function handleZoom() {

       
        let new_xScale = d3.event.transform.rescaleX(xAxisScale)
       

        // update axes
        gX.call(xAxis.scale(new_xScale));

        currentScale = new_xScale;

        nodeCircles.attr("cx", node => getlineCount(node, new_xScale));


        svgLinks
            .attr("d", link => createArc(link, new_xScale))
            .attr("stroke-opacity", link => visibleLinks(link, new_xScale));

        svgSectionLine
            .attr('width', node => getLineCountDiff(node, new_xScale))
            .attr('x', node => getlineCount(node, new_xScale))
            //.attr("x1", node => getlineCount(node, new_xScale))
            //.attr("y1", xaxisHeight - 10)
            //.attr("x2", node => getlineCount(node, new_xScale))
            //.attr("y2", height + 1000)

        envRect
            .attr('x', node => getlineCount(node, new_xScale))
            .attr('width', node => getLineCountDiff(node, new_xScale));


        textElements.attr("dx", node => new_xScale(node.lineCount));
        textEnvNode.attr("dx", node => new_xScale(node.lineCount));
        textSection.attr("dx", node => new_xScale(node.lineCount));

        textBackground.attr("x", node => new_xScale(node.lineCount))

        //console.log("TRANSFORM K: " + d3.event.transform.k);

        if (d3.event.transform.k > zoomThreshold) {
            textElements.attr("visibility", "visible");
            textBackground.attr("visibility", "visible");
        } else {

            textElements.attr("visibility", function (node) { return showName(node, currentSelectedNode) });
            textBackground.attr("visibility", function (node) { return showName(node, currentSelectedNode) });
        }
        
    }

    let zoom = d3.zoom()
        .translateExtent([[-100, 0], [width, 0]])
        .extent([[0, 0], [(0), 0]])
        .scaleExtent([0.4, 100])
        .on('zoom', handleZoom);


    svgCanvas.call(zoom);
    // start scale zoom: 
    zoom.scaleTo(svgCanvas, 1);


    function selectNode(node, selected) {

        currentSelectedNode = selected;
        displayInfoAboutNode(selected);

        svgLinks
            .attr("stroke", link => {

                if (link.source == selected.name) {
                    return "#65FF00";
                } else if (link.target == selected.name) {
                    return "#65FF00";
                }
                else {
                    return getLinkColor(link);
                }
            })
            .attr("stroke-opacity", link => {

                if (link.source == selected.name) {
                    return 1;
                }
                else if (link.target == selected.name) {
                    return 1;
                }
                else {
                    return 0.1;
                }
            });


        if (node.name == selected.name) {
            return "#65FF00";
        }
        else {

            return selected.color;

        }

    }


}

function sectionRectHeight(node) {

    const regex = /sub/gm;
    let numberOfSub = subCount(node.type);

    let newHeight = defaultSectionRectHeight - (numberOfSub * 20);
    if (newHeight <= 20) {
        return 20;
    }

    return newHeight;


}

function subCount(type) {

    const regex = /sub/gm;
    return ((type || '').match(regex) || []).length;

}

function visibleLinks(link, scale) {

    
    let sourceNode = nodeDict[link.source];
    let targetNode = nodeDict[link.target];

    let sx = scale(sourceNode.lineCount);
    let tx = scale(targetNode.lineCount);

    let sourceOutside = (sx < 0 || sx > width)
    let targetOutside = (tx < 0 || tx > width)

    
    if (currentSelectedNode != null && (link.target == currentSelectedNode.name || link.source == currentSelectedNode.name)) {
        return 0.3; // visible
    }

    if (sourceOutside && targetOutside) {
        return 0;
    } else if ((sourceOutside && !targetOutside) || (targetOutside && !sourceOutside)) {
        return 0.05;
    } else {
        if (currentSelectedNode != null) {
            return 0.05;
        } else {
            return 0.3;// visible
        }
        
    }


}

function getLinkColor(link) {
    if (link.type == "ref") {
        return colors.linkColor;
        //return "black";
    } else {
        return "blue";
    }
}




function createArc(d, scale) {

    //console.log(d.source);
    //console.log(d.target);
    //console.log("LINK: ");
    //console.log(nodeDict[d.source]);
    //console.log(nodeDict[d.target]);
    //console.log("shpw : " + colors.showPaperNodes);

    var newCoord = getTargetNodeCircumferencePoint(d, scale);


    if (!colors.showPaperNodes && nodeDict[d.target].type == "paper") {
        return [];
    } else if (nodeDict[d.target].type == "paper") {
        return ['M', scale(nodeDict[d.source].lineCount), nodeDict[d.source].y, 'L', newCoord[0], newCoord[1]].join(' ');

    }

    
    //var newCoord = [scale(nodeDict[d.target].lineCount), nodeDict[d.target].y];
      //TODO ÆNDRING
    //return ['M', scale(nodeDict[d.source].lineCount), nodeDict[d.source].y, 'L', newCoord[0], newCoord[1]].join(' ');

    var dx = scale(nodeDict[d.target].lineCount) - scale(nodeDict[d.source].lineCount),
        dy = nodeDict[d.target].y - nodeDict[d.source].y,
        dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + scale(nodeDict[d.source].lineCount) + "," + nodeDict[d.source].y + "A" + dr + "," + dr + " 0 0,1 " + newCoord[0] + "," + newCoord[1];


    //start = scale(nodeDict[link.source].lineCount)   // X position of start node on the X axis
    //end = scale(nodeDict[link.target].lineCount)    // X position of end node

    //startY = nodeDict[link.source].y
    //endY = nodeDict[link.target].y

    //if (nodeDict[link.source].type == "paper" || nodeDict[link.target].type == "paper") {
    //    return ['M', start, startY, 'L', end, endY].join(' ');
    //}

    //return ['M', start, startY,    // the arc starts at the coordinate x=start, y=height-10 (where the starting node is)
    //    'A',                            // This means we're gonna build an elliptical arc 
    //    (start - end), ',',         // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance 
    //    (start - end), 0, 0, ',',
    //    start < end ? 1 : 1, end, ',', endY] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
    //    .join(' ');

}

function getTargetNodeCircumferencePoint(d, scale) {
    console.log("name: " + d.target);
    console.log(nodeDict[d.target]);
    var t_radius = getRadiusNode(nodeDict[d.target]); // nodeWidth is just a custom attribute I calculate during the creation of the nodes depending on the node width
    var dx = scale(nodeDict[d.target].lineCount) - scale(nodeDict[d.source].lineCount);
    var dy = nodeDict[d.target].y - nodeDict[d.source].y;
    var gamma = Math.atan2(dy, dx); // Math.atan2 returns the angle in the correct quadrant as opposed to Math.atan
    var tx = scale(nodeDict[d.target].lineCount) - (Math.cos(gamma) * t_radius);
    var ty = nodeDict[d.target].y - (Math.sin(gamma) * t_radius);

    return [tx, ty];
}


function getNodeY(node) {
    //console.log("HALLO : " + nodeDict[node.name].y);
    return nodeDict[node.name].y;
}

//TODO Fix height
function calEnvHeight(node) {
    console.log("EnvNode: " + node.name + " \n CA: " + node.createdAt);
    if (node.createdAt.toLowerCase() == "document") {
        return defaultSectionRectHeight;
    }

    let i = 1;
    let nodeCreatedAt = node.createdAt;
    while (true) {
        if (nodeDict[nodeCreatedAt].type in envDict) {
            i += 1;
            nodeCreatedAt = nodeDict[nodeCreatedAt].createdAt;
            if (nodeCreatedAt.toLowerCase() == "document") {
                break;
            }
        } else {
            break;
        }

    }
    console.log("i: " + i);
    

    let numberOfSub = 0;//subCount(nodeDict[node.createdAt].type);
    //console.log("NodeHeight: " + (envRectHeight - (10 * numberOfSub)));
    return envRectHeight - (10 * (numberOfSub + i));
   
}



function showName(node, selected) {
    if (selected == null) {
        return "hidden";
    }
    if (node.name == selected.name) {
        return "visible";
    }
    else {
        return "hidden";

    }
}

function getLineCountDiff(node, scale) {
   
    return (scale(node.lineCountEnd) - scale(node.lineCount));
}

function getEnvNodeY(node) {
    return defaultEnvY;
}

function getRadiusNode(node) {
    console.log(node);
    if (node.type == "refNode" || node.type == "citeNode") {
        return 3; //defaultNodeRadius
    } else if (node.type == "paper") {
        return 2; //defaultNodeRadius
    }
    return node.radius;
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

function setupLabPrefixes(prefixes) {
    prefixHeightDict = {};
    prefixHeight = defaultSectionRectHeight / prefixes.length;
    prefixHeight2 = defaultNodeY
    prefixes.splice(((prefixes.length + 1) / 2), 0, "refNode");
    console.log("HEEEY");
    let unit = ((defaultSectionRectHeight - prefixHeight2) / prefixes.length)
    for (var i = 0; i < prefixes.length; i++) {
        prefixHeightDict[prefixes[i]] = prefixHeight2 + (unit * i);
        console.log(prefixHeightDict[prefixes[i]]);
    }
    return [prefixHeightDict, unit];
}

function setColors(colorObject) {
    colors = colorObject;


    allNodes.forEach(node => {
        let nodeName = node.name;
        if (node.type.includes("section")) {
            nodeDict[nodeName].color = colors.sectionColor;
        } else if (node.type in envDict) {
            nodeDict[nodeName].color = colors.envColor;
        } else {
            nodeDict[nodeName].color = colors.nodeColor;
        }


    });
    

    arrowMarker.style("fill", colors.linkColor);

    svgLinks
            .attr("stroke", getLinkColor)

        envRect.attr("fill", colors.envColor);
       

     
        svgSectionLine.attr("fill", colors.sectionColor);
       
        nodeCircles.attr("fill", colors.nodeColor);

    //console.log("color: " + colors.envColor)
    //redraw();
    /*allNodes.forEach(node => {
        let nodeName = node.name;
        nodeDict[nodeName] = node;

        if (node.type.includes("section")) {
            nodeDict[nodeName].color = colors.sectionColor;
        } else if(node.type in envDict) {
            nodeDict[node.name].color = colors.envColor;
        } else {
            nodeDict[nodeName].color = colors.nodeColor;
        }
    })*/
    
}


function displayInfoAboutNode() {

    let nodeName = document.getElementById("nodeName");
    let nodeCreatedAt = document.getElementById("nodeCreatedAt");
    let nodeType = document.getElementById("nodeType");
    if (currentSelectedNode != null) {

        let createdAtType = "";
        let tmpCreatedAt = currentSelectedNode.createdAt.toLowerCase();
        if (tmpCreatedAt != "document" && tmpCreatedAt != "bibfile" && tmpCreatedAt != "bbl" ) {
            createdAtType = nodeDict[currentSelectedNode.createdAt].type
        }
            


        nodeName.innerHTML = "Selected node: \n " + currentSelectedNode.name;
        nodeCreatedAt.innerHTML = "Defined in " + createdAtType + ": " + currentSelectedNode.createdAt;
        nodeType.innerHTML = "Type : " + currentSelectedNode.type;
    } else {
        nodeName.innerHTML = "";
        nodeCreatedAt.innerHTML = "";
        nodeType.innerHTML = "";
    }

    
    
}

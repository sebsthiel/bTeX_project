

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

    //funGraph(nodes, links);
    lineGraph(nodes, links);

}

function createLine(json) {
    data = {
        "nodes": [
            {
                "counter": 1,
                "name": "Introduction",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 51
            },
            {
                "name": "sec:introduction",
                "createdAt": "Introduction",
                "type": "label",
                "lineCount": 51
            },
            {
                "name": "1",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53
            },
            {
                "name": "2",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53
            },
            {
                "name": "3",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53
            },
            {
                "name": "4",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53
            },
            {
                "name": "5",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53
            },
            {
                "name": "6",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 53
            },
            {
                "name": "7",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 55
            },
            {
                "name": "8",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 57
            },
            {
                "name": "9",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 57
            },
            {
                "name": "10",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 57
            },
            {
                "name": "11",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 57
            },
            {
                "name": "fig:kdtree",
                "createdAt": "Introduction",
                "type": "label",
                "lineCount": 63
            },
            {
                "name": "12",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 66
            },
            {
                "name": "13",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 66
            },
            {
                "name": "14",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 66
            },
            {
                "name": "15",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "16",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "17",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "18",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "19",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "20",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "21",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "22",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "23",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "24",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "25",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "26",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "27",
                "createdAt": "Introduction",
                "type": "citep",
                "lineCount": 68
            },
            {
                "name": "28",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70
            },
            {
                "name": "29",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70
            },
            {
                "name": "30",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70
            },
            {
                "name": "31",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70
            },
            {
                "name": "32",
                "createdAt": "Introduction",
                "type": "ref",
                "lineCount": 70
            },
            {
                "counter": 1,
                "name": "Intuition underlying k-d tree construction in parallel, distributed environments",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 72
            },
            {
                "name": "sec:intution",
                "createdAt": "Intuition underlying k-d tree construction in parallel, distributed environments",
                "type": "label",
                "lineCount": 72
            },
            {
                "counter": 1,
                "name": "Main results",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 108
            },
            {
                "name": "sec:main",
                "createdAt": "Main results",
                "type": "label",
                "lineCount": 108
            },
            {
                "name": "33",
                "createdAt": "Main results",
                "type": "citet",
                "lineCount": 110
            },
            {
                "name": "34",
                "createdAt": "Main results",
                "type": "ref",
                "lineCount": 110
            },
            {
                "counter": 1,
                "name": "Approximation of indicator functions",
                "createdAt": "Main results",
                "type": "subsection",
                "lineCount": 112
            },
            {
                "name": "subsec:approx",
                "createdAt": "Approximation of indicator functions",
                "type": "label",
                "lineCount": 112
            },
            {
                "counter": 1,
                "name": "lemma 1.1.1",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "lemma",
                "lineCount": 867
            },
            {
                "name": "lemma:1d:exp",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 121
            },
            {
                "name": "35",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 136
            },
            {
                "name": "36",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 139
            },
            {
                "name": "lemma:1d:unif",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 150
            },
            {
                "name": "37",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 157
            },
            {
                "name": "lemma:pd:unif",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 176
            },
            {
                "name": "38",
                "createdAt": "Approximation of indicator functions",
                "type": "ref",
                "lineCount": 183
            },
            {
                "counter": 1,
                "name": "Stochastic bounds on accuracy",
                "createdAt": "Main results",
                "type": "subsection",
                "lineCount": 186
            },
            {
                "name": "subsec:stoch",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "label",
                "lineCount": 186
            },
            {
                "name": "kd:eq:a",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "label",
                "lineCount": 200
            },
            {
                "name": "39",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "ref",
                "lineCount": 203
            },
            {
                "name": "kd:eq:b",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "label",
                "lineCount": 209
            },
            {
                "counter": 1,
                "name": "assumption 1.1.1",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "assumption",
                "lineCount": 235
            },
            {
                "name": "assumption:positive_density",
                "createdAt": "assumption 1.1.1",
                "type": "label",
                "lineCount": 231
            },
            {
                "name": "assumption:sup_null_set",
                "createdAt": "assumption 1.1.1",
                "type": "label",
                "lineCount": 235
            },
            {
                "counter": 1,
                "name": "theorem 1.1.1",
                "createdAt": "Algorithmic approach",
                "type": "theorem",
                "lineCount": 760
            },
            {
                "name": "thm:n_l=n_r",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 243
            },
            {
                "name": "40",
                "createdAt": "theorem 1.1.1",
                "type": "ref",
                "lineCount": 244
            },
            {
                "name": "41",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "ref",
                "lineCount": 254
            },
            {
                "name": "thm:n_l=n/2",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 257
            },
            {
                "name": "42",
                "createdAt": "theorem 1.1.1",
                "type": "ref",
                "lineCount": 258
            },
            {
                "name": "43",
                "createdAt": "theorem 1.1.1",
                "type": "ref",
                "lineCount": 258
            },
            {
                "name": "44",
                "createdAt": "Stochastic bounds on accuracy",
                "type": "ref",
                "lineCount": 267
            },
            {
                "counter": 1,
                "name": "Constructing a balanced k-d tree from distributed data",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 270
            },
            {
                "name": "sec:algorithm",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "label",
                "lineCount": 270
            },
            {
                "name": "45",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 272
            },
            {
                "name": "46",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 276
            },
            {
                "name": "47",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 276
            },
            {
                "name": "48",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 282
            },
            {
                "name": "49",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 282
            },
            {
                "name": "50",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 282
            },
            {
                "name": "51",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 303
            },
            {
                "name": "52",
                "createdAt": "Constructing a balanced k-d tree from distributed data",
                "type": "ref",
                "lineCount": 303
            },
            {
                "counter": 1,
                "name": "Accuracy and computational scalability",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 309
            },
            {
                "name": "sec:performance",
                "createdAt": "Accuracy and computational scalability",
                "type": "label",
                "lineCount": 309
            },
            {
                "name": "53",
                "createdAt": "Accuracy and computational scalability",
                "type": "ref",
                "lineCount": 311
            },
            {
                "counter": 1,
                "name": "Assessment of accuracy",
                "createdAt": "Accuracy and computational scalability",
                "type": "subsection",
                "lineCount": 315
            },
            {
                "name": "sec:accuracy",
                "createdAt": "Assessment of accuracy",
                "type": "label",
                "lineCount": 315
            },
            {
                "name": "fig:norm_acc",
                "createdAt": "Assessment of accuracy",
                "type": "label",
                "lineCount": 323
            },
            {
                "name": "54",
                "createdAt": "Assessment of accuracy",
                "type": "ref",
                "lineCount": 326
            },
            {
                "name": "55",
                "createdAt": "Assessment of accuracy",
                "type": "ref",
                "lineCount": 326
            },
            {
                "name": "56",
                "createdAt": "Assessment of accuracy",
                "type": "ref",
                "lineCount": 330
            },
            {
                "counter": 1,
                "name": "Computational scalability",
                "createdAt": "Accuracy and computational scalability",
                "type": "subsection",
                "lineCount": 332
            },
            {
                "name": "sec:runtime",
                "createdAt": "Computational scalability",
                "type": "label",
                "lineCount": 332
            },
            {
                "name": "fig:norm_run",
                "createdAt": "Computational scalability",
                "type": "label",
                "lineCount": 338
            },
            {
                "name": "57",
                "createdAt": "Computational scalability",
                "type": "ref",
                "lineCount": 341
            },
            {
                "counter": 1,
                "name": "Discussion",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 343
            },
            {
                "name": "sec:disc",
                "createdAt": "Discussion",
                "type": "label",
                "lineCount": 343
            },
            {
                "name": "58",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 345
            },
            {
                "name": "59",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 345
            },
            {
                "name": "60",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 345
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
                "lineCount": 350
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
                "lineCount": 357
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
                "lineCount": 362
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
                "lineCount": 368
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
                "lineCount": 374
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
                "lineCount": 381
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
                "lineCount": 387
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
                "lineCount": 391
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
                "lineCount": 396
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
                "lineCount": 401
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
                "lineCount": 406
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
                "lineCount": 412
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
                "lineCount": 419
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
                "lineCount": 425
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
                "lineCount": 431
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
                "lineCount": 438
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
                "lineCount": 445
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
                "lineCount": 452
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
                "lineCount": 459
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
                "lineCount": 464
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
                "lineCount": 471
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
                "lineCount": 477
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
                "lineCount": 483
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
                "lineCount": 490
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
                "lineCount": 497
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
                "lineCount": 504
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
                "lineCount": 511
            },
            {
                "name": "61",
                "createdAt": "Discussion",
                "type": "ref",
                "lineCount": 521
            },
            {
                "counter": 1,
                "name": "Proofs of results from section subsec:approx",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 521
            },
            {
                "name": "ap:approx_proofs",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "label",
                "lineCount": 521
            },
            {
                "name": "proof:eq:1",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "label",
                "lineCount": 528
            },
            {
                "name": "62",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "ref",
                "lineCount": 536
            },
            {
                "counter": 1,
                "name": "Proof of Lemma lemma:1d:exp",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 536
            },
            {
                "name": "63",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 538
            },
            {
                "name": "proof:eq:2",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "label",
                "lineCount": 539
            },
            {
                "name": "64",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 547
            },
            {
                "name": "65",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 547
            },
            {
                "name": "66",
                "createdAt": "Proof of Lemma lemma:1d:exp",
                "type": "ref",
                "lineCount": 566
            },
            {
                "counter": 1,
                "name": "Proof of Lemma lemma:1d:unif",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 566
            },
            {
                "name": "67",
                "createdAt": "Proof of Lemma lemma:1d:unif",
                "type": "ref",
                "lineCount": 574
            },
            {
                "counter": 1,
                "name": "Proof of Lemma lemma:pd:unif",
                "createdAt": "Proofs of results from section subsec:approx",
                "type": "subsection",
                "lineCount": 574
            },
            {
                "name": "68",
                "createdAt": "Proof of Lemma lemma:pd:unif",
                "type": "ref",
                "lineCount": 588
            },
            {
                "name": "69",
                "createdAt": "Proof of Lemma lemma:pd:unif",
                "type": "ref",
                "lineCount": 592
            },
            {
                "counter": 1,
                "name": "Proofs of results from section subsec:stoch",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 592
            },
            {
                "name": "ap:stoch_proofs",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "label",
                "lineCount": 592
            },
            {
                "name": "70",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "ref",
                "lineCount": 594
            },
            {
                "counter": 1,
                "name": "Proof of Theorem thm:n_l=n_r",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "subsection",
                "lineCount": 594
            },
            {
                "name": "pf:n_l=n_r",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 594
            },
            {
                "name": "71",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 597
            },
            {
                "name": "72",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 599
            },
            {
                "name": "main:proof:eq:a",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 622
            },
            {
                "name": "main:proof:eq:b",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 631
            },
            {
                "name": "main:proof:eq:c",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "label",
                "lineCount": 637
            },
            {
                "name": "73",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642
            },
            {
                "name": "74",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642
            },
            {
                "name": "75",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642
            },
            {
                "name": "76",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642
            },
            {
                "name": "77",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 642
            },
            {
                "name": "78",
                "createdAt": "Proof of Theorem thm:n_l=n_r",
                "type": "ref",
                "lineCount": 649
            },
            {
                "counter": 1,
                "name": "Proof of Theorem thm:n_l=n/2",
                "createdAt": "Proofs of results from section subsec:stoch",
                "type": "subsection",
                "lineCount": 649
            },
            {
                "name": "pf:n_l=n/2",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 649
            },
            {
                "name": "main:proof:eq:d",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 665
            },
            {
                "name": "79",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 670
            },
            {
                "name": "80",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 675
            },
            {
                "name": "main:proof:eq:e",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 676
            },
            {
                "name": "main:proof:eq:f",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 682
            },
            {
                "name": "81",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 687
            },
            {
                "name": "main:proof:eq:g",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 688
            },
            {
                "name": "main:proof:eq:h",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "label",
                "lineCount": 692
            },
            {
                "name": "82",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 696
            },
            {
                "name": "83",
                "createdAt": "Proof of Theorem thm:n_l=n/2",
                "type": "ref",
                "lineCount": 696
            },
            {
                "counter": 1,
                "name": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 731
            },
            {
                "name": "ap:construct",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "label",
                "lineCount": 731
            },
            {
                "counter": 1,
                "name": "Algorithmic approach",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 733
            },
            {
                "name": "sec:eff",
                "createdAt": "Algorithmic approach",
                "type": "label",
                "lineCount": 733
            },
            {
                "name": "84",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 735
            },
            {
                "name": "85",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 735
            },
            {
                "name": "86",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 735
            },
            {
                "name": "chev:thm:main",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 760
            },
            {
                "name": "87",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 768
            },
            {
                "name": "88",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 773
            },
            {
                "name": "89",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 773
            },
            {
                "name": "90",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 773
            },
            {
                "name": "91",
                "createdAt": "Algorithmic approach",
                "type": "ref",
                "lineCount": 775
            },
            {
                "counter": 1,
                "name": "Map-reduce implementation",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 777
            },
            {
                "name": "sec:MapReduce",
                "createdAt": "Map-reduce implementation",
                "type": "label",
                "lineCount": 777
            },
            {
                "name": "92",
                "createdAt": "Map-reduce implementation",
                "type": "citep",
                "lineCount": 781
            },
            {
                "name": "93",
                "createdAt": "Map-reduce implementation",
                "type": "ref",
                "lineCount": 785
            },
            {
                "counter": 1,
                "name": "Proof of Theorem chev:thm:main",
                "createdAt": "Implementing the proposed method of construction of a balanced k-d tree in practice",
                "type": "subsection",
                "lineCount": 785
            },
            {
                "name": "pf:chev:thm:main",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "label",
                "lineCount": 785
            },
            {
                "name": "94",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 787
            },
            {
                "name": "chev:lem:gen:1d",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 807
            },
            {
                "name": "chev:lem:gen:pd",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 867
            },
            {
                "name": "95",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 875
            },
            {
                "name": "96",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 920
            },
            {
                "name": "97",
                "createdAt": "Proof of Theorem chev:thm:main",
                "type": "ref",
                "lineCount": 923
            }
        ],
        "links": [
            {
                "source": "1",
                "target": "Zaharia2016",
                "type": "cite"
            },
            {
                "source": "2",
                "target": "Ailon2009",
                "type": "cite"
            },
            {
                "source": "3",
                "target": "Hu2015",
                "type": "cite"
            },
            {
                "source": "4",
                "target": "Chen2018",
                "type": "cite"
            },
            {
                "source": "5",
                "target": "Pinkman2020",
                "type": "cite"
            },
            {
                "source": "6",
                "target": "Xiao2016",
                "type": "cite"
            },
            {
                "source": "7",
                "target": "Bentley1975",
                "type": "cite"
            },
            {
                "source": "8",
                "target": "Friedman1977",
                "type": "cite"
            },
            {
                "source": "9",
                "target": "Velskii1962",
                "type": "cite"
            },
            {
                "source": "10",
                "target": "Bayer1972",
                "type": "cite"
            },
            {
                "source": "11",
                "target": "Guibas1978",
                "type": "cite"
            },
            {
                "source": "12",
                "target": "fig:kdtree",
                "type": "ref"
            },
            {
                "source": "13",
                "target": "Bentley1975",
                "type": "cite"
            },
            {
                "source": "14",
                "target": "Wald2006",
                "type": "cite"
            },
            {
                "source": "15",
                "target": "Dean2008",
                "type": "cite"
            },
            {
                "source": "16",
                "target": "Bleloch2018",
                "type": "cite"
            },
            {
                "source": "17",
                "target": "Wehr2018",
                "type": "cite"
            },
            {
                "source": "18",
                "target": "Brown2015b",
                "type": "cite"
            },
            {
                "source": "19",
                "target": "Cao2020",
                "type": "cite"
            },
            {
                "source": "20",
                "target": "Wald2006",
                "type": "cite"
            },
            {
                "source": "21",
                "target": "Procopiuc2003",
                "type": "cite"
            },
            {
                "source": "22",
                "target": "Brown2015",
                "type": "cite"
            },
            {
                "source": "23",
                "target": "Hunt2006",
                "type": "cite"
            },
            {
                "source": "24",
                "target": "Shevtsov2007",
                "type": "cite"
            },
            {
                "source": "25",
                "target": "Zhou2008",
                "type": "cite"
            },
            {
                "source": "26",
                "target": "Soupikov2008",
                "type": "cite"
            },
            {
                "source": "27",
                "target": "Choi2010",
                "type": "cite"
            },
            {
                "source": "28",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "29",
                "target": "sec:main",
                "type": "ref"
            },
            {
                "source": "30",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "31",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "32",
                "target": "sec:disc",
                "type": "ref"
            },
            {
                "source": "33",
                "target": "Chakravorty2021",
                "type": "cite"
            },
            {
                "source": "34",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "35",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "36",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "37",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "38",
                "target": "ap:approx_proofs",
                "type": "ref"
            },
            {
                "source": "39",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "40",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "41",
                "target": "ap:stoch_proofs",
                "type": "ref"
            },
            {
                "source": "42",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "43",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "44",
                "target": "ap:stoch_proofs",
                "type": "ref"
            },
            {
                "source": "45",
                "target": "sec:intution",
                "type": "ref"
            },
            {
                "source": "46",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "47",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "48",
                "target": "thm:n_l=n/2",
                "type": "ref"
            },
            {
                "source": "49",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "50",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "51",
                "target": "assumption:positive_density",
                "type": "ref"
            },
            {
                "source": "52",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "53",
                "target": "ap:construct",
                "type": "ref"
            },
            {
                "source": "54",
                "target": "fig:norm_acc",
                "type": "ref"
            },
            {
                "source": "55",
                "target": "sec:eff",
                "type": "ref"
            },
            {
                "source": "56",
                "target": "fig:norm_acc",
                "type": "ref"
            },
            {
                "source": "57",
                "target": "fig:norm_run",
                "type": "ref"
            },
            {
                "source": "58",
                "target": "sec:main",
                "type": "ref"
            },
            {
                "source": "59",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "60",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "61",
                "target": "subsec:approx",
                "type": "ref"
            },
            {
                "source": "62",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "63",
                "target": "proof:eq:1",
                "type": "ref"
            },
            {
                "source": "64",
                "target": "proof:eq:2",
                "type": "ref"
            },
            {
                "source": "65",
                "target": "proof:eq:1",
                "type": "ref"
            },
            {
                "source": "66",
                "target": "lemma:1d:unif",
                "type": "ref"
            },
            {
                "source": "67",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "68",
                "target": "lemma:1d:exp",
                "type": "ref"
            },
            {
                "source": "69",
                "target": "subsec:stoch",
                "type": "ref"
            },
            {
                "source": "70",
                "target": "thm:n_l=n_r",
                "type": "ref"
            },
            {
                "source": "71",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "72",
                "target": "lemma:pd:unif",
                "type": "ref"
            },
            {
                "source": "73",
                "target": "main:proof:eq:c",
                "type": "ref"
            },
            {
                "source": "74",
                "target": "main:proof:eq:a",
                "type": "ref"
            },
            {
                "source": "75",
                "target": "main:proof:eq:b",
                "type": "ref"
            },
            {
                "source": "76",
                "target": "main:proof:eq:a",
                "type": "ref"
            },
            {
                "source": "77",
                "target": "main:proof:eq:b",
                "type": "ref"
            },
            {
                "source": "78",
                "target": "thm:n_l=n/2",
                "type": "ref"
            },
            {
                "source": "79",
                "target": "assumption:sup_null_set",
                "type": "ref"
            },
            {
                "source": "80",
                "target": "main:proof:eq:d",
                "type": "ref"
            },
            {
                "source": "81",
                "target": "thm:n_l=n_r",
                "type": "ref"
            },
            {
                "source": "82",
                "target": "main:proof:eq:e",
                "type": "ref"
            },
            {
                "source": "83",
                "target": "main:proof:eq:h",
                "type": "ref"
            },
            {
                "source": "84",
                "target": "sec:algorithm",
                "type": "ref"
            },
            {
                "source": "85",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "86",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "87",
                "target": "pf:chev:thm:main",
                "type": "ref"
            },
            {
                "source": "88",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "89",
                "target": "kd:eq:a",
                "type": "ref"
            },
            {
                "source": "90",
                "target": "kd:eq:b",
                "type": "ref"
            },
            {
                "source": "91",
                "target": "sec:performance",
                "type": "ref"
            },
            {
                "source": "92",
                "target": "Zaharia2016",
                "type": "cite"
            },
            {
                "source": "93",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "94",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "95",
                "target": "chev:lem:gen:1d",
                "type": "ref"
            },
            {
                "source": "96",
                "target": "chev:thm:main",
                "type": "ref"
            },
            {
                "source": "97",
                "target": "chev:lem:gen:pd",
                "type": "ref"
            }
        ]
    };
    nodes = data.nodes;
    links = data.links;
    lineGraph(nodes, links);
}


// inclusive min and exclusive max 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function lineGraph(nodes, linksw) {

    var allNodes = [
        { name: "node1", lineCount: 55, type: "section" },
        { name: "citat af bob", lineCount: 100, type: "label" },
        { name: "node3", lineCount: 150, type: "section" },
        { name: "node4", lineCount: 300, type: "label" },
        { name: "node5", lineCount: 500, type: "section" },
        { name: "node6", lineCount: 520, type: "label" },

        { name: "node7", lineCount: 250, type: "label" },
        { name: "node8", lineCount: 280, type: "label" },
        { name: "node9", lineCount: 400, type: "label" },

        { name: "refNode1", lineCount: 500, type: "refNode" },
        { name: "refNode2", lineCount: 70, type: "refNode" },
        { name: "refNode3", lineCount: 460, type: "refNode" },

    ];
   

    var links = [
        { source: "citat af bob", target: "node4", type: "" },
        { source: "node4", target: "node6", type: "" },
        { source: "node6", target: "citat af bob", type: "" },

        { source: "refNode1", target: "node7", type: "" },
        { source: "refNode2", target: "node7", type: "" },
        { source: "refNode3", target: "node7", type: "" }
    ];

    allNodes = nodes;
    links = linksw;
    //console.log("allNodes: " + allNodes[0]);


    function compare(a, b) {
        if (a.lineCount < b.lineCount) {
            return -1;
        }
        if (a.lineCount > b.lineCount) {
            return 1;
        }
        return 0;
    }


    allNodes.sort(compare);

    // create dict of nodes for lookup later
    nodeDict = {}
    allNodes.forEach(node => {
        nodeDict[node.name] = node;
        nodeDict[node.name].refSize = 1;
        nodeDict[node.name].y = 1;
    })

    
    // for each ref make target Bigger
    links.forEach(link => {
        console.log(link.target);
        nodeDict[link.target].refSize += 2;

    });

    var sectionNodes = [];
    var normalNodes = [];
    var paperNodes = [];

    // filter for sections and other nodes

    allNodes.forEach(node => {
       
        if (node.type == "section") {
            console.log("section " + node.name);
            sectionNodes.push(node);
        }
        else if (node.type == "paper") {
            paperNodes.push(node);
        }
        else {
            normalNodes.push(node);
        }
    });

    console.log(allNodes[0].lineCount)

    // TODO figure out what width and height
    const width = 10000//window.innerWidth;
    const height = 10000;
    const xaxisHeight = 100;
    var nodeYIndex = 10;
    const nodeColor = "gray"

    // select the svg for creating the graph
    // and configure the width and height
    var svg = d3.select("#d3graph")
                .append("svg")
                .attr("width", width)
                .attr("height", height);


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

    // link arrow
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
    var xaxis = svg.append('g')
        .append("line")
        .attr('stroke-width', 2)
        .attr('stroke', 'black')
        .attr("x1", 50)
        .attr("y1", xaxisHeight)
        .attr("x2", width - 50)
        .attr("y2", xaxisHeight)
        .attr("marker-end", "url(#triangle)");


    var svgNodes = svg
        .selectAll('circle')
        .data(normalNodes.concat(paperNodes))
        .enter().append('g')

    var nodeCircles = svgNodes.append('circle')
        .attr('r', getRadiusNode)
        .attr('fill', "gray")
        .attr('cx', getlineCount)
        .attr('cy', getRandomNodeY);

    var textElements = svgNodes
        .append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr("dx", node => node.lineCount + 10)
        .attr("dy", node => nodeDict[node.name].y)
        .attr("visibility", "hidden");

    

    nodeCircles.on("click", function (selected) {

        console.log(selected);

        textElements.attr("visibility", function (node) { return showName(node, selected) });
        nodeCircles.attr("fill", function (node) { return selectNode(node, selected) });
    });

    

    console.log(sectionNodes)

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
        .attr("x1", getlineCount)
        .attr("y1", xaxisHeight - 10)
        .attr("x2", getlineCount)
        .attr("y2", height)

    var textSection = svgSection
        .append('text')
        .text(node => node.name)
        .attr('font-size', 15)
        .attr("dx", node => node.lineCount)
        .attr("dy", xaxisHeight)
        .attr("visibility", "hidden");

    svgSectionLine.on("click", function (selected) {

        console.log(selected);

        textSection.attr("visibility", function (node) { return showName(node, selected) });
        
    });



    var links = svg
        .selectAll('mylinks')
        .data(links)
        .enter()
        .append('path')
        .attr('d', createArc)
        .attr("stroke", getLinkColour)
        .attr('stroke-width', 2)
        .style("fill", "none")
        .attr("marker-end", "url(#linkArrow)");

    function getRadiusNode(node) {
        if (node.type == "refNode") {
            return 3;
        }
        return node.refSize +5;
    }

    function getlineCount(node) {
        return node.lineCount;

    }

    function getLinkColour(link) {
        if (link.type == "ref") {
            return "blue";
        } else {
            return "orange";
        }
    }

    function randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    

    function createArc(d) {

        start = nodeDict[d.source].lineCount    // X position of start node on the X axis
        end = nodeDict[d.target].lineCount      // X position of end node

        startY = nodeDict[d.source].y
        endY = nodeDict[d.target].y
        return ['M', start, startY,    // the arc starts at the coordinate x=start, y=height-10 (where the starting node is)
            'A',                            // This means we're gonna build an elliptical arc 
            (start - end) , ',',         // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance 
            (start - end) , 0, 0, ',',
            start < end ? 1 : 1, end, ',', endY] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
            .join(' ');

    }

    function getRandomNodeY(node) {

        //let randomInt = getRandomInt(0, 200);
        nodeYIndex += 10;

        nodeDict[node.name].y = xaxisHeight + nodeYIndex;

        return xaxisHeight + nodeYIndex;
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

    
   


}




// uses d3 v4 
function funGraph(nodes, links) {

    const width = 500;
    const height = 400;

    var svg = d3.select('#d3graph').append('svg')
        .attr('width', width)
        .attr('height', height);

    // simulation setup with all forces
    var linkForce = d3
        .forceLink()
        .id(function (link) { return link.name })
        .strength(function (link) { return 0.5 })

    var simulation = d3.forceSimulation()
        .force('link', linkForce)
        .force('charge', d3.forceManyBody().strength(-30))
        .force('center', d3.forceCenter(width / 2, height / 2));

    console.log("Gravity: " + (width / 2)+  " "+ (height / 2));



    // method for drag and drop
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
        .attr('r', 5)
        .attr('fill', "gray")
        .call(dragDrop)
        .on('click', selectNode);

    var textElements = nodeElements.append('g')
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


    function getNeighbors(node) {
        return links.reduce(function (neighbors, link) {
            if (link.target.name === node.name) {
                neighbors.push(link.source.name)
            } else if (link.source.name === node.name) {
                neighbors.push(link.target.name)
            }
            return neighbors
        },
            [node.id]
        )
    }

    function isNeighborLink(node, link) {
        return link.target.name === node.name || link.source.name === node.name
    }

    function selectNode(selectedNode) {
        var neighbors = getNeighbors(selectedNode)

        // we modify the styles to highlight selected nodes
        nodeElements.attr('fill', function (node) { return getNodeColor(node, neighbors) })
        textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
        linkElements.attr('stroke', function (link) { return getLinkColor(selectedNode, link) })
    }

    function getNodeColor(node, neighbors) {
        if (Array.isArray(neighbors) && neighbors.indexOf(node.name) > -1) {
            return 'green';
        }

        return 'gray';
    }


    function getLinkColor(node, link) {
        return isNeighborLink(node, link) ? 'green' : '#E5E5E5'
    }

    function getTextColor(node, neighbors) {
        return Array.isArray(neighbors) && neighbors.indexOf(node.name) > -1 ? 'green' : 'black'
    }



 

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
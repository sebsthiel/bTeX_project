

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
                "name": "INTRODUCTION",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 131,
                "lineCountEnd": 212
            },
            {
                "name": "1",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 137,
                "lineCountEnd": null
            },
            {
                "name": "2",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 138,
                "lineCountEnd": null
            },
            {
                "name": "3",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 144,
                "lineCountEnd": null
            },
            {
                "name": "4",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 145,
                "lineCountEnd": null
            },
            {
                "name": "5",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 147,
                "lineCountEnd": null
            },
            {
                "name": "6",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 147,
                "lineCountEnd": null
            },
            {
                "name": "7",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 148,
                "lineCountEnd": null
            },
            {
                "name": "8",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 148,
                "lineCountEnd": null
            },
            {
                "name": "9",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 151,
                "lineCountEnd": null
            },
            {
                "name": "10",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 152,
                "lineCountEnd": null
            },
            {
                "name": "11",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 153,
                "lineCountEnd": null
            },
            {
                "name": "12",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 166,
                "lineCountEnd": null
            },
            {
                "name": "13",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "14",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "15",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "16",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 172,
                "lineCountEnd": null
            },
            {
                "name": "17",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 172,
                "lineCountEnd": null
            },
            {
                "name": "18",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 186,
                "lineCountEnd": null
            },
            {
                "name": "19",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 187,
                "lineCountEnd": null
            },
            {
                "name": "20",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 192,
                "lineCountEnd": null
            },
            {
                "name": "21",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 194,
                "lineCountEnd": null
            },
            {
                "name": "22",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 196,
                "lineCountEnd": null
            },
            {
                "name": "23",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 197,
                "lineCountEnd": null
            },
            {
                "name": "24",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "25",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "26",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "27",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "28",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "29",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "30",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "31",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "32",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "33",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "34",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "35",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 202,
                "lineCountEnd": null
            },
            {
                "name": "36",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 202,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Preliminary material",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 212,
                "lineCountEnd": 392
            },
            {
                "name": "sec:pre",
                "createdAt": "Preliminary material",
                "type": "label",
                "lineCount": 213,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Signed graphs and signed Laplacians",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 226,
                "lineCountEnd": 246
            },
            {
                "name": "eq:Laplacian1",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "label",
                "lineCount": 234,
                "lineCountEnd": null
            },
            {
                "name": "37",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "citeNode",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "name": "38",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "citeNode",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "name": "39",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "citeNode",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Matrix theory",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 246,
                "lineCountEnd": 278
            },
            {
                "name": "40",
                "createdAt": "Matrix theory",
                "type": "citeNode",
                "lineCount": 269,
                "lineCountEnd": null
            },
            {
                "name": "41",
                "createdAt": "Matrix theory",
                "type": "citeNode",
                "lineCount": 272,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "Perron-Frobenius property and eventual positivity",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 278,
                "lineCountEnd": 323
            },
            {
                "counter": 1,
                "name": "definition 2.3.1",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "definition",
                "lineCount": 280,
                "lineCountEnd": 284
            },
            {
                "name": "def:pf",
                "createdAt": "definition 2.3.1",
                "type": "label",
                "lineCount": 280,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "definition 2.3.2",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "definition",
                "lineCount": 286,
                "lineCountEnd": 288
            },
            {
                "name": "42",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "citeNode",
                "lineCount": 289,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "theorem 2.3.1",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "theorem",
                "lineCount": 291,
                "lineCountEnd": 300
            },
            {
                "name": "thm:PFforEvPos",
                "createdAt": "theorem 2.3.1",
                "type": "label",
                "lineCount": 292,
                "lineCountEnd": null
            },
            {
                "name": "43",
                "createdAt": "theorem 2.3.1",
                "type": "citeNode",
                "lineCount": 293,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "lemma 2.3.1",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "lemma",
                "lineCount": 302,
                "lineCountEnd": 307
            },
            {
                "name": "lemma:no_two_pos-eig",
                "createdAt": "lemma 2.3.1",
                "type": "label",
                "lineCount": 303,
                "lineCountEnd": null
            },
            {
                "name": "44",
                "createdAt": "lemma 2.3.1",
                "type": "citeNode",
                "lineCount": 304,
                "lineCountEnd": null
            },
            {
                "name": "45",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "citeNode",
                "lineCount": 309,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "definition 2.3.3",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "definition",
                "lineCount": 310,
                "lineCountEnd": 312
            },
            {
                "name": "def:ev_exp_pos",
                "createdAt": "definition 2.3.3",
                "type": "label",
                "lineCount": 310,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "lemma 2.3.2",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "lemma",
                "lineCount": 314,
                "lineCountEnd": 318
            },
            {
                "name": "lemma:ev_exp_pos",
                "createdAt": "lemma 2.3.2",
                "type": "label",
                "lineCount": 315,
                "lineCountEnd": null
            },
            {
                "name": "46",
                "createdAt": "lemma 2.3.2",
                "type": "citeNode",
                "lineCount": 316,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "Eventually stochastic matrices",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 323,
                "lineCountEnd": 358
            },
            {
                "counter": 4,
                "name": "definition 2.4.4",
                "createdAt": "Eventually stochastic matrices",
                "type": "definition",
                "lineCount": 327,
                "lineCountEnd": 330
            },
            {
                "name": "47",
                "createdAt": "Eventually stochastic matrices",
                "type": "citeNode",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "48",
                "createdAt": "Eventually stochastic matrices",
                "type": "refNode",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "49",
                "createdAt": "Eventually stochastic matrices",
                "type": "refNode",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "lemma 2.4.3",
                "createdAt": "Eventually stochastic matrices",
                "type": "lemma",
                "lineCount": 335,
                "lineCountEnd": 338
            },
            {
                "name": "lemma:ev_stoch",
                "createdAt": "lemma 2.4.3",
                "type": "label",
                "lineCount": 336,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "Signed Perron-Frobenius property",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 358,
                "lineCountEnd": 392
            },
            {
                "counter": 5,
                "name": "definition 2.5.5",
                "createdAt": "Signed Perron-Frobenius property",
                "type": "definition",
                "lineCount": 360,
                "lineCountEnd": 362
            },
            {
                "name": "def:spf",
                "createdAt": "definition 2.5.5",
                "type": "label",
                "lineCount": 360,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "theorem 2.5.2",
                "createdAt": "Signed Perron-Frobenius property",
                "type": "theorem",
                "lineCount": 366,
                "lineCountEnd": 372
            },
            {
                "name": "thm:spf",
                "createdAt": "theorem 2.5.2",
                "type": "label",
                "lineCount": 366,
                "lineCountEnd": null
            },
            {
                "name": "50",
                "createdAt": "theorem 2.5.2",
                "type": "citeNode",
                "lineCount": 366,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "definition 2.5.6",
                "createdAt": "Signed Perron-Frobenius property",
                "type": "definition",
                "lineCount": 378,
                "lineCountEnd": 386
            },
            {
                "counter": 3,
                "name": "Consensus on time-invariant signed digraphs",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 392,
                "lineCountEnd": 870
            },
            {
                "name": "sec:TI",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "label",
                "lineCount": 393,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Problem formulation",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "subsection",
                "lineCount": 395,
                "lineCountEnd": 443
            },
            {
                "name": "eq:ode:laplacian",
                "createdAt": "Problem formulation",
                "type": "label",
                "lineCount": 402,
                "lineCountEnd": null
            },
            {
                "name": "eq:discrete_sys",
                "createdAt": "Problem formulation",
                "type": "label",
                "lineCount": 407,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "definition 3.1.7",
                "createdAt": "Problem formulation",
                "type": "definition",
                "lineCount": 411,
                "lineCountEnd": 414
            },
            {
                "name": "def:cons",
                "createdAt": "definition 3.1.7",
                "type": "label",
                "lineCount": 412,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "proposition 3.1.1",
                "createdAt": "Problem formulation",
                "type": "proposition",
                "lineCount": 422,
                "lineCountEnd": 432
            },
            {
                "name": "prop:signed-prop",
                "createdAt": "proposition 3.1.1",
                "type": "label",
                "lineCount": 423,
                "lineCountEnd": null
            },
            {
                "name": "51",
                "createdAt": "Problem formulation",
                "type": "refNode",
                "lineCount": 433,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Continuous-time case",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "subsection",
                "lineCount": 443,
                "lineCountEnd": 706
            },
            {
                "name": "sec:continuous",
                "createdAt": "Continuous-time case",
                "type": "label",
                "lineCount": 444,
                "lineCountEnd": null
            },
            {
                "name": "52",
                "createdAt": "Continuous-time case",
                "type": "refNode",
                "lineCount": 446,
                "lineCountEnd": null
            },
            {
                "name": "53",
                "createdAt": "Continuous-time case",
                "type": "refNode",
                "lineCount": 446,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "example 3.2.1",
                "createdAt": "Continuous-time case",
                "type": "example",
                "lineCount": 448,
                "lineCountEnd": 462
            },
            {
                "name": "ex:corank2",
                "createdAt": "example 3.2.1",
                "type": "label",
                "lineCount": 449,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "lemma 3.2.4",
                "createdAt": "Continuous-time case",
                "type": "lemma",
                "lineCount": 467,
                "lineCountEnd": 469
            },
            {
                "name": "le:nec",
                "createdAt": "lemma 3.2.4",
                "type": "label",
                "lineCount": 467,
                "lineCountEnd": null
            },
            {
                "name": "54",
                "createdAt": "Continuous-time case",
                "type": "refNode",
                "lineCount": 470,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Signed undirected graph case",
                "createdAt": "Continuous-time case",
                "type": "subsubsection",
                "lineCount": 489,
                "lineCountEnd": 520
            },
            {
                "name": "55",
                "createdAt": "Signed undirected graph case",
                "type": "citeNode",
                "lineCount": 494,
                "lineCountEnd": null
            },
            {
                "name": "56",
                "createdAt": "Signed undirected graph case",
                "type": "citeNode",
                "lineCount": 495,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "theorem 3.2.1.3",
                "createdAt": "Signed undirected graph case",
                "type": "theorem",
                "lineCount": 498,
                "lineCountEnd": 501
            },
            {
                "name": "thm:signed-undirected-cont",
                "createdAt": "theorem 3.2.1.3",
                "type": "label",
                "lineCount": 499,
                "lineCountEnd": null
            },
            {
                "name": "57",
                "createdAt": "Signed undirected graph case",
                "type": "citeNode",
                "lineCount": 511,
                "lineCountEnd": null
            },
            {
                "name": "58",
                "createdAt": "Signed undirected graph case",
                "type": "citeNode",
                "lineCount": 511,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Signed digraph case",
                "createdAt": "Continuous-time case",
                "type": "subsubsection",
                "lineCount": 520,
                "lineCountEnd": null
            },
            {
                "name": "sec:signed_digraph",
                "createdAt": "Signed digraph case",
                "type": "label",
                "lineCount": 521,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "theorem 3.2.2.4",
                "createdAt": "Signed digraph case",
                "type": "theorem",
                "lineCount": 539,
                "lineCountEnd": 549
            },
            {
                "name": "thm:signed-digraph1",
                "createdAt": "theorem 3.2.2.4",
                "type": "label",
                "lineCount": 540,
                "lineCountEnd": null
            },
            {
                "name": "59",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 550,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "remark 3.2.2.1",
                "createdAt": "Signed digraph case",
                "type": "remark",
                "lineCount": 553,
                "lineCountEnd": 556
            },
            {
                "name": "60",
                "createdAt": "remark 3.2.2.1",
                "type": "refNode",
                "lineCount": 554,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "example 3.2.2.2",
                "createdAt": "Signed digraph case",
                "type": "example",
                "lineCount": 558,
                "lineCountEnd": 570
            },
            {
                "name": "example-PF-notPF_stable",
                "createdAt": "example 3.2.2.2",
                "type": "label",
                "lineCount": 559,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "example 3.2.2.3",
                "createdAt": "Signed digraph case",
                "type": "example",
                "lineCount": 572,
                "lineCountEnd": 583
            },
            {
                "name": "example-PF-notPF_unstable",
                "createdAt": "example 3.2.2.3",
                "type": "label",
                "lineCount": 573,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "example 3.2.2.4",
                "createdAt": "Signed digraph case",
                "type": "example",
                "lineCount": 587,
                "lineCountEnd": 600
            },
            {
                "name": "example4",
                "createdAt": "example 3.2.2.4",
                "type": "label",
                "lineCount": 588,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "corollary 3.2.2.1",
                "createdAt": "Signed digraph case",
                "type": "corollary",
                "lineCount": 604,
                "lineCountEnd": 617
            },
            {
                "name": "cor:weight-bal1",
                "createdAt": "corollary 3.2.2.1",
                "type": "label",
                "lineCount": 605,
                "lineCountEnd": null
            },
            {
                "name": "61",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 618,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "remark 3.2.2.2",
                "createdAt": "Signed digraph case",
                "type": "remark",
                "lineCount": 622,
                "lineCountEnd": 626
            },
            {
                "name": "62",
                "createdAt": "remark 3.2.2.2",
                "type": "citeNode",
                "lineCount": 623,
                "lineCountEnd": null
            },
            {
                "name": "63",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 623,
                "lineCountEnd": null
            },
            {
                "name": "64",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 624,
                "lineCountEnd": null
            },
            {
                "name": "65",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "name": "66",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "name": "67",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "corollary 3.2.2.2",
                "createdAt": "Signed digraph case",
                "type": "corollary",
                "lineCount": 631,
                "lineCountEnd": 633
            },
            {
                "name": "lem:psd-EP",
                "createdAt": "corollary 3.2.2.2",
                "type": "label",
                "lineCount": 631,
                "lineCountEnd": null
            },
            {
                "name": "68",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 634,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "example 3.2.2.5",
                "createdAt": "Signed digraph case",
                "type": "example",
                "lineCount": 638,
                "lineCountEnd": 650
            },
            {
                "name": "example:Ls_nonpsd",
                "createdAt": "example 3.2.2.5",
                "type": "label",
                "lineCount": 638,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "example 3.2.2.6",
                "createdAt": "Signed digraph case",
                "type": "example",
                "lineCount": 652,
                "lineCountEnd": 664
            },
            {
                "name": "example:Ls_nonpsd_posdiag",
                "createdAt": "example 3.2.2.6",
                "type": "label",
                "lineCount": 652,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "example 3.2.2.7",
                "createdAt": "Signed digraph case",
                "type": "example",
                "lineCount": 667,
                "lineCountEnd": 677
            },
            {
                "name": "ex:norm-not-nec",
                "createdAt": "example 3.2.2.7",
                "type": "label",
                "lineCount": 667,
                "lineCountEnd": null
            },
            {
                "name": "69",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 681,
                "lineCountEnd": null
            },
            {
                "name": "70",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 681,
                "lineCountEnd": null
            },
            {
                "name": "71",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 682,
                "lineCountEnd": null
            },
            {
                "name": "72",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 682,
                "lineCountEnd": null
            },
            {
                "name": "73",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 689,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "lemma 3.2.2.5",
                "createdAt": "Signed digraph case",
                "type": "lemma",
                "lineCount": 693,
                "lineCountEnd": 699
            },
            {
                "name": "lemma:irreducible",
                "createdAt": "lemma 3.2.2.5",
                "type": "label",
                "lineCount": 693,
                "lineCountEnd": null
            },
            {
                "name": "74",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 700,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "Discrete-time protocol",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "subsection",
                "lineCount": 706,
                "lineCountEnd": null
            },
            {
                "name": "sec:discrete",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "label",
                "lineCount": 707,
                "lineCountEnd": null
            },
            {
                "counter": 8,
                "name": "example 3.8",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "example",
                "lineCount": 712,
                "lineCountEnd": 717
            },
            {
                "name": "ex:Wcorank2",
                "createdAt": "example 3.8",
                "type": "label",
                "lineCount": 713,
                "lineCountEnd": null
            },
            {
                "name": "75",
                "createdAt": "example 3.8",
                "type": "refNode",
                "lineCount": 714,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "lemma 3.6",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "lemma",
                "lineCount": 725,
                "lineCountEnd": 727
            },
            {
                "name": "le:nec:DT",
                "createdAt": "lemma 3.6",
                "type": "label",
                "lineCount": 725,
                "lineCountEnd": null
            },
            {
                "name": "76",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "refNode",
                "lineCount": 728,
                "lineCountEnd": null
            },
            {
                "counter": 9,
                "name": "example 3.9",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "example",
                "lineCount": 733,
                "lineCountEnd": 739
            },
            {
                "name": "W:corank-nostrictdom",
                "createdAt": "example 3.9",
                "type": "label",
                "lineCount": 734,
                "lineCountEnd": null
            },
            {
                "name": "77",
                "createdAt": "example 3.9",
                "type": "refNode",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "78",
                "createdAt": "example 3.9",
                "type": "refNode",
                "lineCount": 737,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Signed undirected graph case :id: 79",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "subsubsection",
                "lineCount": 756,
                "lineCountEnd": 775
            },
            {
                "name": "80",
                "createdAt": "Signed undirected graph case :id: 79",
                "type": "refNode",
                "lineCount": 758,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "theorem 3.1.5",
                "createdAt": "Signed undirected graph case :id: 79",
                "type": "theorem",
                "lineCount": 759,
                "lineCountEnd": 765
            },
            {
                "name": "thm:symm-sign",
                "createdAt": "theorem 3.1.5",
                "type": "label",
                "lineCount": 760,
                "lineCountEnd": null
            },
            {
                "name": "81",
                "createdAt": "Signed undirected graph case :id: 79",
                "type": "refNode",
                "lineCount": 766,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Signed digraph case :id: 82",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "subsubsection",
                "lineCount": 775,
                "lineCountEnd": 870
            },
            {
                "counter": 6,
                "name": "theorem 3.2.6",
                "createdAt": "Signed digraph case :id: 82",
                "type": "theorem",
                "lineCount": 781,
                "lineCountEnd": 787
            },
            {
                "name": "eq:ev-stoch-matrix",
                "createdAt": "theorem 3.2.6",
                "type": "label",
                "lineCount": 782,
                "lineCountEnd": null
            },
            {
                "name": "83",
                "createdAt": "Signed digraph case :id: 82",
                "type": "refNode",
                "lineCount": 788,
                "lineCountEnd": null
            },
            {
                "name": "84",
                "createdAt": "Signed digraph case :id: 82",
                "type": "refNode",
                "lineCount": 792,
                "lineCountEnd": null
            },
            {
                "counter": 10,
                "name": "example 3.2.10",
                "createdAt": "Signed digraph case :id: 82",
                "type": "example",
                "lineCount": 793,
                "lineCountEnd": 806
            },
            {
                "counter": 11,
                "name": "example 3.2.11",
                "createdAt": "Signed digraph case :id: 82",
                "type": "example",
                "lineCount": 814,
                "lineCountEnd": 835
            },
            {
                "counter": 3,
                "name": "corollary 3.2.3",
                "createdAt": "Signed digraph case :id: 82",
                "type": "corollary",
                "lineCount": 840,
                "lineCountEnd": 854
            },
            {
                "name": "cor:weight-bal-DT",
                "createdAt": "corollary 3.2.3",
                "type": "label",
                "lineCount": 841,
                "lineCountEnd": null
            },
            {
                "name": "85",
                "createdAt": "Signed digraph case :id: 82",
                "type": "refNode",
                "lineCount": 855,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "lemma 3.2.7",
                "createdAt": "Signed digraph case :id: 82",
                "type": "lemma",
                "lineCount": 860,
                "lineCountEnd": 864
            },
            {
                "name": "lem:irreduc_W_suff",
                "createdAt": "lemma 3.2.7",
                "type": "label",
                "lineCount": 861,
                "lineCountEnd": null
            },
            {
                "name": "86",
                "createdAt": "Signed digraph case :id: 82",
                "type": "refNode",
                "lineCount": 865,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "Consensus on time-varying signed digraphs",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 870,
                "lineCountEnd": 1121
            },
            {
                "name": "sec:TV",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "label",
                "lineCount": 871,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Problem formulation :id: 87",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 873,
                "lineCountEnd": 916
            },
            {
                "name": "eq:form_c",
                "createdAt": "Problem formulation :id: 87",
                "type": "label",
                "lineCount": 889,
                "lineCountEnd": null
            },
            {
                "name": "88",
                "createdAt": "Problem formulation :id: 87",
                "type": "citeNode",
                "lineCount": 892,
                "lineCountEnd": null
            },
            {
                "name": "eq:form_d",
                "createdAt": "Problem formulation :id: 87",
                "type": "label",
                "lineCount": 897,
                "lineCountEnd": null
            },
            {
                "name": "89",
                "createdAt": "Problem formulation :id: 87",
                "type": "refNode",
                "lineCount": 905,
                "lineCountEnd": null
            },
            {
                "counter": 8,
                "name": "definition 4.1.8",
                "createdAt": "Problem formulation :id: 87",
                "type": "definition",
                "lineCount": 907,
                "lineCountEnd": 909
            },
            {
                "counter": 2,
                "name": "Continuous-time protocol",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 916,
                "lineCountEnd": 1041
            },
            {
                "name": "sec:CT",
                "createdAt": "Continuous-time protocol",
                "type": "label",
                "lineCount": 916,
                "lineCountEnd": null
            },
            {
                "name": "90",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 918,
                "lineCountEnd": null
            },
            {
                "counter": 8,
                "name": "lemma 4.2.8",
                "createdAt": "Continuous-time protocol",
                "type": "lemma",
                "lineCount": 920,
                "lineCountEnd": 922
            },
            {
                "name": "tem:nec",
                "createdAt": "lemma 4.2.8",
                "type": "label",
                "lineCount": 920,
                "lineCountEnd": null
            },
            {
                "name": "91",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "name": "92",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "name": "93",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "corollary 4.2.4",
                "createdAt": "Continuous-time protocol",
                "type": "corollary",
                "lineCount": 927,
                "lineCountEnd": 929
            },
            {
                "name": "94",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 936,
                "lineCountEnd": null
            },
            {
                "name": "fig:1",
                "createdAt": "Continuous-time protocol",
                "type": "label",
                "lineCount": 937,
                "lineCountEnd": null
            },
            {
                "counter": 12,
                "name": "example 4.2.12",
                "createdAt": "Continuous-time protocol",
                "type": "example",
                "lineCount": 940,
                "lineCountEnd": 973
            },
            {
                "name": "ex:ce1",
                "createdAt": "example 4.2.12",
                "type": "label",
                "lineCount": 940,
                "lineCountEnd": null
            },
            {
                "name": "95",
                "createdAt": "example 4.2.12",
                "type": "refNode",
                "lineCount": 958,
                "lineCountEnd": null
            },
            {
                "name": "96",
                "createdAt": "example 4.2.12",
                "type": "refNode",
                "lineCount": 963,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "remark 4.2.3",
                "createdAt": "Continuous-time protocol",
                "type": "remark",
                "lineCount": 979,
                "lineCountEnd": 982
            },
            {
                "name": "rem:normal",
                "createdAt": "remark 4.2.3",
                "type": "label",
                "lineCount": 980,
                "lineCountEnd": null
            },
            {
                "name": "97",
                "createdAt": "remark 4.2.3",
                "type": "citeNode",
                "lineCount": 981,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "theorem 4.2.7",
                "createdAt": "Continuous-time protocol",
                "type": "theorem",
                "lineCount": 985,
                "lineCountEnd": 987
            },
            {
                "name": "th:form_c",
                "createdAt": "theorem 4.2.7",
                "type": "label",
                "lineCount": 985,
                "lineCountEnd": null
            },
            {
                "name": "98",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 988,
                "lineCountEnd": null
            },
            {
                "counter": 4,
                "name": "remark 4.2.4",
                "createdAt": "Continuous-time protocol",
                "type": "remark",
                "lineCount": 991,
                "lineCountEnd": 994
            },
            {
                "name": "re:cons",
                "createdAt": "remark 4.2.4",
                "type": "label",
                "lineCount": 991,
                "lineCountEnd": null
            },
            {
                "name": "99",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "name": "100",
                "createdAt": "Continuous-time protocol",
                "type": "citeNode",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "name": "101",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "counter": 13,
                "name": "example 4.2.13",
                "createdAt": "Continuous-time protocol",
                "type": "example",
                "lineCount": 1000,
                "lineCountEnd": 1036
            },
            {
                "name": "102",
                "createdAt": "example 4.2.13",
                "type": "refNode",
                "lineCount": 1001,
                "lineCountEnd": null
            },
            {
                "name": "eq:limit",
                "createdAt": "example 4.2.13",
                "type": "label",
                "lineCount": 1018,
                "lineCountEnd": null
            },
            {
                "counter": 3,
                "name": "Discrete-time protocol :id: 103",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 1041,
                "lineCountEnd": 1121
            },
            {
                "counter": 9,
                "name": "lemma 4.3.9",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "lemma",
                "lineCount": 1046,
                "lineCountEnd": 1048
            },
            {
                "name": "lem:nec:DT",
                "createdAt": "lemma 4.3.9",
                "type": "label",
                "lineCount": 1046,
                "lineCountEnd": null
            },
            {
                "name": "104",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "refNode",
                "lineCount": 1049,
                "lineCountEnd": null
            },
            {
                "name": "105",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "refNode",
                "lineCount": 1050,
                "lineCountEnd": null
            },
            {
                "name": "106",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "refNode",
                "lineCount": 1051,
                "lineCountEnd": null
            },
            {
                "name": "107",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "refNode",
                "lineCount": 1051,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "corollary 4.3.5",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "corollary",
                "lineCount": 1054,
                "lineCountEnd": 1056
            },
            {
                "counter": 14,
                "name": "example 4.3.14",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "example",
                "lineCount": 1060,
                "lineCountEnd": 1080
            },
            {
                "name": "ex:cout_ex_d1",
                "createdAt": "example 4.3.14",
                "type": "label",
                "lineCount": 1060,
                "lineCountEnd": null
            },
            {
                "counter": 8,
                "name": "theorem 4.3.8",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "theorem",
                "lineCount": 1084,
                "lineCountEnd": 1086
            },
            {
                "name": "th:form_d",
                "createdAt": "theorem 4.3.8",
                "type": "label",
                "lineCount": 1084,
                "lineCountEnd": null
            },
            {
                "name": "108",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "refNode",
                "lineCount": 1087,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "remark 4.3.5",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "remark",
                "lineCount": 1090,
                "lineCountEnd": 1092
            },
            {
                "name": "re:disc",
                "createdAt": "remark 4.3.5",
                "type": "label",
                "lineCount": 1090,
                "lineCountEnd": null
            },
            {
                "name": "109",
                "createdAt": "remark 4.3.5",
                "type": "refNode",
                "lineCount": 1091,
                "lineCountEnd": null
            },
            {
                "name": "110",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "refNode",
                "lineCount": 1094,
                "lineCountEnd": null
            },
            {
                "counter": 15,
                "name": "example 4.3.15",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "example",
                "lineCount": 1096,
                "lineCountEnd": 1109
            },
            {
                "name": "ex:cout_ex_d2",
                "createdAt": "example 4.3.15",
                "type": "label",
                "lineCount": 1096,
                "lineCountEnd": null
            },
            {
                "name": "111",
                "createdAt": "example 4.3.15",
                "type": "citeNode",
                "lineCount": 1107,
                "lineCountEnd": null
            },
            {
                "counter": 16,
                "name": "example 4.3.16",
                "createdAt": "Discrete-time protocol :id: 103",
                "type": "example",
                "lineCount": 1113,
                "lineCountEnd": 1116
            },
            {
                "name": "ex:cout_ex_d3",
                "createdAt": "example 4.3.16",
                "type": "label",
                "lineCount": 1113,
                "lineCountEnd": null
            },
            {
                "name": "112",
                "createdAt": "example 4.3.16",
                "type": "refNode",
                "lineCount": 1114,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "More general sufficient conditions for the time-varying case",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1121,
                "lineCountEnd": 1272
            },
            {
                "name": "sec:CLF",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "label",
                "lineCount": 1122,
                "lineCountEnd": null
            },
            {
                "name": "113",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "citeNode",
                "lineCount": 1124,
                "lineCountEnd": null
            },
            {
                "name": "114",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "refNode",
                "lineCount": 1125,
                "lineCountEnd": null
            },
            {
                "name": "115",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "refNode",
                "lineCount": 1125,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Continuous-time case :id: 116",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "subsection",
                "lineCount": 1128,
                "lineCountEnd": 1218
            },
            {
                "counter": 9,
                "name": "theorem 5.1.9",
                "createdAt": "Continuous-time case :id: 116",
                "type": "theorem",
                "lineCount": 1134,
                "lineCountEnd": 1141
            },
            {
                "name": "th:CLF1",
                "createdAt": "theorem 5.1.9",
                "type": "label",
                "lineCount": 1134,
                "lineCountEnd": null
            },
            {
                "name": "eq:CLF1",
                "createdAt": "theorem 5.1.9",
                "type": "label",
                "lineCount": 1138,
                "lineCountEnd": null
            },
            {
                "name": "117",
                "createdAt": "Continuous-time case :id: 116",
                "type": "refNode",
                "lineCount": 1142,
                "lineCountEnd": null
            },
            {
                "counter": 17,
                "name": "example 5.1.17",
                "createdAt": "Continuous-time case :id: 116",
                "type": "example",
                "lineCount": 1145,
                "lineCountEnd": 1174
            },
            {
                "name": "118",
                "createdAt": "Continuous-time case :id: 116",
                "type": "citeNode",
                "lineCount": 1176,
                "lineCountEnd": null
            },
            {
                "name": "119",
                "createdAt": "Continuous-time case :id: 116",
                "type": "citeNode",
                "lineCount": 1176,
                "lineCountEnd": null
            },
            {
                "name": "120",
                "createdAt": "Continuous-time case :id: 116",
                "type": "refNode",
                "lineCount": 1184,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "corollary 5.1.6",
                "createdAt": "Continuous-time case :id: 116",
                "type": "corollary",
                "lineCount": 1185,
                "lineCountEnd": 1191
            },
            {
                "name": "cor:CLF2",
                "createdAt": "corollary 5.1.6",
                "type": "label",
                "lineCount": 1185,
                "lineCountEnd": null
            },
            {
                "counter": 18,
                "name": "example 5.1.18",
                "createdAt": "Continuous-time case :id: 116",
                "type": "example",
                "lineCount": 1194,
                "lineCountEnd": 1215
            },
            {
                "name": "121",
                "createdAt": "example 5.1.18",
                "type": "citeNode",
                "lineCount": 1210,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Discrete-time case",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "subsection",
                "lineCount": 1218,
                "lineCountEnd": 1272
            },
            {
                "counter": 10,
                "name": "theorem 5.2.10",
                "createdAt": "Discrete-time case",
                "type": "theorem",
                "lineCount": 1222,
                "lineCountEnd": 1229
            },
            {
                "name": "th:CLF-DT1",
                "createdAt": "theorem 5.2.10",
                "type": "label",
                "lineCount": 1222,
                "lineCountEnd": null
            },
            {
                "name": "eq:CLF-DT1",
                "createdAt": "theorem 5.2.10",
                "type": "label",
                "lineCount": 1226,
                "lineCountEnd": null
            },
            {
                "name": "122",
                "createdAt": "Discrete-time case",
                "type": "refNode",
                "lineCount": 1230,
                "lineCountEnd": null
            },
            {
                "name": "123",
                "createdAt": "Discrete-time case",
                "type": "refNode",
                "lineCount": 1237,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "corollary 5.2.7",
                "createdAt": "Discrete-time case",
                "type": "corollary",
                "lineCount": 1240,
                "lineCountEnd": 1246
            },
            {
                "name": "cor:CLF-DT2",
                "createdAt": "corollary 5.2.7",
                "type": "label",
                "lineCount": 1240,
                "lineCountEnd": null
            },
            {
                "counter": 19,
                "name": "example 5.2.19",
                "createdAt": "Discrete-time case",
                "type": "example",
                "lineCount": 1249,
                "lineCountEnd": 1270
            },
            {
                "name": "124",
                "createdAt": "example 5.2.19",
                "type": "citeNode",
                "lineCount": 1265,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "Extension to bipartite consensus",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1272,
                "lineCountEnd": 1376
            },
            {
                "name": "sec:bipartite",
                "createdAt": "Extension to bipartite consensus",
                "type": "label",
                "lineCount": 1273,
                "lineCountEnd": null
            },
            {
                "name": "eq:Lb",
                "createdAt": "Extension to bipartite consensus",
                "type": "label",
                "lineCount": 1279,
                "lineCountEnd": null
            },
            {
                "name": "eq:ode:laplacian-b",
                "createdAt": "Extension to bipartite consensus",
                "type": "label",
                "lineCount": 1285,
                "lineCountEnd": null
            },
            {
                "name": "eq:discrete_sys-b",
                "createdAt": "Extension to bipartite consensus",
                "type": "label",
                "lineCount": 1290,
                "lineCountEnd": null
            },
            {
                "name": "125",
                "createdAt": "Extension to bipartite consensus",
                "type": "citeNode",
                "lineCount": 1297,
                "lineCountEnd": null
            },
            {
                "counter": 9,
                "name": "definition 6.9",
                "createdAt": "Extension to bipartite consensus",
                "type": "definition",
                "lineCount": 1299,
                "lineCountEnd": 1302
            },
            {
                "name": "def:cbip-ons",
                "createdAt": "definition 6.9",
                "type": "label",
                "lineCount": 1300,
                "lineCountEnd": null
            },
            {
                "name": "126",
                "createdAt": "Extension to bipartite consensus",
                "type": "citeNode",
                "lineCount": 1303,
                "lineCountEnd": null
            },
            {
                "name": "127",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1307,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "proposition 6.2",
                "createdAt": "Extension to bipartite consensus",
                "type": "proposition",
                "lineCount": 1310,
                "lineCountEnd": 1319
            },
            {
                "name": "prop:bip",
                "createdAt": "proposition 6.2",
                "type": "label",
                "lineCount": 1311,
                "lineCountEnd": null
            },
            {
                "name": "128",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1320,
                "lineCountEnd": null
            },
            {
                "name": "129",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1324,
                "lineCountEnd": null
            },
            {
                "name": "130",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1324,
                "lineCountEnd": null
            },
            {
                "counter": 11,
                "name": "theorem 6.11",
                "createdAt": "Extension to bipartite consensus",
                "type": "theorem",
                "lineCount": 1326,
                "lineCountEnd": 1341
            },
            {
                "counter": 6,
                "name": "remark 6.6",
                "createdAt": "Extension to bipartite consensus",
                "type": "remark",
                "lineCount": 1344,
                "lineCountEnd": 1349
            },
            {
                "name": "131",
                "createdAt": "remark 6.6",
                "type": "citeNode",
                "lineCount": 1345,
                "lineCountEnd": null
            },
            {
                "name": "eq:form_c-b",
                "createdAt": "Extension to bipartite consensus",
                "type": "label",
                "lineCount": 1353,
                "lineCountEnd": null
            },
            {
                "counter": 10,
                "name": "definition 6.10",
                "createdAt": "Extension to bipartite consensus",
                "type": "definition",
                "lineCount": 1357,
                "lineCountEnd": 1359
            },
            {
                "counter": 3,
                "name": "proposition 6.3",
                "createdAt": "Extension to bipartite consensus",
                "type": "proposition",
                "lineCount": 1362,
                "lineCountEnd": 1364
            },
            {
                "name": "132",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1366,
                "lineCountEnd": null
            },
            {
                "name": "133",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1366,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "Conclusions",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1376,
                "lineCountEnd": 1431
            },
            {
                "counter": 8,
                "name": "Time-invariant digraphs",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1431,
                "lineCountEnd": 1626
            },
            {
                "name": "app:TI",
                "createdAt": "Time-invariant digraphs",
                "type": "label",
                "lineCount": 1432,
                "lineCountEnd": null
            },
            {
                "name": "134",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1434,
                "lineCountEnd": null
            },
            {
                "name": "135",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1437,
                "lineCountEnd": null
            },
            {
                "name": "136",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1437,
                "lineCountEnd": null
            },
            {
                "name": "137",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1442,
                "lineCountEnd": null
            },
            {
                "name": "eq:lim",
                "createdAt": "Time-invariant digraphs",
                "type": "label",
                "lineCount": 1485,
                "lineCountEnd": null
            },
            {
                "name": "138",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1498,
                "lineCountEnd": null
            },
            {
                "name": "139",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1499,
                "lineCountEnd": null
            },
            {
                "name": "140",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1502,
                "lineCountEnd": null
            },
            {
                "name": "141",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1512,
                "lineCountEnd": null
            },
            {
                "name": "142",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1513,
                "lineCountEnd": null
            },
            {
                "name": "143",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1514,
                "lineCountEnd": null
            },
            {
                "name": "144",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1517,
                "lineCountEnd": null
            },
            {
                "name": "145",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1517,
                "lineCountEnd": null
            },
            {
                "name": "eq:D-normal-diag",
                "createdAt": "Time-invariant digraphs",
                "type": "label",
                "lineCount": 1538,
                "lineCountEnd": null
            },
            {
                "name": "146",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1545,
                "lineCountEnd": null
            },
            {
                "name": "147",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1559,
                "lineCountEnd": null
            },
            {
                "name": "148",
                "createdAt": "Time-invariant digraphs",
                "type": "citeNode",
                "lineCount": 1561,
                "lineCountEnd": null
            },
            {
                "name": "149",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1578,
                "lineCountEnd": null
            },
            {
                "name": "150",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1588,
                "lineCountEnd": null
            },
            {
                "name": "151",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1591,
                "lineCountEnd": null
            },
            {
                "name": "152",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1599,
                "lineCountEnd": null
            },
            {
                "name": "153",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1601,
                "lineCountEnd": null
            },
            {
                "name": "154",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1603,
                "lineCountEnd": null
            },
            {
                "name": "155",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1610,
                "lineCountEnd": null
            },
            {
                "name": "156",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1617,
                "lineCountEnd": null
            },
            {
                "name": "157",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1618,
                "lineCountEnd": null
            },
            {
                "counter": 9,
                "name": "Time-varying digraphs",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1626,
                "lineCountEnd": null
            },
            {
                "name": "app:TV",
                "createdAt": "Time-varying digraphs",
                "type": "label",
                "lineCount": 1627,
                "lineCountEnd": null
            },
            {
                "name": "158",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1628,
                "lineCountEnd": null
            },
            {
                "name": "159",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1645,
                "lineCountEnd": null
            },
            {
                "name": "160",
                "createdAt": "Time-varying digraphs",
                "type": "citeNode",
                "lineCount": 1647,
                "lineCountEnd": null
            },
            {
                "name": "161",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1657,
                "lineCountEnd": null
            },
            {
                "name": "162",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1658,
                "lineCountEnd": null
            },
            {
                "name": "eq:def_lya2",
                "createdAt": "Time-varying digraphs",
                "type": "label",
                "lineCount": 1663,
                "lineCountEnd": null
            },
            {
                "name": "163",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1724,
                "lineCountEnd": null
            },
            {
                "name": "164",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1739,
                "lineCountEnd": null
            },
            {
                "name": "eq:ULU",
                "createdAt": "Time-varying digraphs",
                "type": "label",
                "lineCount": 1754,
                "lineCountEnd": null
            },
            {
                "name": "165",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1756,
                "lineCountEnd": null
            },
            {
                "name": "166",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1776,
                "lineCountEnd": null
            },
            {
                "name": "167",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1781,
                "lineCountEnd": null
            },
            {
                "name": "168",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1782,
                "lineCountEnd": null
            },
            {
                "name": "169",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1794,
                "lineCountEnd": null
            },
            {
                "name": "170",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1796,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Altafini2013Consensus",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1824,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "shi2019dynamics",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1829,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Song2018Network",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1833,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "9137633",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1842,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "bronski2014spectral",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1848,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Zelazo2014Definitness",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1853,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Chen2016Definitness",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1858,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Zelazo17Robustness",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1864,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Altafini2015Predictable",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1869,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "altafini2019investigating",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1874,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "shi2013agreement",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1879,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Proskurnikov2014Consensus",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1884,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Xia16Structural",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1890,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Liu2017Exponential",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1895,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "meng2018uniform",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1900,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Jiang2019Output",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1904,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Blondel2005Convergence",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1913,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "liberzon2003switching",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1919,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "lin2009stability",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1924,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Johnson2004Matrices",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1929,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Noutsos2006Perron",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1934,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Noutsos2008Rechability",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1939,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Altafini2016Minimal",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1944,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "fontan2021properties",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1948,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Chen2016Characterization",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1952,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Chesi1",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1958,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Meng2017Stability",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1963,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Valcher2016Stability",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1969,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Eger2016Limits",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1974,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Formasini2011Stability",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1978,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "ZHENG2018294",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1983,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Wang22Multiagent",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1988,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Belardo2014Balancedness",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1993,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Hou2003Laplacian",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 1998,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Hershkowitz1985Lyapunov",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2002,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Meyer2000",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2007,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Olesky2009Mv-matrices",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2011,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "PanShaoMesbahi2016",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2017,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "horn2012matrix",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2022,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "olfati2004consensus",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2026,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "wu2007synchronization",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2031,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Cla-HPCLF1",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2035,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Dayawansa1",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2040,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Theys2005",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2045,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "HornJohnson2013",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2049,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Moreau2005Stability",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2053,
                "lineCountEnd": null
            },
            {
                "paperType": null,
                "author": null,
                "title": null,
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
                "name": "Bullo-Lectures",
                "createdAt": "Time-varying digraphs",
                "type": "paper",
                "lineCount": 2058,
                "lineCountEnd": null
            }
        ],
        "links": [
            {
                "source": "1",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "1",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "2",
                "target": "Song2018Network",
                "type": "cite"
            },
            {
                "source": "2",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "3",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "4",
                "target": "bronski2014spectral",
                "type": "cite"
            },
            {
                "source": "5",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "5",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "5",
                "target": "Zelazo17Robustness",
                "type": "cite"
            },
            {
                "source": "5",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "6",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "6",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "6",
                "target": "shi2013agreement",
                "type": "cite"
            },
            {
                "source": "7",
                "target": "Proskurnikov2014Consensus",
                "type": "cite"
            },
            {
                "source": "7",
                "target": "Xia16Structural",
                "type": "cite"
            },
            {
                "source": "7",
                "target": "Liu2017Exponential",
                "type": "cite"
            },
            {
                "source": "7",
                "target": "meng2018uniform",
                "type": "cite"
            },
            {
                "source": "8",
                "target": "Jiang2019Output",
                "type": "cite"
            },
            {
                "source": "9",
                "target": "Blondel2005Convergence",
                "type": "cite"
            },
            {
                "source": "10",
                "target": "Proskurnikov2014Consensus",
                "type": "cite"
            },
            {
                "source": "10",
                "target": "Xia16Structural",
                "type": "cite"
            },
            {
                "source": "10",
                "target": "Liu2017Exponential",
                "type": "cite"
            },
            {
                "source": "11",
                "target": "liberzon2003switching",
                "type": "cite"
            },
            {
                "source": "11",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "12",
                "target": "Johnson2004Matrices",
                "type": "cite"
            },
            {
                "source": "12",
                "target": "Noutsos2006Perron",
                "type": "cite"
            },
            {
                "source": "12",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "13",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "13",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "14",
                "target": "Altafini2016Minimal",
                "type": "cite"
            },
            {
                "source": "15",
                "target": "fontan2021properties",
                "type": "cite"
            },
            {
                "source": "16",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "16",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "16",
                "target": "Chen2016Characterization",
                "type": "cite"
            },
            {
                "source": "16",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "17",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "18",
                "target": "Chesi1",
                "type": "cite"
            },
            {
                "source": "19",
                "target": "Meng2017Stability",
                "type": "cite"
            },
            {
                "source": "19",
                "target": "Valcher2016Stability",
                "type": "cite"
            },
            {
                "source": "20",
                "target": "Eger2016Limits",
                "type": "cite"
            },
            {
                "source": "21",
                "target": "Formasini2011Stability",
                "type": "cite"
            },
            {
                "source": "21",
                "target": "Meng2017Stability",
                "type": "cite"
            },
            {
                "source": "21",
                "target": "ZHENG2018294",
                "type": "cite"
            },
            {
                "source": "22",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "23",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "24",
                "target": "sec:pre",
                "type": "ref"
            },
            {
                "source": "25",
                "target": "sec:TI",
                "type": "ref"
            },
            {
                "source": "26",
                "target": "sec:TV",
                "type": "ref"
            },
            {
                "source": "27",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "28",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "29",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "30",
                "target": "Wang22Multiagent",
                "type": "cite"
            },
            {
                "source": "31",
                "target": "sec:TI",
                "type": "ref"
            },
            {
                "source": "32",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "33",
                "target": "sec:TV",
                "type": "ref"
            },
            {
                "source": "34",
                "target": "Wang22Multiagent",
                "type": "cite"
            },
            {
                "source": "35",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "36",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "37",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "38",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "39",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "39",
                "target": "Belardo2014Balancedness",
                "type": "cite"
            },
            {
                "source": "39",
                "target": "Hou2003Laplacian",
                "type": "cite"
            },
            {
                "source": "40",
                "target": "Hershkowitz1985Lyapunov",
                "type": "cite"
            },
            {
                "source": "41",
                "target": "Meyer2000",
                "type": "cite"
            },
            {
                "source": "42",
                "target": "Olesky2009Mv-matrices",
                "type": "cite"
            },
            {
                "source": "43",
                "target": "Noutsos2006Perron",
                "type": "cite"
            },
            {
                "source": "44",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "45",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "46",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "47",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "48",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "49",
                "target": "def:pf",
                "type": "ref"
            },
            {
                "source": "50",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "51",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "52",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "53",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "54",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "55",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "55",
                "target": "Chen2016Characterization",
                "type": "cite"
            },
            {
                "source": "55",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "56",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "57",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "58",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "59",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "60",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "61",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "62",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "63",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "64",
                "target": "lem:psd-EP",
                "type": "ref"
            },
            {
                "source": "65",
                "target": "example:Ls_nonpsd",
                "type": "ref"
            },
            {
                "source": "66",
                "target": "example:Ls_nonpsd_posdiag",
                "type": "ref"
            },
            {
                "source": "67",
                "target": "ex:norm-not-nec",
                "type": "ref"
            },
            {
                "source": "68",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "69",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "70",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "71",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "72",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "73",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "74",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "75",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "76",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "77",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "78",
                "target": "ex:Wcorank2",
                "type": "ref"
            },
            {
                "source": "80",
                "target": "thm:signed-undirected-cont",
                "type": "ref"
            },
            {
                "source": "81",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "83",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "84",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "85",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "86",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "88",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "89",
                "target": "def:cons",
                "type": "ref"
            },
            {
                "source": "90",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "91",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "92",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "93",
                "target": "tem:nec",
                "type": "ref"
            },
            {
                "source": "94",
                "target": "ex:ce1",
                "type": "ref"
            },
            {
                "source": "95",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "96",
                "target": "fig:1",
                "type": "ref"
            },
            {
                "source": "97",
                "target": "horn2012matrix",
                "type": "cite"
            },
            {
                "source": "98",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "99",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "100",
                "target": "olfati2004consensus",
                "type": "cite"
            },
            {
                "source": "101",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "102",
                "target": "ex:ce1",
                "type": "ref"
            },
            {
                "source": "104",
                "target": "le:nec:DT",
                "type": "ref"
            },
            {
                "source": "105",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "106",
                "target": "lem:nec:DT",
                "type": "ref"
            },
            {
                "source": "107",
                "target": "lem:irreduc_W_suff",
                "type": "ref"
            },
            {
                "source": "108",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "109",
                "target": "re:cons",
                "type": "ref"
            },
            {
                "source": "110",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "111",
                "target": "wu2007synchronization",
                "type": "cite"
            },
            {
                "source": "112",
                "target": "ex:cout_ex_d1",
                "type": "ref"
            },
            {
                "source": "113",
                "target": "liberzon2003switching",
                "type": "cite"
            },
            {
                "source": "113",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "114",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "115",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "117",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "118",
                "target": "Chesi1",
                "type": "cite"
            },
            {
                "source": "119",
                "target": "Cla-HPCLF1",
                "type": "cite"
            },
            {
                "source": "120",
                "target": "th:CLF1",
                "type": "ref"
            },
            {
                "source": "121",
                "target": "Dayawansa1",
                "type": "cite"
            },
            {
                "source": "122",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "123",
                "target": "cor:CLF2",
                "type": "ref"
            },
            {
                "source": "124",
                "target": "Theys2005",
                "type": "cite"
            },
            {
                "source": "125",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "126",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "127",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "128",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "129",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "130",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "131",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "132",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "133",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "134",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "135",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "136",
                "target": "example-PF-notPF_unstable",
                "type": "ref"
            },
            {
                "source": "137",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "138",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "139",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "140",
                "target": "lemma:no_two_pos-eig",
                "type": "ref"
            },
            {
                "source": "141",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "142",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "143",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "144",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "145",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "146",
                "target": "lem:psd-EP",
                "type": "ref"
            },
            {
                "source": "147",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "148",
                "target": "Bullo-Lectures",
                "type": "cite"
            },
            {
                "source": "149",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "150",
                "target": "le:nec:DT",
                "type": "ref"
            },
            {
                "source": "151",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "152",
                "target": "thm:symm-sign",
                "type": "ref"
            },
            {
                "source": "153",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "154",
                "target": "lemma:no_two_pos-eig",
                "type": "ref"
            },
            {
                "source": "155",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "156",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "157",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "158",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "159",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "160",
                "target": "horn2012matrix",
                "type": "cite"
            },
            {
                "source": "161",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "162",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "163",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "164",
                "target": "th:CLF1",
                "type": "ref"
            },
            {
                "source": "165",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "166",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "167",
                "target": "th:CLF-DT1",
                "type": "ref"
            },
            {
                "source": "168",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "169",
                "target": "prop:bip",
                "type": "ref"
            },
            {
                "source": "170",
                "target": "le:nec",
                "type": "ref"
            }
        ],
        "environments": [
            {
                "name": "section",
                "text": "section",
                "counter": 10,
                "countersShouldReset": [
                    "subsection"
                ],
                "countersShouldUpdate": []
            },
            {
                "name": "theorem",
                "text": "Theorem",
                "counter": 12,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "definition",
                "text": "Definition",
                "counter": 11,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "lemma",
                "text": "Lemma",
                "counter": 10,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "corollary",
                "text": "Corollary",
                "counter": 8,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "proposition",
                "text": "Proposition",
                "counter": 4,
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
                "name": "conjecture",
                "text": "Conjecture",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "remark",
                "text": "Remark",
                "counter": 7,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "example",
                "text": "Example",
                "counter": 20,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "case",
                "text": "Case",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "subsection",
                "text": "subsection",
                "counter": 1,
                "countersShouldReset": [
                    "subsubsection"
                ],
                "countersShouldUpdate": []
            },
            {
                "name": "subsubsection",
                "text": "subsubsection",
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
const defaultPaperY = 20;
const nodeColor = "gray"
const envColor = "purple"
const sectionColor = "red"
const defaultNodeRadius = 5;
const envRectHeight = 50;


function lineGraph(nodes, links, envs) {


    allNodes = nodes;
    links = links;
    console.log("env: " + envs[0]);

    allNodes.sort(compare);

    // create dict of nodes for lookup later  
    let preSectionName;
    let preSubSect;
    allNodes.forEach(node => {
        nodeDict[node.name] = node;
        nodeDict[node.name].radius = defaultNodeRadius;
        nodeDict[node.name].y = 1;
        if (node.type == "section") {
            nodeDict[node.name].color = sectionColor;
        }


        nodeDict[node.name].color = nodeColor;

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
    

    // filter for sections and other nodes
    allNodes.forEach(node => {
        if (node.type in envDict && !node.type.includes("section")) {
            console.log("WUHU " + node.name + "\n " + node.type + "\n" + node.lineCountEnd + "\n" + node.lineCount);
            envNodes.push(node);
            nodeDict[node.name].color = envColor;
        }
        // TODO subsection 
        else if (node.type == "section" || node.type.includes("subsection")) {
            console.log("section " + node.name);
            console.log("sectionTYPE " + node.type);
            sectionNodes.push(node);
        }
        else if (node.type == "paper") {
            paperNodes.push(node);
        }
        else {
            normalNodes.push(node);
        }


        if (bestLineCount < node.lineCountEnd) {
            bestLineCount = node.lineCountEnd;
        }


    });


  
    const maxLineCount = bestLineCount + 100;

    var xAxisScale = d3.scaleLinear()
        .domain([0, maxLineCount])
        .range([0, width]);

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
    svg.append("defs")
        .append("marker")
        .attr("id", "betterArrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 0)
        .attr("refY", 0)
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .style("fill", "black")
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
        
    var svgSectionLine = svgSection.append('g')
        .append('rect')
        .attr('width', node => getLineCountDiff(node, xAxisScale))
        .attr('height', 100)
        .attr('fill', "red")
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

    var envRect = svgEnvs
        .append('rect')
        .attr('width', node => getLineCountDiff(node, xAxisScale))
        .attr('height', envRectHeight)
        .attr('fill', envColor)
        .attr('fill-opacity', "0.7")
        .attr('x', node => getlineCount(node, xAxisScale))
        .attr('y', getEnvNodeY);


    envRect.on("click", function (selected) {

        textEnvNode.attr("visibility", function (node) { return showName(node, selected) });
        envRect.attr("fill", function (node) { return selectNode(node, selected) });
    });

        //svgSection.append('g').append('line')
        //.attr('stroke-width', 2)
        //.attr('stroke', 'red')
        //.attr("x1", node => getlineCount(node, xAxisScale))
        //.attr("y1", xaxisHeight - 10)
        //.attr("x2", node => getlineCount(node, xAxisScale))
        //.attr("y2", height+ 1000)

    svgSectionLine.on("click", function (selected) {

        console.log(selected);

        textSection.attr("visibility", function (node) { return showName(node, selected) });
        
    });


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



    var links = svg
        .selectAll('mylinks')
        .data(links)
        .enter()
        .append('path')
        .attr('d', link => createArc(link, xAxisScale)/*createArc(link, xAxisScale)*/)
        .attr("stroke", getLinkColour)
        .attr('stroke-width', 2)
        .style("fill", "none")
        .attr("marker-end", "url(#betterArrow)");

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
            let firstSourceNode = linkDict[node.name];
            //console.log("Target node: " + node.name);
            if (firstSourceNode) {
                let newLineCount = nodeDict[firstSourceNode].lineCount;
                nodeDict[node.name].lineCount = newLineCount;
                return scale(newLineCount);
            }

            return scale(bestLineCount/2)
            
           
        }
        if (node.name == "Consensus on time-invariant signed digraphs") {
            console.log("NEW COUNTX: " + scale(node.lineCount))
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
        
    }

    let zoom = d3.zoom()
        //.scaleExtent([0.5, 5])
        //.translateExtent([[-10, 0], [width, 0]])
        .extent([[0, 0], [(0), 0]])
        .on('zoom', handleZoom);


    svgCanvas.call(zoom);
    // start scale zoom: 
    zoom.scaleTo(svgCanvas, 1);


}

function getLinkColour(link) {
    if (link.type == "ref") {
        return "blue";
    } else {
        return "orange";
    }
}

function linkArc(d, scale) {
    
    var dx = nodeDict[d.target].lineCount - nodeDict[d.source].lineCount,
        dy = nodeDict[d.target].y - nodeDict[d.source].y,
        dr = Math.sqrt(dx * dx + dy * dy);

    return "M" + scale(nodeDict[d.source].lineCount) + "," + nodeDict[d.source].y + "A" + dr + "," + dr + " 0 0,1 " + scale(nodeDict[d.target].lineCount) + "," + nodeDict[d.target].y;
}


function createArc(link, scale) {

    

    start = scale(nodeDict[link.source].lineCount)   // X position of start node on the X axis
    end = scale(nodeDict[link.target].lineCount)    // X position of end node

    startY = nodeDict[link.source].y
    endY = nodeDict[link.target].y

    if (nodeDict[link.source].type == "paper" || nodeDict[link.target].type == "paper") {
        return ['M', start, startY, 'L', end, endY].join(' ');
    }

    return ['M', start, startY,    // the arc starts at the coordinate x=start, y=height-10 (where the starting node is)
        'A',                            // This means we're gonna build an elliptical arc 
        (start - end), ',',         // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance 
        (start - end), 0, 0, ',',
        start < end ? 1 : 1, end, ',', endY] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
        .join(' ');

}


function getNodeY(node) {

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

        return selected.color;

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

function getLineCountDiff(node, scale) {
    //console.log("lineCount: " + node.lineCount)
    //console.log("lineCountEnd: " + node.lineCountEnd)
    console.log("END " + node.lineCountEnd)
    console.log("START " + node.lineCount)
    if (node.lineCountEnd == null) {
        console.log(node.name)
        console.log(node.createdAt)
    }
    return (scale(node.lineCountEnd) - scale(node.lineCount));
}

function getEnvNodeY(node) {
    return defaultNodeY - (envRectHeight/2);
}

function getRadiusNode(node) {
    if (node.type == "refNode" || node.type == "citeNode") {
        return 6; //defaultNodeRadius
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






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
                "name": "341",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 137,
                "lineCountEnd": null
            },
            {
                "name": "342",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 138,
                "lineCountEnd": null
            },
            {
                "name": "343",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 144,
                "lineCountEnd": null
            },
            {
                "name": "344",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 145,
                "lineCountEnd": null
            },
            {
                "name": "345",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 147,
                "lineCountEnd": null
            },
            {
                "name": "346",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 147,
                "lineCountEnd": null
            },
            {
                "name": "347",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 148,
                "lineCountEnd": null
            },
            {
                "name": "348",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 148,
                "lineCountEnd": null
            },
            {
                "name": "349",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 151,
                "lineCountEnd": null
            },
            {
                "name": "350",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 152,
                "lineCountEnd": null
            },
            {
                "name": "351",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 153,
                "lineCountEnd": null
            },
            {
                "name": "352",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 166,
                "lineCountEnd": null
            },
            {
                "name": "353",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "354",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "355",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "356",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 172,
                "lineCountEnd": null
            },
            {
                "name": "357",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 172,
                "lineCountEnd": null
            },
            {
                "name": "358",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 186,
                "lineCountEnd": null
            },
            {
                "name": "359",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 187,
                "lineCountEnd": null
            },
            {
                "name": "360",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 192,
                "lineCountEnd": null
            },
            {
                "name": "361",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 194,
                "lineCountEnd": null
            },
            {
                "name": "362",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 196,
                "lineCountEnd": null
            },
            {
                "name": "363",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 197,
                "lineCountEnd": null
            },
            {
                "name": "364",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "365",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "366",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "367",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "368",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "369",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "370",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "371",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "372",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "373",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "374",
                "createdAt": "INTRODUCTION",
                "type": "citeNode",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "375",
                "createdAt": "INTRODUCTION",
                "type": "refNode",
                "lineCount": 202,
                "lineCountEnd": null
            },
            {
                "name": "376",
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
                "name": "377",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "citeNode",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "name": "378",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "citeNode",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "name": "379",
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
                "name": "380",
                "createdAt": "Matrix theory",
                "type": "citeNode",
                "lineCount": 269,
                "lineCountEnd": null
            },
            {
                "name": "381",
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
                "name": "382",
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
                "name": "383",
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
                "name": "384",
                "createdAt": "lemma 2.3.1",
                "type": "citeNode",
                "lineCount": 304,
                "lineCountEnd": null
            },
            {
                "name": "385",
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
                "name": "386",
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
                "name": "387",
                "createdAt": "Eventually stochastic matrices",
                "type": "citeNode",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "388",
                "createdAt": "Eventually stochastic matrices",
                "type": "refNode",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "389",
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
                "name": "390",
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
                "name": "391",
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
                "name": "392",
                "createdAt": "Continuous-time case",
                "type": "refNode",
                "lineCount": 446,
                "lineCountEnd": null
            },
            {
                "name": "393",
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
                "name": "394",
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
                "name": "395",
                "createdAt": "Signed undirected graph case",
                "type": "citeNode",
                "lineCount": 494,
                "lineCountEnd": null
            },
            {
                "name": "396",
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
                "name": "397",
                "createdAt": "Signed undirected graph case",
                "type": "citeNode",
                "lineCount": 511,
                "lineCountEnd": null
            },
            {
                "name": "398",
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
                "lineCountEnd": 706
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
                "name": "399",
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
                "name": "400",
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
                "name": "401",
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
                "name": "402",
                "createdAt": "remark 3.2.2.2",
                "type": "citeNode",
                "lineCount": 623,
                "lineCountEnd": null
            },
            {
                "name": "403",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 623,
                "lineCountEnd": null
            },
            {
                "name": "404",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 624,
                "lineCountEnd": null
            },
            {
                "name": "405",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "name": "406",
                "createdAt": "remark 3.2.2.2",
                "type": "refNode",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "name": "407",
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
                "name": "408",
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
                "name": "409",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 681,
                "lineCountEnd": null
            },
            {
                "name": "410",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 681,
                "lineCountEnd": null
            },
            {
                "name": "411",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 682,
                "lineCountEnd": null
            },
            {
                "name": "412",
                "createdAt": "Signed digraph case",
                "type": "refNode",
                "lineCount": 682,
                "lineCountEnd": null
            },
            {
                "name": "413",
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
                "name": "414",
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
                "lineCountEnd": 870
            },
            {
                "name": "sec:discrete",
                "createdAt": "Discrete-time protocol",
                "type": "label",
                "lineCount": 707,
                "lineCountEnd": null
            },
            {
                "counter": 8,
                "name": "example 3.3.8",
                "createdAt": "Discrete-time protocol",
                "type": "example",
                "lineCount": 712,
                "lineCountEnd": 717
            },
            {
                "name": "ex:Wcorank2",
                "createdAt": "example 3.3.8",
                "type": "label",
                "lineCount": 713,
                "lineCountEnd": null
            },
            {
                "name": "415",
                "createdAt": "example 3.3.8",
                "type": "refNode",
                "lineCount": 714,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "lemma 3.3.6",
                "createdAt": "Discrete-time protocol",
                "type": "lemma",
                "lineCount": 725,
                "lineCountEnd": 727
            },
            {
                "name": "le:nec:DT",
                "createdAt": "lemma 3.3.6",
                "type": "label",
                "lineCount": 725,
                "lineCountEnd": null
            },
            {
                "name": "416",
                "createdAt": "Discrete-time protocol",
                "type": "refNode",
                "lineCount": 728,
                "lineCountEnd": null
            },
            {
                "counter": 9,
                "name": "example 3.3.9",
                "createdAt": "Discrete-time protocol",
                "type": "example",
                "lineCount": 733,
                "lineCountEnd": 739
            },
            {
                "name": "W:corank-nostrictdom",
                "createdAt": "example 3.3.9",
                "type": "label",
                "lineCount": 734,
                "lineCountEnd": null
            },
            {
                "name": "417",
                "createdAt": "example 3.3.9",
                "type": "refNode",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "418",
                "createdAt": "example 3.3.9",
                "type": "refNode",
                "lineCount": 737,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Signed undirected graph case :id: 419",
                "createdAt": "Discrete-time protocol",
                "type": "subsubsection",
                "lineCount": 756,
                "lineCountEnd": 775
            },
            {
                "name": "420",
                "createdAt": "Signed undirected graph case :id: 419",
                "type": "refNode",
                "lineCount": 758,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "theorem 3.3.1.5",
                "createdAt": "Signed undirected graph case :id: 419",
                "type": "theorem",
                "lineCount": 759,
                "lineCountEnd": 765
            },
            {
                "name": "thm:symm-sign",
                "createdAt": "theorem 3.3.1.5",
                "type": "label",
                "lineCount": 760,
                "lineCountEnd": null
            },
            {
                "name": "421",
                "createdAt": "Signed undirected graph case :id: 419",
                "type": "refNode",
                "lineCount": 766,
                "lineCountEnd": null
            },
            {
                "counter": 2,
                "name": "Signed digraph case :id: 422",
                "createdAt": "Discrete-time protocol",
                "type": "subsubsection",
                "lineCount": 775,
                "lineCountEnd": 870
            },
            {
                "counter": 6,
                "name": "theorem 3.3.2.6",
                "createdAt": "Signed digraph case :id: 422",
                "type": "theorem",
                "lineCount": 781,
                "lineCountEnd": 787
            },
            {
                "name": "eq:ev-stoch-matrix",
                "createdAt": "theorem 3.3.2.6",
                "type": "label",
                "lineCount": 782,
                "lineCountEnd": null
            },
            {
                "name": "423",
                "createdAt": "Signed digraph case :id: 422",
                "type": "refNode",
                "lineCount": 788,
                "lineCountEnd": null
            },
            {
                "name": "424",
                "createdAt": "Signed digraph case :id: 422",
                "type": "refNode",
                "lineCount": 792,
                "lineCountEnd": null
            },
            {
                "counter": 10,
                "name": "example 3.3.2.10",
                "createdAt": "Signed digraph case :id: 422",
                "type": "example",
                "lineCount": 793,
                "lineCountEnd": 806
            },
            {
                "counter": 11,
                "name": "example 3.3.2.11",
                "createdAt": "Signed digraph case :id: 422",
                "type": "example",
                "lineCount": 814,
                "lineCountEnd": 835
            },
            {
                "counter": 3,
                "name": "corollary 3.3.2.3",
                "createdAt": "Signed digraph case :id: 422",
                "type": "corollary",
                "lineCount": 840,
                "lineCountEnd": 854
            },
            {
                "name": "cor:weight-bal-DT",
                "createdAt": "corollary 3.3.2.3",
                "type": "label",
                "lineCount": 841,
                "lineCountEnd": null
            },
            {
                "name": "425",
                "createdAt": "Signed digraph case :id: 422",
                "type": "refNode",
                "lineCount": 855,
                "lineCountEnd": null
            },
            {
                "counter": 7,
                "name": "lemma 3.3.2.7",
                "createdAt": "Signed digraph case :id: 422",
                "type": "lemma",
                "lineCount": 860,
                "lineCountEnd": 864
            },
            {
                "name": "lem:irreduc_W_suff",
                "createdAt": "lemma 3.3.2.7",
                "type": "label",
                "lineCount": 861,
                "lineCountEnd": null
            },
            {
                "name": "426",
                "createdAt": "Signed digraph case :id: 422",
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
                "name": "Problem formulation :id: 427",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 873,
                "lineCountEnd": 916
            },
            {
                "name": "eq:form_c",
                "createdAt": "Problem formulation :id: 427",
                "type": "label",
                "lineCount": 889,
                "lineCountEnd": null
            },
            {
                "name": "428",
                "createdAt": "Problem formulation :id: 427",
                "type": "citeNode",
                "lineCount": 892,
                "lineCountEnd": null
            },
            {
                "name": "eq:form_d",
                "createdAt": "Problem formulation :id: 427",
                "type": "label",
                "lineCount": 897,
                "lineCountEnd": null
            },
            {
                "name": "429",
                "createdAt": "Problem formulation :id: 427",
                "type": "refNode",
                "lineCount": 905,
                "lineCountEnd": null
            },
            {
                "counter": 8,
                "name": "definition 4.1.8",
                "createdAt": "Problem formulation :id: 427",
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
                "name": "430",
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
                "name": "431",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "name": "432",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "name": "433",
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
                "name": "434",
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
                "name": "435",
                "createdAt": "example 4.2.12",
                "type": "refNode",
                "lineCount": 958,
                "lineCountEnd": null
            },
            {
                "name": "436",
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
                "name": "437",
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
                "name": "438",
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
                "name": "439",
                "createdAt": "Continuous-time protocol",
                "type": "refNode",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "name": "440",
                "createdAt": "Continuous-time protocol",
                "type": "citeNode",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "name": "441",
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
                "name": "442",
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
                "name": "Discrete-time protocol :id: 443",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 1041,
                "lineCountEnd": 1121
            },
            {
                "counter": 9,
                "name": "lemma 4.3.9",
                "createdAt": "Discrete-time protocol :id: 443",
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
                "name": "444",
                "createdAt": "Discrete-time protocol :id: 443",
                "type": "refNode",
                "lineCount": 1049,
                "lineCountEnd": null
            },
            {
                "name": "445",
                "createdAt": "Discrete-time protocol :id: 443",
                "type": "refNode",
                "lineCount": 1050,
                "lineCountEnd": null
            },
            {
                "name": "446",
                "createdAt": "Discrete-time protocol :id: 443",
                "type": "refNode",
                "lineCount": 1051,
                "lineCountEnd": null
            },
            {
                "name": "447",
                "createdAt": "Discrete-time protocol :id: 443",
                "type": "refNode",
                "lineCount": 1051,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "corollary 4.3.5",
                "createdAt": "Discrete-time protocol :id: 443",
                "type": "corollary",
                "lineCount": 1054,
                "lineCountEnd": 1056
            },
            {
                "counter": 14,
                "name": "example 4.3.14",
                "createdAt": "Discrete-time protocol :id: 443",
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
                "createdAt": "Discrete-time protocol :id: 443",
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
                "name": "448",
                "createdAt": "Discrete-time protocol :id: 443",
                "type": "refNode",
                "lineCount": 1087,
                "lineCountEnd": null
            },
            {
                "counter": 5,
                "name": "remark 4.3.5",
                "createdAt": "Discrete-time protocol :id: 443",
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
                "name": "449",
                "createdAt": "remark 4.3.5",
                "type": "refNode",
                "lineCount": 1091,
                "lineCountEnd": null
            },
            {
                "name": "450",
                "createdAt": "Discrete-time protocol :id: 443",
                "type": "refNode",
                "lineCount": 1094,
                "lineCountEnd": null
            },
            {
                "counter": 15,
                "name": "example 4.3.15",
                "createdAt": "Discrete-time protocol :id: 443",
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
                "name": "451",
                "createdAt": "example 4.3.15",
                "type": "citeNode",
                "lineCount": 1107,
                "lineCountEnd": null
            },
            {
                "counter": 16,
                "name": "example 4.3.16",
                "createdAt": "Discrete-time protocol :id: 443",
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
                "name": "452",
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
                "name": "453",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "citeNode",
                "lineCount": 1124,
                "lineCountEnd": null
            },
            {
                "name": "454",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "refNode",
                "lineCount": 1125,
                "lineCountEnd": null
            },
            {
                "name": "455",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "refNode",
                "lineCount": 1125,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Continuous-time case :id: 456",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "subsection",
                "lineCount": 1128,
                "lineCountEnd": 1218
            },
            {
                "counter": 9,
                "name": "theorem 5.1.9",
                "createdAt": "Continuous-time case :id: 456",
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
                "name": "457",
                "createdAt": "Continuous-time case :id: 456",
                "type": "refNode",
                "lineCount": 1142,
                "lineCountEnd": null
            },
            {
                "counter": 17,
                "name": "example 5.1.17",
                "createdAt": "Continuous-time case :id: 456",
                "type": "example",
                "lineCount": 1145,
                "lineCountEnd": 1174
            },
            {
                "name": "458",
                "createdAt": "Continuous-time case :id: 456",
                "type": "citeNode",
                "lineCount": 1176,
                "lineCountEnd": null
            },
            {
                "name": "459",
                "createdAt": "Continuous-time case :id: 456",
                "type": "citeNode",
                "lineCount": 1176,
                "lineCountEnd": null
            },
            {
                "name": "460",
                "createdAt": "Continuous-time case :id: 456",
                "type": "refNode",
                "lineCount": 1184,
                "lineCountEnd": null
            },
            {
                "counter": 6,
                "name": "corollary 5.1.6",
                "createdAt": "Continuous-time case :id: 456",
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
                "createdAt": "Continuous-time case :id: 456",
                "type": "example",
                "lineCount": 1194,
                "lineCountEnd": 1215
            },
            {
                "name": "461",
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
                "name": "462",
                "createdAt": "Discrete-time case",
                "type": "refNode",
                "lineCount": 1230,
                "lineCountEnd": null
            },
            {
                "name": "463",
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
                "name": "464",
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
                "name": "465",
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
                "name": "466",
                "createdAt": "Extension to bipartite consensus",
                "type": "citeNode",
                "lineCount": 1303,
                "lineCountEnd": null
            },
            {
                "name": "467",
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
                "name": "468",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1320,
                "lineCountEnd": null
            },
            {
                "name": "469",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1324,
                "lineCountEnd": null
            },
            {
                "name": "470",
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
                "name": "471",
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
                "name": "472",
                "createdAt": "Extension to bipartite consensus",
                "type": "refNode",
                "lineCount": 1366,
                "lineCountEnd": null
            },
            {
                "name": "473",
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
                "name": "474",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1434,
                "lineCountEnd": null
            },
            {
                "name": "475",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1437,
                "lineCountEnd": null
            },
            {
                "name": "476",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1437,
                "lineCountEnd": null
            },
            {
                "name": "477",
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
                "name": "478",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1498,
                "lineCountEnd": null
            },
            {
                "name": "479",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1499,
                "lineCountEnd": null
            },
            {
                "name": "480",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1502,
                "lineCountEnd": null
            },
            {
                "name": "481",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1512,
                "lineCountEnd": null
            },
            {
                "name": "482",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1513,
                "lineCountEnd": null
            },
            {
                "name": "483",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1514,
                "lineCountEnd": null
            },
            {
                "name": "484",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1517,
                "lineCountEnd": null
            },
            {
                "name": "485",
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
                "name": "486",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1545,
                "lineCountEnd": null
            },
            {
                "name": "487",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1559,
                "lineCountEnd": null
            },
            {
                "name": "488",
                "createdAt": "Time-invariant digraphs",
                "type": "citeNode",
                "lineCount": 1561,
                "lineCountEnd": null
            },
            {
                "name": "489",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1578,
                "lineCountEnd": null
            },
            {
                "name": "490",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1588,
                "lineCountEnd": null
            },
            {
                "name": "491",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1591,
                "lineCountEnd": null
            },
            {
                "name": "492",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1599,
                "lineCountEnd": null
            },
            {
                "name": "493",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1601,
                "lineCountEnd": null
            },
            {
                "name": "494",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1603,
                "lineCountEnd": null
            },
            {
                "name": "495",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1610,
                "lineCountEnd": null
            },
            {
                "name": "496",
                "createdAt": "Time-invariant digraphs",
                "type": "refNode",
                "lineCount": 1617,
                "lineCountEnd": null
            },
            {
                "name": "497",
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
                "lineCountEnd": 2068
            },
            {
                "name": "app:TV",
                "createdAt": "Time-varying digraphs",
                "type": "label",
                "lineCount": 1627,
                "lineCountEnd": null
            },
            {
                "name": "498",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1628,
                "lineCountEnd": null
            },
            {
                "name": "499",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1645,
                "lineCountEnd": null
            },
            {
                "name": "500",
                "createdAt": "Time-varying digraphs",
                "type": "citeNode",
                "lineCount": 1647,
                "lineCountEnd": null
            },
            {
                "name": "501",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1657,
                "lineCountEnd": null
            },
            {
                "name": "502",
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
                "name": "503",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1724,
                "lineCountEnd": null
            },
            {
                "name": "504",
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
                "name": "505",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1756,
                "lineCountEnd": null
            },
            {
                "name": "506",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1776,
                "lineCountEnd": null
            },
            {
                "name": "507",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1781,
                "lineCountEnd": null
            },
            {
                "name": "508",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1782,
                "lineCountEnd": null
            },
            {
                "name": "509",
                "createdAt": "Time-varying digraphs",
                "type": "refNode",
                "lineCount": 1794,
                "lineCountEnd": null
            },
            {
                "name": "510",
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
                "source": "341",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "341",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "342",
                "target": "Song2018Network",
                "type": "cite"
            },
            {
                "source": "342",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "343",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "344",
                "target": "bronski2014spectral",
                "type": "cite"
            },
            {
                "source": "345",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "345",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "345",
                "target": "Zelazo17Robustness",
                "type": "cite"
            },
            {
                "source": "345",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "346",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "346",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "346",
                "target": "shi2013agreement",
                "type": "cite"
            },
            {
                "source": "347",
                "target": "Proskurnikov2014Consensus",
                "type": "cite"
            },
            {
                "source": "347",
                "target": "Xia16Structural",
                "type": "cite"
            },
            {
                "source": "347",
                "target": "Liu2017Exponential",
                "type": "cite"
            },
            {
                "source": "347",
                "target": "meng2018uniform",
                "type": "cite"
            },
            {
                "source": "348",
                "target": "Jiang2019Output",
                "type": "cite"
            },
            {
                "source": "349",
                "target": "Blondel2005Convergence",
                "type": "cite"
            },
            {
                "source": "350",
                "target": "Proskurnikov2014Consensus",
                "type": "cite"
            },
            {
                "source": "350",
                "target": "Xia16Structural",
                "type": "cite"
            },
            {
                "source": "350",
                "target": "Liu2017Exponential",
                "type": "cite"
            },
            {
                "source": "351",
                "target": "liberzon2003switching",
                "type": "cite"
            },
            {
                "source": "351",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "352",
                "target": "Johnson2004Matrices",
                "type": "cite"
            },
            {
                "source": "352",
                "target": "Noutsos2006Perron",
                "type": "cite"
            },
            {
                "source": "352",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "353",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "353",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "354",
                "target": "Altafini2016Minimal",
                "type": "cite"
            },
            {
                "source": "355",
                "target": "fontan2021properties",
                "type": "cite"
            },
            {
                "source": "356",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "356",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "356",
                "target": "Chen2016Characterization",
                "type": "cite"
            },
            {
                "source": "356",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "357",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "358",
                "target": "Chesi1",
                "type": "cite"
            },
            {
                "source": "359",
                "target": "Meng2017Stability",
                "type": "cite"
            },
            {
                "source": "359",
                "target": "Valcher2016Stability",
                "type": "cite"
            },
            {
                "source": "360",
                "target": "Eger2016Limits",
                "type": "cite"
            },
            {
                "source": "361",
                "target": "Formasini2011Stability",
                "type": "cite"
            },
            {
                "source": "361",
                "target": "Meng2017Stability",
                "type": "cite"
            },
            {
                "source": "361",
                "target": "ZHENG2018294",
                "type": "cite"
            },
            {
                "source": "362",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "363",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "364",
                "target": "sec:pre",
                "type": "ref"
            },
            {
                "source": "365",
                "target": "sec:TI",
                "type": "ref"
            },
            {
                "source": "366",
                "target": "sec:TV",
                "type": "ref"
            },
            {
                "source": "367",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "368",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "369",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "370",
                "target": "Wang22Multiagent",
                "type": "cite"
            },
            {
                "source": "371",
                "target": "sec:TI",
                "type": "ref"
            },
            {
                "source": "372",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "373",
                "target": "sec:TV",
                "type": "ref"
            },
            {
                "source": "374",
                "target": "Wang22Multiagent",
                "type": "cite"
            },
            {
                "source": "375",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "376",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "377",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "378",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "379",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "379",
                "target": "Belardo2014Balancedness",
                "type": "cite"
            },
            {
                "source": "379",
                "target": "Hou2003Laplacian",
                "type": "cite"
            },
            {
                "source": "380",
                "target": "Hershkowitz1985Lyapunov",
                "type": "cite"
            },
            {
                "source": "381",
                "target": "Meyer2000",
                "type": "cite"
            },
            {
                "source": "382",
                "target": "Olesky2009Mv-matrices",
                "type": "cite"
            },
            {
                "source": "383",
                "target": "Noutsos2006Perron",
                "type": "cite"
            },
            {
                "source": "384",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "385",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "386",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "387",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "388",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "389",
                "target": "def:pf",
                "type": "ref"
            },
            {
                "source": "390",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "391",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "392",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "393",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "394",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "395",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "395",
                "target": "Chen2016Characterization",
                "type": "cite"
            },
            {
                "source": "395",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "396",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "397",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "398",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "399",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "400",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "401",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "402",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "403",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "404",
                "target": "lem:psd-EP",
                "type": "ref"
            },
            {
                "source": "405",
                "target": "example:Ls_nonpsd",
                "type": "ref"
            },
            {
                "source": "406",
                "target": "example:Ls_nonpsd_posdiag",
                "type": "ref"
            },
            {
                "source": "407",
                "target": "ex:norm-not-nec",
                "type": "ref"
            },
            {
                "source": "408",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "409",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "410",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "411",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "412",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "413",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "414",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "415",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "416",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "417",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "418",
                "target": "ex:Wcorank2",
                "type": "ref"
            },
            {
                "source": "420",
                "target": "thm:signed-undirected-cont",
                "type": "ref"
            },
            {
                "source": "421",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "423",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "424",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "425",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "426",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "428",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "429",
                "target": "def:cons",
                "type": "ref"
            },
            {
                "source": "430",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "431",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "432",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "433",
                "target": "tem:nec",
                "type": "ref"
            },
            {
                "source": "434",
                "target": "ex:ce1",
                "type": "ref"
            },
            {
                "source": "435",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "436",
                "target": "fig:1",
                "type": "ref"
            },
            {
                "source": "437",
                "target": "horn2012matrix",
                "type": "cite"
            },
            {
                "source": "438",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "439",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "440",
                "target": "olfati2004consensus",
                "type": "cite"
            },
            {
                "source": "441",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "442",
                "target": "ex:ce1",
                "type": "ref"
            },
            {
                "source": "444",
                "target": "le:nec:DT",
                "type": "ref"
            },
            {
                "source": "445",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "446",
                "target": "lem:nec:DT",
                "type": "ref"
            },
            {
                "source": "447",
                "target": "lem:irreduc_W_suff",
                "type": "ref"
            },
            {
                "source": "448",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "449",
                "target": "re:cons",
                "type": "ref"
            },
            {
                "source": "450",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "451",
                "target": "wu2007synchronization",
                "type": "cite"
            },
            {
                "source": "452",
                "target": "ex:cout_ex_d1",
                "type": "ref"
            },
            {
                "source": "453",
                "target": "liberzon2003switching",
                "type": "cite"
            },
            {
                "source": "453",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "454",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "455",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "457",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "458",
                "target": "Chesi1",
                "type": "cite"
            },
            {
                "source": "459",
                "target": "Cla-HPCLF1",
                "type": "cite"
            },
            {
                "source": "460",
                "target": "th:CLF1",
                "type": "ref"
            },
            {
                "source": "461",
                "target": "Dayawansa1",
                "type": "cite"
            },
            {
                "source": "462",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "463",
                "target": "cor:CLF2",
                "type": "ref"
            },
            {
                "source": "464",
                "target": "Theys2005",
                "type": "cite"
            },
            {
                "source": "465",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "466",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "467",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "468",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "469",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "470",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "471",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "472",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "473",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "474",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "475",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "476",
                "target": "example-PF-notPF_unstable",
                "type": "ref"
            },
            {
                "source": "477",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "478",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "479",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "480",
                "target": "lemma:no_two_pos-eig",
                "type": "ref"
            },
            {
                "source": "481",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "482",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "483",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "484",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "485",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "486",
                "target": "lem:psd-EP",
                "type": "ref"
            },
            {
                "source": "487",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "488",
                "target": "Bullo-Lectures",
                "type": "cite"
            },
            {
                "source": "489",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "490",
                "target": "le:nec:DT",
                "type": "ref"
            },
            {
                "source": "491",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "492",
                "target": "thm:symm-sign",
                "type": "ref"
            },
            {
                "source": "493",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "494",
                "target": "lemma:no_two_pos-eig",
                "type": "ref"
            },
            {
                "source": "495",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "496",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "497",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "498",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "499",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "500",
                "target": "horn2012matrix",
                "type": "cite"
            },
            {
                "source": "501",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "502",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "503",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "504",
                "target": "th:CLF1",
                "type": "ref"
            },
            {
                "source": "505",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "506",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "507",
                "target": "th:CLF-DT1",
                "type": "ref"
            },
            {
                "source": "508",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "509",
                "target": "prop:bip",
                "type": "ref"
            },
            {
                "source": "510",
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
const defaultNodeY = xaxisHeight + 50;
const defaultPaperY = 20;
const defaultEnvY = xaxisHeight;
const nodeColor = "gray"
const envColor = "purple"
const sectionColor = "red"
const defaultNodeRadius = 6;
const envRectHeight = 200;
const defaultSectionRectHeight = envRectHeight + 50

const sectionTextY = xaxisHeight + defaultSectionRectHeight + 15;
const envTextY = xaxisHeight - 10;
const ShowPaperNodes = false;


const zoomThreshold = 20;


var currentSelectedNode = null;


function lineGraph(nodes, links, envs) {


    allNodes = nodes;
    links = links;
    console.log("env: " + envs[0]);

    allNodes.sort(compare);

    // create dict of nodes for lookup later  
    let preSectionName;
    let preSubSect;


    // TODO COMBINE TO ONE LOOB
    allNodes.forEach(node => {
        nodeDict[node.name] = node;
        nodeDict[node.name].radius = defaultNodeRadius;

        if (node.type == "Paper") {
            nodeDict[node.name].y = defaultPaperY;
        } else {
            nodeDict[node.name].y = defaultNodeY;
        }
        
        if (node.type.includes("section")) {
            nodeDict[node.name].color = sectionColor;
        } else {
            nodeDict[node.name].color = nodeColor;
        }
    

        

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
    var threshold = 50

    // filter for sections and other nodes  
    allNodes.forEach(node => {
        if (node.type in envDict && !node.type.includes("section")) {
           
            envNodes.push(node);
            nodeDict[node.name].color = envColor;
        }
        // TODO subsection 
        else if (node.type == "section" || node.type.includes("subsection")) {
           
            sectionNodes.push(node);
        }
        else if (node.type == "Paper") {
            paperNodes.push(node);
        }
        else {
            normalNodes.push(node);
        }


        if (bestLineCount < node.lineCountEnd) {
            bestLineCount = node.lineCountEnd;
        }

        if (!node.type.includes("section")) {
            if (prevNode != null) {
                if (prevNode.y == defaultNodeY && (node.lineCount - prevNode.lineCount) <= threshold) {
                    node.y = defaultNodeY + getRandomInt(10,30);
                    prevNode = node;
                } else {
                    prevNode = node;
                }

            }
            else {
                prevNode = node;
            }
            

        }
       


    });


  
    const maxLineCount = bestLineCount + 100;

    var xAxisScale = d3.scaleLinear()
        .domain([0, maxLineCount])
        .range([0, width]);

    var currentScale = xAxisScale;

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
    svg.append("defs")
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
        .attr('height', node => sectionRectHeight(node))
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
        .attr('height', node => {

            let numberOfSub = subCount(nodeDict[node.createdAt].type);

            return envRectHeight - (10 * numberOfSub);
        })
        .attr('fill', envColor)
        .attr('fill-opacity', "0.7")
        .attr('x', node => getlineCount(node, xAxisScale))
        .attr('y', getEnvNodeY);


    

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

    

    var nodeCircles = svgNodes.append('circle')
        .attr('r', getRadiusNode)
        .attr('fill', "gray")
        .attr('cx', node => getlineCount(node, xAxisScale))
        .attr('cy', getNodeY);

    var svgLinks = svg
        .selectAll('mylinks')
        .data(links)
        .enter()
        .append('path')
        .attr("class", "link")
        .attr('d', link => createArc(link, xAxisScale)/*createArc(link, xAxisScale)*/)
        .attr("stroke", getLinkColour)
        .attr('stroke-width', 2)
        .style("fill", "none")
        .attr("marker-end", "url(#betterArrow)");

    var textDiv = svgNodes.append('g');

    envRect.on("click", function (selected) {

        textEnvNode.attr("visibility", function (node) { return showName(node, selected) });
        envRect.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", sectionColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", nodeColor);

    });

    svgSectionLine.on("click", function (selected) {
        console.log("OH NO! ")
        textSection.attr("visibility", function (node) { return showName(node, selected) });
        svgSectionLine.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", envColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", nodeColor);
    });

    nodeCircles.on("click", function (selected) {

        textElements.attr("visibility", function (node) { return showName(node, selected) });
        nodeCircles.attr("fill", function (node) { return selectNode(node, selected) });
        textBackground.attr("visibility", function (node) { return showName(node, selected) });

        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", envColor);
        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", sectionColor);
    });


    graphBackground.on("click", function (selected) {
      
        currentSelectedNode = null;

        svgLinks
            .attr("stroke", getLinkColour)
            .attr("stroke-opacity", link => visibleLinks(link, currentScale));

        

        textEnvNode.attr("visibility", "hidden");
        envRect.attr("fill", envColor);
        textBackground.attr("visibility", "hidden" );

        textSection.attr("visibility", "hidden");
        svgSectionLine.attr("fill", sectionColor);
        textElements.attr("visibility", "hidden");
        nodeCircles.attr("fill", nodeColor);
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
            if (node.type == "Paper") {
                if (node.title) {
                    return node.title;
                }
                else {
                    return node.name
                }
                   
            } else {
                return node.name;
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

        if (node.type == "Paper") {
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
            
        }
           
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

        console.log("TRANSFORM K: " + d3.event.transform.k);

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

        svgLinks
            .attr("stroke", link => {

                if (link.source == selected.name) {
                    return "#65FF00";
                } else if (link.target == selected.name) {
                    return "#65FF00";
                }
                else {
                    return getLinkColour(link);
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
        return 1
    }

    if (sourceOutside && targetOutside) {
        return 0;
    } else if ((sourceOutside && !targetOutside) || (targetOutside && !sourceOutside)) {
        return 0.05;
    } else {
        if (currentSelectedNode != null) {
            return 0.1;
        } else {
            return 1;
        }
        
    }


}

function getLinkColour(link) {
    if (link.type == "ref") {
        return "black";
    } else {
        return "grey";
    }
}




function createArc(d, scale) {

    console.log(d.source);
    console.log(d.target);
    if (!ShowPaperNodes && nodeDict[d.target].type == "Paper") {
        return [];
    }

    var newCoord = getTargetNodeCircumferencePoint(d, scale);

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

    var t_radius = getRadiusNode(nodeDict[d.target]); // nodeWidth is just a custom attribute I calculate during the creation of the nodes depending on the node width
    var dx = scale(nodeDict[d.target].lineCount) - scale(nodeDict[d.source].lineCount);
    var dy = nodeDict[d.target].y - nodeDict[d.source].y;
    var gamma = Math.atan2(dy, dx); // Math.atan2 returns the angle in the correct quadrant as opposed to Math.atan
    var tx = scale(nodeDict[d.target].lineCount) - (Math.cos(gamma) * t_radius);
    var ty = nodeDict[d.target].y - (Math.sin(gamma) * t_radius);

    return [tx, ty];
}


function getNodeY(node) {

    return nodeDict[node.name].y;
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
    if (node.type == "refNode" || node.type == "citeNode") {
        return 3; //defaultNodeRadius
    } else if (node.type == "Paper") {
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




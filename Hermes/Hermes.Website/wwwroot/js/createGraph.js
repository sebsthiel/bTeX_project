

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
                "lineCountEnd": null
            },
            {
                "name": "331",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 137,
                "lineCountEnd": null
            },
            {
                "name": "332",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 138,
                "lineCountEnd": null
            },
            {
                "name": "333",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 144,
                "lineCountEnd": null
            },
            {
                "name": "334",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 145,
                "lineCountEnd": null
            },
            {
                "name": "335",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 147,
                "lineCountEnd": null
            },
            {
                "name": "336",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 147,
                "lineCountEnd": null
            },
            {
                "name": "337",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 148,
                "lineCountEnd": null
            },
            {
                "name": "338",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 148,
                "lineCountEnd": null
            },
            {
                "name": "339",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 151,
                "lineCountEnd": null
            },
            {
                "name": "340",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 152,
                "lineCountEnd": null
            },
            {
                "name": "341",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 153,
                "lineCountEnd": null
            },
            {
                "name": "342",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 166,
                "lineCountEnd": null
            },
            {
                "name": "343",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "344",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "345",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 169,
                "lineCountEnd": null
            },
            {
                "name": "346",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 172,
                "lineCountEnd": null
            },
            {
                "name": "347",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 172,
                "lineCountEnd": null
            },
            {
                "name": "348",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 186,
                "lineCountEnd": null
            },
            {
                "name": "349",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 187,
                "lineCountEnd": null
            },
            {
                "name": "350",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 192,
                "lineCountEnd": null
            },
            {
                "name": "351",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 194,
                "lineCountEnd": null
            },
            {
                "name": "352",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 196,
                "lineCountEnd": null
            },
            {
                "name": "353",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 197,
                "lineCountEnd": null
            },
            {
                "name": "354",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "355",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "356",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "357",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "358",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 199,
                "lineCountEnd": null
            },
            {
                "name": "359",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "360",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "361",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "362",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "363",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "364",
                "createdAt": "INTRODUCTION",
                "type": "cite",
                "lineCount": 201,
                "lineCountEnd": null
            },
            {
                "name": "365",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 202,
                "lineCountEnd": null
            },
            {
                "name": "366",
                "createdAt": "INTRODUCTION",
                "type": "ref",
                "lineCount": 202,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Preliminary material",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 212,
                "lineCountEnd": null
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
                "lineCountEnd": null
            },
            {
                "name": "eq:Laplacian1",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "label",
                "lineCount": 234,
                "lineCountEnd": null
            },
            {
                "name": "367",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "cite",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "name": "368",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "cite",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "name": "369",
                "createdAt": "Signed graphs and signed Laplacians",
                "type": "cite",
                "lineCount": 237,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Matrix theory",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 246,
                "lineCountEnd": null
            },
            {
                "name": "370",
                "createdAt": "Matrix theory",
                "type": "cite",
                "lineCount": 269,
                "lineCountEnd": null
            },
            {
                "name": "371",
                "createdAt": "Matrix theory",
                "type": "cite",
                "lineCount": 272,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Perron-Frobenius property and eventual positivity",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 278,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "definition 1.1.1",
                "createdAt": "Problem formulation",
                "type": "definition",
                "lineCount": 907,
                "lineCountEnd": 909
            },
            {
                "name": "def:pf",
                "createdAt": "definition 1.1.1",
                "type": "label",
                "lineCount": 280,
                "lineCountEnd": null
            },
            {
                "name": "372",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "cite",
                "lineCount": 289,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "theorem 1.1.1",
                "createdAt": "Discrete-time case",
                "type": "theorem",
                "lineCount": 1222,
                "lineCountEnd": 1229
            },
            {
                "name": "thm:PFforEvPos",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 292,
                "lineCountEnd": null
            },
            {
                "name": "373",
                "createdAt": "theorem 1.1.1",
                "type": "cite",
                "lineCount": 293,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "lemma 1.1.1",
                "createdAt": "Discrete-time protocol",
                "type": "lemma",
                "lineCount": 1046,
                "lineCountEnd": 1048
            },
            {
                "name": "lemma:no_two_pos-eig",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 303,
                "lineCountEnd": null
            },
            {
                "name": "374",
                "createdAt": "lemma 1.1.1",
                "type": "cite",
                "lineCount": 304,
                "lineCountEnd": null
            },
            {
                "name": "375",
                "createdAt": "Perron-Frobenius property and eventual positivity",
                "type": "cite",
                "lineCount": 309,
                "lineCountEnd": null
            },
            {
                "name": "def:ev_exp_pos",
                "createdAt": "definition 1.1.1",
                "type": "label",
                "lineCount": 310,
                "lineCountEnd": null
            },
            {
                "name": "lemma:ev_exp_pos",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 315,
                "lineCountEnd": null
            },
            {
                "name": "376",
                "createdAt": "lemma 1.1.1",
                "type": "cite",
                "lineCount": 316,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Eventually stochastic matrices",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 323,
                "lineCountEnd": null
            },
            {
                "name": "377",
                "createdAt": "Eventually stochastic matrices",
                "type": "cite",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "378",
                "createdAt": "Eventually stochastic matrices",
                "type": "ref",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "379",
                "createdAt": "Eventually stochastic matrices",
                "type": "ref",
                "lineCount": 332,
                "lineCountEnd": null
            },
            {
                "name": "lemma:ev_stoch",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 336,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Signed Perron-Frobenius property",
                "createdAt": "Preliminary material",
                "type": "subsection",
                "lineCount": 358,
                "lineCountEnd": null
            },
            {
                "name": "def:spf",
                "createdAt": "definition 1.1.1",
                "type": "label",
                "lineCount": 360,
                "lineCountEnd": null
            },
            {
                "name": "thm:spf",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 366,
                "lineCountEnd": null
            },
            {
                "name": "380",
                "createdAt": "theorem 1.1.1",
                "type": "cite",
                "lineCount": 366,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Consensus on time-invariant signed digraphs",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 392,
                "lineCountEnd": null
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
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 873,
                "lineCountEnd": null
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
                "name": "def:cons",
                "createdAt": "definition 1.1.1",
                "type": "label",
                "lineCount": 412,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "proposition 1.1.1",
                "createdAt": "Problem formulation",
                "type": "proposition",
                "lineCount": 422,
                "lineCountEnd": 432
            },
            {
                "name": "prop:signed-prop",
                "createdAt": "proposition 1.1.1",
                "type": "label",
                "lineCount": 423,
                "lineCountEnd": null
            },
            {
                "name": "381",
                "createdAt": "Problem formulation",
                "type": "ref",
                "lineCount": 433,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Continuous-time case",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "subsection",
                "lineCount": 1128,
                "lineCountEnd": null
            },
            {
                "name": "sec:continuous",
                "createdAt": "Continuous-time case",
                "type": "label",
                "lineCount": 444,
                "lineCountEnd": null
            },
            {
                "name": "382",
                "createdAt": "Continuous-time case",
                "type": "ref",
                "lineCount": 446,
                "lineCountEnd": null
            },
            {
                "name": "383",
                "createdAt": "Continuous-time case",
                "type": "ref",
                "lineCount": 446,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "example 1.1.1",
                "createdAt": "Discrete-time case",
                "type": "example",
                "lineCount": 1249,
                "lineCountEnd": 1270
            },
            {
                "name": "ex:corank2",
                "createdAt": "example 1.1.1",
                "type": "label",
                "lineCount": 449,
                "lineCountEnd": null
            },
            {
                "name": "le:nec",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 467,
                "lineCountEnd": null
            },
            {
                "name": "384",
                "createdAt": "Continuous-time case",
                "type": "ref",
                "lineCount": 470,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Signed undirected graph case",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "subsubsection",
                "lineCount": 756,
                "lineCountEnd": null
            },
            {
                "name": "385",
                "createdAt": "Signed undirected graph case",
                "type": "cite",
                "lineCount": 494,
                "lineCountEnd": null
            },
            {
                "name": "386",
                "createdAt": "Signed undirected graph case",
                "type": "cite",
                "lineCount": 495,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "theorem 1.1.1.1",
                "createdAt": "Signed digraph case",
                "type": "theorem",
                "lineCount": 539,
                "lineCountEnd": 549
            },
            {
                "name": "thm:signed-undirected-cont",
                "createdAt": "theorem 1.1.1.1",
                "type": "label",
                "lineCount": 499,
                "lineCountEnd": null
            },
            {
                "name": "387",
                "createdAt": "Signed undirected graph case",
                "type": "cite",
                "lineCount": 511,
                "lineCountEnd": null
            },
            {
                "name": "388",
                "createdAt": "Signed undirected graph case",
                "type": "cite",
                "lineCount": 511,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Signed digraph case",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "subsubsection",
                "lineCount": 775,
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
                "name": "thm:signed-digraph1",
                "createdAt": "theorem 1.1.1.1",
                "type": "label",
                "lineCount": 540,
                "lineCountEnd": null
            },
            {
                "name": "389",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 550,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "remark 1.1.1.1",
                "createdAt": "Signed digraph case",
                "type": "remark",
                "lineCount": 622,
                "lineCountEnd": 626
            },
            {
                "name": "390",
                "createdAt": "remark 1.1.1.1",
                "type": "ref",
                "lineCount": 554,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "example 1.1.1.1",
                "createdAt": "Signed digraph case",
                "type": "example",
                "lineCount": 667,
                "lineCountEnd": 677
            },
            {
                "name": "example-PF-notPF_stable",
                "createdAt": "example 1.1.1.1",
                "type": "label",
                "lineCount": 559,
                "lineCountEnd": null
            },
            {
                "name": "example-PF-notPF_unstable",
                "createdAt": "example 1.1.1.1",
                "type": "label",
                "lineCount": 573,
                "lineCountEnd": null
            },
            {
                "name": "example4",
                "createdAt": "example 1.1.1.1",
                "type": "label",
                "lineCount": 588,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "corollary 1.1.1.1",
                "createdAt": "Signed digraph case",
                "type": "corollary",
                "lineCount": 631,
                "lineCountEnd": 633
            },
            {
                "name": "cor:weight-bal1",
                "createdAt": "corollary 1.1.1.1",
                "type": "label",
                "lineCount": 605,
                "lineCountEnd": null
            },
            {
                "name": "391",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 618,
                "lineCountEnd": null
            },
            {
                "name": "392",
                "createdAt": "remark 1.1.1.1",
                "type": "cite",
                "lineCount": 623,
                "lineCountEnd": null
            },
            {
                "name": "393",
                "createdAt": "remark 1.1.1.1",
                "type": "ref",
                "lineCount": 623,
                "lineCountEnd": null
            },
            {
                "name": "394",
                "createdAt": "remark 1.1.1.1",
                "type": "ref",
                "lineCount": 624,
                "lineCountEnd": null
            },
            {
                "name": "395",
                "createdAt": "remark 1.1.1.1",
                "type": "ref",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "name": "396",
                "createdAt": "remark 1.1.1.1",
                "type": "ref",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "name": "397",
                "createdAt": "remark 1.1.1.1",
                "type": "ref",
                "lineCount": 625,
                "lineCountEnd": null
            },
            {
                "name": "lem:psd-EP",
                "createdAt": "corollary 1.1.1.1",
                "type": "label",
                "lineCount": 631,
                "lineCountEnd": null
            },
            {
                "name": "398",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 634,
                "lineCountEnd": null
            },
            {
                "name": "example:Ls_nonpsd",
                "createdAt": "example 1.1.1.1",
                "type": "label",
                "lineCount": 638,
                "lineCountEnd": null
            },
            {
                "name": "example:Ls_nonpsd_posdiag",
                "createdAt": "example 1.1.1.1",
                "type": "label",
                "lineCount": 652,
                "lineCountEnd": null
            },
            {
                "name": "ex:norm-not-nec",
                "createdAt": "example 1.1.1.1",
                "type": "label",
                "lineCount": 667,
                "lineCountEnd": null
            },
            {
                "name": "399",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 681,
                "lineCountEnd": null
            },
            {
                "name": "400",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 681,
                "lineCountEnd": null
            },
            {
                "name": "401",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 682,
                "lineCountEnd": null
            },
            {
                "name": "402",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 682,
                "lineCountEnd": null
            },
            {
                "name": "403",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 689,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "lemma 1.1.1.1",
                "createdAt": "Signed digraph case",
                "type": "lemma",
                "lineCount": 693,
                "lineCountEnd": 699
            },
            {
                "name": "lemma:irreducible",
                "createdAt": "lemma 1.1.1.1",
                "type": "label",
                "lineCount": 693,
                "lineCountEnd": null
            },
            {
                "name": "404",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 700,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Discrete-time protocol",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 1041,
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
                "counter": 1,
                "name": "example 1.1",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "example",
                "lineCount": 733,
                "lineCountEnd": 739
            },
            {
                "name": "ex:Wcorank2",
                "createdAt": "example 1.1",
                "type": "label",
                "lineCount": 713,
                "lineCountEnd": null
            },
            {
                "name": "405",
                "createdAt": "example 1.1",
                "type": "ref",
                "lineCount": 714,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "lemma 1.1",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "lemma",
                "lineCount": 725,
                "lineCountEnd": 727
            },
            {
                "name": "le:nec:DT",
                "createdAt": "lemma 1.1",
                "type": "label",
                "lineCount": 725,
                "lineCountEnd": null
            },
            {
                "name": "406",
                "createdAt": "Consensus on time-invariant signed digraphs",
                "type": "ref",
                "lineCount": 728,
                "lineCountEnd": null
            },
            {
                "name": "W:corank-nostrictdom",
                "createdAt": "example 1.1",
                "type": "label",
                "lineCount": 734,
                "lineCountEnd": null
            },
            {
                "name": "407",
                "createdAt": "example 1.1",
                "type": "ref",
                "lineCount": 735,
                "lineCountEnd": null
            },
            {
                "name": "408",
                "createdAt": "example 1.1",
                "type": "ref",
                "lineCount": 737,
                "lineCountEnd": null
            },
            {
                "name": "409",
                "createdAt": "Signed undirected graph case",
                "type": "ref",
                "lineCount": 758,
                "lineCountEnd": null
            },
            {
                "name": "thm:symm-sign",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 760,
                "lineCountEnd": null
            },
            {
                "name": "410",
                "createdAt": "Signed undirected graph case",
                "type": "ref",
                "lineCount": 766,
                "lineCountEnd": null
            },
            {
                "name": "eq:ev-stoch-matrix",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 782,
                "lineCountEnd": null
            },
            {
                "name": "411",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 788,
                "lineCountEnd": null
            },
            {
                "name": "412",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 792,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "corollary 1.1.1",
                "createdAt": "Discrete-time case",
                "type": "corollary",
                "lineCount": 1240,
                "lineCountEnd": 1246
            },
            {
                "name": "cor:weight-bal-DT",
                "createdAt": "corollary 1.1.1",
                "type": "label",
                "lineCount": 841,
                "lineCountEnd": null
            },
            {
                "name": "413",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 855,
                "lineCountEnd": null
            },
            {
                "name": "lem:irreduc_W_suff",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 861,
                "lineCountEnd": null
            },
            {
                "name": "414",
                "createdAt": "Signed digraph case",
                "type": "ref",
                "lineCount": 865,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Consensus on time-varying signed digraphs",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 870,
                "lineCountEnd": null
            },
            {
                "name": "sec:TV",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "label",
                "lineCount": 871,
                "lineCountEnd": null
            },
            {
                "name": "eq:form_c",
                "createdAt": "Problem formulation",
                "type": "label",
                "lineCount": 889,
                "lineCountEnd": null
            },
            {
                "name": "415",
                "createdAt": "Problem formulation",
                "type": "cite",
                "lineCount": 892,
                "lineCountEnd": null
            },
            {
                "name": "eq:form_d",
                "createdAt": "Problem formulation",
                "type": "label",
                "lineCount": 897,
                "lineCountEnd": null
            },
            {
                "name": "416",
                "createdAt": "Problem formulation",
                "type": "ref",
                "lineCount": 905,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Continuous-time protocol",
                "createdAt": "Consensus on time-varying signed digraphs",
                "type": "subsection",
                "lineCount": 916,
                "lineCountEnd": null
            },
            {
                "name": "sec:CT",
                "createdAt": "Continuous-time protocol",
                "type": "label",
                "lineCount": 916,
                "lineCountEnd": null
            },
            {
                "name": "417",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
                "lineCount": 918,
                "lineCountEnd": null
            },
            {
                "name": "tem:nec",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 920,
                "lineCountEnd": null
            },
            {
                "name": "418",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "name": "419",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "name": "420",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
                "lineCount": 925,
                "lineCountEnd": null
            },
            {
                "name": "421",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
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
                "name": "ex:ce1",
                "createdAt": "example 1.1.1",
                "type": "label",
                "lineCount": 940,
                "lineCountEnd": null
            },
            {
                "name": "422",
                "createdAt": "example 1.1.1",
                "type": "ref",
                "lineCount": 958,
                "lineCountEnd": null
            },
            {
                "name": "423",
                "createdAt": "example 1.1.1",
                "type": "ref",
                "lineCount": 963,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "remark 1.1.1",
                "createdAt": "Discrete-time protocol",
                "type": "remark",
                "lineCount": 1090,
                "lineCountEnd": 1092
            },
            {
                "name": "rem:normal",
                "createdAt": "remark 1.1.1",
                "type": "label",
                "lineCount": 980,
                "lineCountEnd": null
            },
            {
                "name": "424",
                "createdAt": "remark 1.1.1",
                "type": "cite",
                "lineCount": 981,
                "lineCountEnd": null
            },
            {
                "name": "th:form_c",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 985,
                "lineCountEnd": null
            },
            {
                "name": "425",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
                "lineCount": 988,
                "lineCountEnd": null
            },
            {
                "name": "re:cons",
                "createdAt": "remark 1.1.1",
                "type": "label",
                "lineCount": 991,
                "lineCountEnd": null
            },
            {
                "name": "426",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "name": "427",
                "createdAt": "Continuous-time protocol",
                "type": "cite",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "name": "428",
                "createdAt": "Continuous-time protocol",
                "type": "ref",
                "lineCount": 996,
                "lineCountEnd": null
            },
            {
                "name": "429",
                "createdAt": "example 1.1.1",
                "type": "ref",
                "lineCount": 1001,
                "lineCountEnd": null
            },
            {
                "name": "eq:limit",
                "createdAt": "example 1.1.1",
                "type": "label",
                "lineCount": 1018,
                "lineCountEnd": null
            },
            {
                "name": "lem:nec:DT",
                "createdAt": "lemma 1.1.1",
                "type": "label",
                "lineCount": 1046,
                "lineCountEnd": null
            },
            {
                "name": "430",
                "createdAt": "Discrete-time protocol",
                "type": "ref",
                "lineCount": 1049,
                "lineCountEnd": null
            },
            {
                "name": "431",
                "createdAt": "Discrete-time protocol",
                "type": "ref",
                "lineCount": 1050,
                "lineCountEnd": null
            },
            {
                "name": "432",
                "createdAt": "Discrete-time protocol",
                "type": "ref",
                "lineCount": 1051,
                "lineCountEnd": null
            },
            {
                "name": "433",
                "createdAt": "Discrete-time protocol",
                "type": "ref",
                "lineCount": 1051,
                "lineCountEnd": null
            },
            {
                "name": "ex:cout_ex_d1",
                "createdAt": "example 1.1.1",
                "type": "label",
                "lineCount": 1060,
                "lineCountEnd": null
            },
            {
                "name": "th:form_d",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 1084,
                "lineCountEnd": null
            },
            {
                "name": "434",
                "createdAt": "Discrete-time protocol",
                "type": "ref",
                "lineCount": 1087,
                "lineCountEnd": null
            },
            {
                "name": "re:disc",
                "createdAt": "remark 1.1.1",
                "type": "label",
                "lineCount": 1090,
                "lineCountEnd": null
            },
            {
                "name": "435",
                "createdAt": "remark 1.1.1",
                "type": "ref",
                "lineCount": 1091,
                "lineCountEnd": null
            },
            {
                "name": "436",
                "createdAt": "Discrete-time protocol",
                "type": "ref",
                "lineCount": 1094,
                "lineCountEnd": null
            },
            {
                "name": "ex:cout_ex_d2",
                "createdAt": "example 1.1.1",
                "type": "label",
                "lineCount": 1096,
                "lineCountEnd": null
            },
            {
                "name": "437",
                "createdAt": "example 1.1.1",
                "type": "cite",
                "lineCount": 1107,
                "lineCountEnd": null
            },
            {
                "name": "ex:cout_ex_d3",
                "createdAt": "example 1.1.1",
                "type": "label",
                "lineCount": 1113,
                "lineCountEnd": null
            },
            {
                "name": "438",
                "createdAt": "example 1.1.1",
                "type": "ref",
                "lineCount": 1114,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "More general sufficient conditions for the time-varying case",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1121,
                "lineCountEnd": null
            },
            {
                "name": "sec:CLF",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "label",
                "lineCount": 1122,
                "lineCountEnd": null
            },
            {
                "name": "439",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "cite",
                "lineCount": 1124,
                "lineCountEnd": null
            },
            {
                "name": "440",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "ref",
                "lineCount": 1125,
                "lineCountEnd": null
            },
            {
                "name": "441",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "ref",
                "lineCount": 1125,
                "lineCountEnd": null
            },
            {
                "name": "th:CLF1",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 1134,
                "lineCountEnd": null
            },
            {
                "name": "eq:CLF1",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 1138,
                "lineCountEnd": null
            },
            {
                "name": "442",
                "createdAt": "Continuous-time case",
                "type": "ref",
                "lineCount": 1142,
                "lineCountEnd": null
            },
            {
                "name": "443",
                "createdAt": "Continuous-time case",
                "type": "cite",
                "lineCount": 1176,
                "lineCountEnd": null
            },
            {
                "name": "444",
                "createdAt": "Continuous-time case",
                "type": "cite",
                "lineCount": 1176,
                "lineCountEnd": null
            },
            {
                "name": "445",
                "createdAt": "Continuous-time case",
                "type": "ref",
                "lineCount": 1184,
                "lineCountEnd": null
            },
            {
                "name": "cor:CLF2",
                "createdAt": "corollary 1.1.1",
                "type": "label",
                "lineCount": 1185,
                "lineCountEnd": null
            },
            {
                "name": "446",
                "createdAt": "example 1.1.1",
                "type": "cite",
                "lineCount": 1210,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Discrete-time case",
                "createdAt": "More general sufficient conditions for the time-varying case",
                "type": "subsection",
                "lineCount": 1218,
                "lineCountEnd": null
            },
            {
                "name": "th:CLF-DT1",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 1222,
                "lineCountEnd": null
            },
            {
                "name": "eq:CLF-DT1",
                "createdAt": "theorem 1.1.1",
                "type": "label",
                "lineCount": 1226,
                "lineCountEnd": null
            },
            {
                "name": "447",
                "createdAt": "Discrete-time case",
                "type": "ref",
                "lineCount": 1230,
                "lineCountEnd": null
            },
            {
                "name": "448",
                "createdAt": "Discrete-time case",
                "type": "ref",
                "lineCount": 1237,
                "lineCountEnd": null
            },
            {
                "name": "cor:CLF-DT2",
                "createdAt": "corollary 1.1.1",
                "type": "label",
                "lineCount": 1240,
                "lineCountEnd": null
            },
            {
                "name": "449",
                "createdAt": "example 1.1.1",
                "type": "cite",
                "lineCount": 1265,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Extension to bipartite consensus",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1272,
                "lineCountEnd": null
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
                "name": "450",
                "createdAt": "Extension to bipartite consensus",
                "type": "cite",
                "lineCount": 1297,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "definition 1.1",
                "createdAt": "Extension to bipartite consensus",
                "type": "definition",
                "lineCount": 1357,
                "lineCountEnd": 1359
            },
            {
                "name": "def:cbip-ons",
                "createdAt": "definition 1.1",
                "type": "label",
                "lineCount": 1300,
                "lineCountEnd": null
            },
            {
                "name": "451",
                "createdAt": "Extension to bipartite consensus",
                "type": "cite",
                "lineCount": 1303,
                "lineCountEnd": null
            },
            {
                "name": "452",
                "createdAt": "Extension to bipartite consensus",
                "type": "ref",
                "lineCount": 1307,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "proposition 1.1",
                "createdAt": "Extension to bipartite consensus",
                "type": "proposition",
                "lineCount": 1362,
                "lineCountEnd": 1364
            },
            {
                "name": "prop:bip",
                "createdAt": "proposition 1.1",
                "type": "label",
                "lineCount": 1311,
                "lineCountEnd": null
            },
            {
                "name": "453",
                "createdAt": "Extension to bipartite consensus",
                "type": "ref",
                "lineCount": 1320,
                "lineCountEnd": null
            },
            {
                "name": "454",
                "createdAt": "Extension to bipartite consensus",
                "type": "ref",
                "lineCount": 1324,
                "lineCountEnd": null
            },
            {
                "name": "455",
                "createdAt": "Extension to bipartite consensus",
                "type": "ref",
                "lineCount": 1324,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "theorem 1.1",
                "createdAt": "Extension to bipartite consensus",
                "type": "theorem",
                "lineCount": 1326,
                "lineCountEnd": 1341
            },
            {
                "counter": 1,
                "name": "remark 1.1",
                "createdAt": "Extension to bipartite consensus",
                "type": "remark",
                "lineCount": 1344,
                "lineCountEnd": 1349
            },
            {
                "name": "456",
                "createdAt": "remark 1.1",
                "type": "cite",
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
                "name": "457",
                "createdAt": "Extension to bipartite consensus",
                "type": "ref",
                "lineCount": 1366,
                "lineCountEnd": null
            },
            {
                "name": "458",
                "createdAt": "Extension to bipartite consensus",
                "type": "ref",
                "lineCount": 1366,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Conclusions",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1376,
                "lineCountEnd": null
            },
            {
                "counter": 1,
                "name": "Time-invariant digraphs",
                "createdAt": "DOCUMENT",
                "type": "section",
                "lineCount": 1431,
                "lineCountEnd": null
            },
            {
                "name": "app:TI",
                "createdAt": "Time-invariant digraphs",
                "type": "label",
                "lineCount": 1432,
                "lineCountEnd": null
            },
            {
                "name": "459",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1434,
                "lineCountEnd": null
            },
            {
                "name": "460",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1437,
                "lineCountEnd": null
            },
            {
                "name": "461",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1437,
                "lineCountEnd": null
            },
            {
                "name": "462",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
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
                "name": "463",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1498,
                "lineCountEnd": null
            },
            {
                "name": "464",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1499,
                "lineCountEnd": null
            },
            {
                "name": "465",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1502,
                "lineCountEnd": null
            },
            {
                "name": "466",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1512,
                "lineCountEnd": null
            },
            {
                "name": "467",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1513,
                "lineCountEnd": null
            },
            {
                "name": "468",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1514,
                "lineCountEnd": null
            },
            {
                "name": "469",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1517,
                "lineCountEnd": null
            },
            {
                "name": "470",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
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
                "name": "471",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1545,
                "lineCountEnd": null
            },
            {
                "name": "472",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1559,
                "lineCountEnd": null
            },
            {
                "name": "473",
                "createdAt": "Time-invariant digraphs",
                "type": "cite",
                "lineCount": 1561,
                "lineCountEnd": null
            },
            {
                "name": "474",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1578,
                "lineCountEnd": null
            },
            {
                "name": "475",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1588,
                "lineCountEnd": null
            },
            {
                "name": "476",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1591,
                "lineCountEnd": null
            },
            {
                "name": "477",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1599,
                "lineCountEnd": null
            },
            {
                "name": "478",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1601,
                "lineCountEnd": null
            },
            {
                "name": "479",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1603,
                "lineCountEnd": null
            },
            {
                "name": "480",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1610,
                "lineCountEnd": null
            },
            {
                "name": "481",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1617,
                "lineCountEnd": null
            },
            {
                "name": "482",
                "createdAt": "Time-invariant digraphs",
                "type": "ref",
                "lineCount": 1618,
                "lineCountEnd": null
            },
            {
                "counter": 1,
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
                "name": "483",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1628,
                "lineCountEnd": null
            },
            {
                "name": "484",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1645,
                "lineCountEnd": null
            },
            {
                "name": "485",
                "createdAt": "Time-varying digraphs",
                "type": "cite",
                "lineCount": 1647,
                "lineCountEnd": null
            },
            {
                "name": "486",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1657,
                "lineCountEnd": null
            },
            {
                "name": "487",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
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
                "name": "488",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1724,
                "lineCountEnd": null
            },
            {
                "name": "489",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
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
                "name": "490",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1756,
                "lineCountEnd": null
            },
            {
                "name": "491",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1776,
                "lineCountEnd": null
            },
            {
                "name": "492",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1781,
                "lineCountEnd": null
            },
            {
                "name": "493",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1782,
                "lineCountEnd": null
            },
            {
                "name": "494",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
                "lineCount": 1794,
                "lineCountEnd": null
            },
            {
                "name": "495",
                "createdAt": "Time-varying digraphs",
                "type": "ref",
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
                "source": "331",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "331",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "332",
                "target": "Song2018Network",
                "type": "cite"
            },
            {
                "source": "332",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "333",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "334",
                "target": "bronski2014spectral",
                "type": "cite"
            },
            {
                "source": "335",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "335",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "335",
                "target": "Zelazo17Robustness",
                "type": "cite"
            },
            {
                "source": "335",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "336",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "336",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "336",
                "target": "shi2013agreement",
                "type": "cite"
            },
            {
                "source": "337",
                "target": "Proskurnikov2014Consensus",
                "type": "cite"
            },
            {
                "source": "337",
                "target": "Xia16Structural",
                "type": "cite"
            },
            {
                "source": "337",
                "target": "Liu2017Exponential",
                "type": "cite"
            },
            {
                "source": "337",
                "target": "meng2018uniform",
                "type": "cite"
            },
            {
                "source": "338",
                "target": "Jiang2019Output",
                "type": "cite"
            },
            {
                "source": "339",
                "target": "Blondel2005Convergence",
                "type": "cite"
            },
            {
                "source": "340",
                "target": "Proskurnikov2014Consensus",
                "type": "cite"
            },
            {
                "source": "340",
                "target": "Xia16Structural",
                "type": "cite"
            },
            {
                "source": "340",
                "target": "Liu2017Exponential",
                "type": "cite"
            },
            {
                "source": "341",
                "target": "liberzon2003switching",
                "type": "cite"
            },
            {
                "source": "341",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "342",
                "target": "Johnson2004Matrices",
                "type": "cite"
            },
            {
                "source": "342",
                "target": "Noutsos2006Perron",
                "type": "cite"
            },
            {
                "source": "342",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "343",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "343",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "344",
                "target": "Altafini2016Minimal",
                "type": "cite"
            },
            {
                "source": "345",
                "target": "fontan2021properties",
                "type": "cite"
            },
            {
                "source": "346",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "346",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "346",
                "target": "Chen2016Characterization",
                "type": "cite"
            },
            {
                "source": "346",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "347",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "348",
                "target": "Chesi1",
                "type": "cite"
            },
            {
                "source": "349",
                "target": "Meng2017Stability",
                "type": "cite"
            },
            {
                "source": "349",
                "target": "Valcher2016Stability",
                "type": "cite"
            },
            {
                "source": "350",
                "target": "Eger2016Limits",
                "type": "cite"
            },
            {
                "source": "351",
                "target": "Formasini2011Stability",
                "type": "cite"
            },
            {
                "source": "351",
                "target": "Meng2017Stability",
                "type": "cite"
            },
            {
                "source": "351",
                "target": "ZHENG2018294",
                "type": "cite"
            },
            {
                "source": "352",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "353",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "354",
                "target": "sec:pre",
                "type": "ref"
            },
            {
                "source": "355",
                "target": "sec:TI",
                "type": "ref"
            },
            {
                "source": "356",
                "target": "sec:TV",
                "type": "ref"
            },
            {
                "source": "357",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "358",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "359",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "360",
                "target": "Wang22Multiagent",
                "type": "cite"
            },
            {
                "source": "361",
                "target": "sec:TI",
                "type": "ref"
            },
            {
                "source": "362",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "363",
                "target": "sec:TV",
                "type": "ref"
            },
            {
                "source": "364",
                "target": "Wang22Multiagent",
                "type": "cite"
            },
            {
                "source": "365",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "366",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "367",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "368",
                "target": "shi2019dynamics",
                "type": "cite"
            },
            {
                "source": "369",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "369",
                "target": "Belardo2014Balancedness",
                "type": "cite"
            },
            {
                "source": "369",
                "target": "Hou2003Laplacian",
                "type": "cite"
            },
            {
                "source": "370",
                "target": "Hershkowitz1985Lyapunov",
                "type": "cite"
            },
            {
                "source": "371",
                "target": "Meyer2000",
                "type": "cite"
            },
            {
                "source": "372",
                "target": "Olesky2009Mv-matrices",
                "type": "cite"
            },
            {
                "source": "373",
                "target": "Noutsos2006Perron",
                "type": "cite"
            },
            {
                "source": "374",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "375",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "376",
                "target": "Noutsos2008Rechability",
                "type": "cite"
            },
            {
                "source": "377",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "378",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "379",
                "target": "def:pf",
                "type": "ref"
            },
            {
                "source": "380",
                "target": "Altafini2015Predictable",
                "type": "cite"
            },
            {
                "source": "381",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "382",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "383",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "384",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "385",
                "target": "Chen2016Definitness",
                "type": "cite"
            },
            {
                "source": "385",
                "target": "Chen2016Characterization",
                "type": "cite"
            },
            {
                "source": "385",
                "target": "Zelazo2014Definitness",
                "type": "cite"
            },
            {
                "source": "386",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "387",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "388",
                "target": "9137633",
                "type": "cite"
            },
            {
                "source": "389",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "390",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "391",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "392",
                "target": "altafini2019investigating",
                "type": "cite"
            },
            {
                "source": "393",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "394",
                "target": "lem:psd-EP",
                "type": "ref"
            },
            {
                "source": "395",
                "target": "example:Ls_nonpsd",
                "type": "ref"
            },
            {
                "source": "396",
                "target": "example:Ls_nonpsd_posdiag",
                "type": "ref"
            },
            {
                "source": "397",
                "target": "ex:norm-not-nec",
                "type": "ref"
            },
            {
                "source": "398",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "399",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "400",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "401",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "402",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "403",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "404",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "405",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "406",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "407",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "408",
                "target": "ex:Wcorank2",
                "type": "ref"
            },
            {
                "source": "409",
                "target": "thm:signed-undirected-cont",
                "type": "ref"
            },
            {
                "source": "410",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "411",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "412",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "413",
                "target": "app:TI",
                "type": "ref"
            },
            {
                "source": "414",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "415",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "416",
                "target": "def:cons",
                "type": "ref"
            },
            {
                "source": "417",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "418",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "419",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "420",
                "target": "tem:nec",
                "type": "ref"
            },
            {
                "source": "421",
                "target": "ex:ce1",
                "type": "ref"
            },
            {
                "source": "422",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "423",
                "target": "fig:1",
                "type": "ref"
            },
            {
                "source": "424",
                "target": "horn2012matrix",
                "type": "cite"
            },
            {
                "source": "425",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "426",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "427",
                "target": "olfati2004consensus",
                "type": "cite"
            },
            {
                "source": "428",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "429",
                "target": "ex:ce1",
                "type": "ref"
            },
            {
                "source": "430",
                "target": "le:nec:DT",
                "type": "ref"
            },
            {
                "source": "431",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "432",
                "target": "lem:nec:DT",
                "type": "ref"
            },
            {
                "source": "433",
                "target": "lem:irreduc_W_suff",
                "type": "ref"
            },
            {
                "source": "434",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "435",
                "target": "re:cons",
                "type": "ref"
            },
            {
                "source": "436",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "437",
                "target": "wu2007synchronization",
                "type": "cite"
            },
            {
                "source": "438",
                "target": "ex:cout_ex_d1",
                "type": "ref"
            },
            {
                "source": "439",
                "target": "liberzon2003switching",
                "type": "cite"
            },
            {
                "source": "439",
                "target": "lin2009stability",
                "type": "cite"
            },
            {
                "source": "440",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "441",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "442",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "443",
                "target": "Chesi1",
                "type": "cite"
            },
            {
                "source": "444",
                "target": "Cla-HPCLF1",
                "type": "cite"
            },
            {
                "source": "445",
                "target": "th:CLF1",
                "type": "ref"
            },
            {
                "source": "446",
                "target": "Dayawansa1",
                "type": "cite"
            },
            {
                "source": "447",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "448",
                "target": "cor:CLF2",
                "type": "ref"
            },
            {
                "source": "449",
                "target": "Theys2005",
                "type": "cite"
            },
            {
                "source": "450",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "451",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "452",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "453",
                "target": "app:TV",
                "type": "ref"
            },
            {
                "source": "454",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "455",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "456",
                "target": "Altafini2013Consensus",
                "type": "cite"
            },
            {
                "source": "457",
                "target": "sec:CLF",
                "type": "ref"
            },
            {
                "source": "458",
                "target": "sec:bipartite",
                "type": "ref"
            },
            {
                "source": "459",
                "target": "prop:signed-prop",
                "type": "ref"
            },
            {
                "source": "460",
                "target": "ex:corank2",
                "type": "ref"
            },
            {
                "source": "461",
                "target": "example-PF-notPF_unstable",
                "type": "ref"
            },
            {
                "source": "462",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "463",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "464",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "465",
                "target": "lemma:no_two_pos-eig",
                "type": "ref"
            },
            {
                "source": "466",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "467",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "468",
                "target": "thm:signed-digraph1",
                "type": "ref"
            },
            {
                "source": "469",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "470",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "471",
                "target": "lem:psd-EP",
                "type": "ref"
            },
            {
                "source": "472",
                "target": "lemma:irreducible",
                "type": "ref"
            },
            {
                "source": "473",
                "target": "Bullo-Lectures",
                "type": "cite"
            },
            {
                "source": "474",
                "target": "lemma:ev_exp_pos",
                "type": "ref"
            },
            {
                "source": "475",
                "target": "le:nec:DT",
                "type": "ref"
            },
            {
                "source": "476",
                "target": "le:nec",
                "type": "ref"
            },
            {
                "source": "477",
                "target": "thm:symm-sign",
                "type": "ref"
            },
            {
                "source": "478",
                "target": "thm:PFforEvPos",
                "type": "ref"
            },
            {
                "source": "479",
                "target": "lemma:no_two_pos-eig",
                "type": "ref"
            },
            {
                "source": "480",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "481",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "482",
                "target": "eq:ev-stoch-matrix",
                "type": "ref"
            },
            {
                "source": "483",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "484",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "485",
                "target": "horn2012matrix",
                "type": "cite"
            },
            {
                "source": "486",
                "target": "th:form_d",
                "type": "ref"
            },
            {
                "source": "487",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "488",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "489",
                "target": "th:CLF1",
                "type": "ref"
            },
            {
                "source": "490",
                "target": "cor:weight-bal1",
                "type": "ref"
            },
            {
                "source": "491",
                "target": "th:form_c",
                "type": "ref"
            },
            {
                "source": "492",
                "target": "th:CLF-DT1",
                "type": "ref"
            },
            {
                "source": "493",
                "target": "cor:weight-bal-DT",
                "type": "ref"
            },
            {
                "source": "494",
                "target": "prop:bip",
                "type": "ref"
            },
            {
                "source": "495",
                "target": "le:nec",
                "type": "ref"
            }
        ],
        "environments": [
            {
                "name": "section",
                "text": "section",
                "counter": 1,
                "countersShouldReset": [
                    "subsection"
                ],
                "countersShouldUpdate": []
            },
            {
                "name": "theorem",
                "text": "Theorem",
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
                "name": "lemma",
                "text": "Lemma",
                "counter": 1,
                "countersShouldReset": [],
                "countersShouldUpdate": []
            },
            {
                "name": "corollary",
                "text": "Corollary",
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
const defaultPaperY = 0;
const nodeColor = "gray"
const defaultNodeRadius = 3;
const envRectHeight = 50;


function lineGraph(nodes, links, envs) {


    allNodes = nodes;
    links = links;
    console.log("env: " + envs[0]);

    allNodes.sort(compare);

    // create dict of nodes for lookup later  
   
    allNodes.forEach(node => {
        nodeDict[node.name] = node;
        nodeDict[node.name].radius = defaultNodeRadius;
        nodeDict[node.name].y = 1;
    })

    
    // for each ref make target Bigger  

    links.forEach(link => {
        nodeDict[link.target].radius += 2;
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
        .attr("transform", "scale(0.5)");
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

    
    // svg group for environments 
    var svgEnvs = svg
        .selectAll('rect')
        .data(envNodes)
        .enter().append('g');

    var envRect = svgEnvs
        .append('rect')
        .attr('width', getLinecountEnd)
        .attr('height', envRectHeight)
        .attr('fill', "green")
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

    envRect.on("click", function (selected) {

        textEnvNode.attr("visibility", function (node) { return showName(node, selected) });
        envRect.attr("fill", function (node) { return selectNode(node, selected) });
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

        envRect
            .attr('x', node => getlineCount(node, new_xScale));

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
    console.log("lineCount: " + node.lineCount)
    console.log("lineCountEnd: " + node.lineCountEnd)
    return node.lineCountEnd - node.lineCount;
}

function getEnvNodeY(node) {
    return defaultNodeY - (envRectHeight/2);
}

function getRadiusNode(node) {
    if (node.type == "refNode") {
        return 1; //defaultNodeRadius
    } else if (node.type == "paper") {
        return 1; //defaultNodeRadius
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




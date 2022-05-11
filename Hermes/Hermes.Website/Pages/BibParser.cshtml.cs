using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using Hermes.Website.Services;
using Hermes.Website.Models;
using System.Text.Json;
using System.Text;

namespace Hermes.Website.Pages
{
	public class BibParserModel : PageModel
	{

		IWebHostEnvironment environment;

		private BibParserService BibService;
		private TexParserService TexService;
		private JsonCreaterService JsonService;
		private BBLParserService BBLParser;
		private MultiTexService MultiService;
		private LineCountService LineCountService;


		public BibParserModel(
			IWebHostEnvironment environment,
			BibParserService bibService,
			TexParserService texService,
			JsonCreaterService jsonService,
			BBLParserService bblParser,
			MultiTexService multiService,
			LineCountService lineCountService)
		{
			this.environment = environment;
			BibService = bibService;
			TexService = texService;
			JsonService = jsonService;
			BBLParser = bblParser;
			MultiService = multiService;
			LineCountService = lineCountService;
		}

		public string UploadFilePath { get; set; }

		public void OnGet()
		{
			string testString = @"

\documentclass[sigconf,nonacm]{acmart}

\newcommand\vldbdoi{10.14778/3523210.3523211}
\newcommand\vldbpages{XXX-XXX}
\newcommand\vldbvolume{15}
\newcommand\vldbissue{7}
\newcommand\vldbyear{2022}
\newcommand\vldbauthors{\authors}
\newcommand\vldbtitle{\shorttitle}
\newcommand\vldbavailabilityurl{https://github.com/tomereven/Prefix-Filter}
\newcommand\vldbpagestyle{empty}

\makeatletter
\renewcommand{\paragraph}{%
  \@startsection{paragraph}{4}{\z@}%
  {-.5\baselineskip \@plus -2\p@ \@minus -.2\p@}{-3.5\p@}%
  {\normalfont\normalsize\bfseries}%
}

\renewcommand\subsubsection{\@startsection{subsubsection}{3}{\z@}%
   {-.75\baselineskip \@plus -2\p@ \@minus -.2\p@}%
   {.25\baselineskip}%
   {\bfseries\section@raggedright}}
\makeatother

\PassOptionsToPackage{prologue,table}{xcolor}
\RequirePackage{etex}
\usepackage{etex}%
\usepackage[flushleft]{threeparttable}
\usepackage{calc}
\usepackage{booktabs, multirow} %
\usepackage{soul}%
\usepackage[table]{xcolor} %
\usepackage{comment}
\usepackage{ifthen}
\usepackage{xspace}
\usepackage{float}
\usepackage{subcaption}
\usepackage{amsmath}
\interdisplaylinepenalty=2500
\usepackage{amsthm}
\usepackage{amstext}
\usepackage{amsfonts}
\usepackage{bm}
\usepackage{wrapfig}

\usepackage{url}
\usepackage{mathdots}
\usepackage{mathtools}
\usepackage{thmtools}
\usepackage{tikz}
\usetikzlibrary{positioning, calc, fit, shapes,intersections,arrows,matrix, topaths}
\usetikzlibrary{decorations,decorations.pathreplacing,patterns, shadows}
\usepackage{graphics} %
\usetikzlibrary{arrows.meta, %
                bending,     %
                patterns     %
               }
\DeclareRobustCommand\circled[1]{\tikz[baseline=(char.base)]{
            \node[shape=circle,draw,inner sep=.7pt] (char) {#1};}}
\usepackage[linesnumbered,noresetcount,vlined,ruled,procnumbered]{algorithm2e}
\SetKwComment{Comment}{$\triangleright$\ }{}

\usepackage[inline]{enumitem}
\usepackage{environ}
\usepackage{dsfont}

\usepackage{yfonts}
\usepackage{graphicx}
\usepackage{delimset}
\usepackage{color}   %
\usepackage{hyperref}
\hypersetup{
    colorlinks=true, %
    linktoc=all,     %
    linkcolor=blue,  %
    citecolor  =blue,
}


\usepackage[T1]{fontenc}
\usepackage{makecell}

\usepackage{siunitx}
\usepackage{etoolbox}
\usepackage{pifont}
\usepackage[normalem]{ulem}
\usepackage{makecell}

\usepackage{csquotes}
\usepackage{balance}
\MakeOuterQuote{}

		\usepackage{nameref,cleveref
	}
\crefname{theorem
}
{ Theorem}
{ Theorems}
\crefname
{ definition}
{ Definition}
{ Definitions}
\crefname
{ proposition}
{ Proposition}
{ Propositions}
\crefname
{ lemma}
{ Lemma}
{ Lemmas}
\crefname
{ claim}
{ Claim}
{ Claims}
\crefname
{ corollary}
{ Corollary}
{ Corollaries}
\crefname
{ property}
{ Property}
{ Properties}
\crefname
{ algorithm}
{ Algorithm}
{ Algorithms}
\crefname
{ listing}
{ Listing}
{ Listings}
\crefname
{ section}
{\S}
{\S\S}
\crefname
{ appendix}
{ Appendix}
{ Appendices}
\crefname
{ figure}
{ Figure}
{ Figures}
\crefname
{ table}
{ Table}
{ Tables}
\newcommand
{\crefrangeconjunction}
{ --}

\renewcommand\theadfont
{\bfseries\sffamily}


\DeclareMathOperator *{\argmax}
{ argmax}
\DeclareMathOperator *{\argmin}
{ argmin}
\usepackage
{ amsmath}
\usepackage
{ amsthm}
\newtheorem
{ theorem}
{ Theorem}%
\newtheorem
{ lemma}
[theorem]{ Lemma}
\newtheorem
{ corollary}
[theorem]{ Corollary}
\newtheorem
{ conclusion}
[theorem]{ Conclusion}
\newtheorem
{ claim}
[theorem]{ Claim}
\newtheorem
{ remark}
[theorem]{ Remark}
\newtheorem
{ proposition}
[theorem]{ Proposition}
\newtheorem
{ assumption}
[theorem]{ Assumption}
\newtheorem
{ definition}
[theorem]{ Definition}
\newtheorem
{ invariant}
[theorem]{ Invariant}
\newtheorem
{ claim2}
[theorem]{ Claim}
\newtheorem
{ observation}
[theorem]{ Observation}
\newtheorem
{ problem}
[theorem]{ Problem}
\newtheorem
{ spec}
[theorem]{ Specification}
\newenvironment
{ proofsketch}
{%
	\renewcommand{\proofname}
	{ Proof Sketch}\proof}
{\endproof}

\newcommand
{\etal}
{\textit{ et al.}\xspace}

\newcommand
{\filter}
[1]
{
	{#1}\xspace}
\newcommand{\AF}
		{\filter{ Adjusting - Filter} }
\newcommand{\PF}
		{\filter{ prefix filter} }
\newcommand{\VQF}
		{\filter{ vector quotient filter} }
\newcommand{\TC}
		{\filter{ two choicer} }
\newcommand{\CF}
		{\filter{ cuckoo filter} }
\newcommand{\MF}
		{\filter{ Morton filter} }
\newcommand{\BF}
		{\filter{ Bloom filter} }
\newcommand{\BBF}
		{\filter{ blocked Bloom filter} }
\newcommand{\LBBF}
		{\filter{ Light - BBF} }
\newcommand{\BBFx}
		{\filter{ BBF - Flex} }
\newcommand{\BE}
		{\filter{ BE filter} }
\newcommand{\Bbuck}
		{\filter{ Basic - Bucket} }
\newcommand{\Pbuck}
		{\filter{ Prefix - Bucket} }
\newcommand{\Abuck}
		{\filter{ Adjusting - Bucket} }
\newcommand{\apf}
		{\filter{ adjusting pocket-filter} }
\newcommand{\spare}
		{\filter{ spare} }
\newcommand{\Dict}
		{\textnormal{\textsf{ Dict} } }
\newcommand{\Filter}
		{\textnormal{\textsf{ Filter} } }
\newcommand{\onelevel}
		{\textnormal{\textsf{ 1--Level--Filter} }\xspace}
\newcommand{\KVD}
		{\textnormal{\textsf{ KV - Dict} } }
\newcommand{\Motel}
		{\textnormal{\textsf{ Motel} } }
\newcommand{\DictPH}
		{\textnormal{\textsf{ Dict + PH} } }
\newcommand{\PH}
		{\textnormal{\textsf{ PH} } }
\newcommand{\fp}
		{\textnormal{\textsf{ fp} } }
\newcommand{\MSDict}
		{\textnormal{\textsf{ MS - Dict} } }
\newcommand{\Ret}
		{\textnormal{\textsf{ Ret} } }
\newcommand{\fpp}
		{\textnormal{\textsf{ FPP} }\xspace}
\newcommand{\fpr}
		{\textnormal{ false positive rate}\xspace}
\newcommand{\yes}
		{\textnormal{``\textsf{ Yes} ''}\xspace}
\newcommand{\no}
		{\textnormal{``\textsf{ No} ''}\xspace}
\newcommand{\bucket}
		{\textnormal{\textsf{bucket}}\xspace}
\newcommand{\Pbad}{P_{\mathsf{bad}}}

\DeclareMathOperator{\buckets}{\textnormal{\textsf{buckets}}}
\newcommand{\conc}{\circ}
\newcommand{\UU}{\mathcal{U}}
\newcommand{\VV}{\mathcal{V}}
\newcommand{\ZZ}{\mathcal{Z}}
\newcommand{\UUh}{\hat{\mathcal{U}}}
\newcommand{\uh}{\hat{u}}
\newcommand{\MM}{\mathcal{M}}
\newcommand{\MMt}{\widetilde{\mathcal{M}}}
\newcommand{\DD}{\mathcal{D}}
\newcommand{\su}{s}
\newcommand{\DDh}{\widehat{\mathcal{D}}}
\newcommand{\BB}{\mathcal{B}}
\newcommand{\NN}{\mathbb{N}}
\newcommand{\CC}{\mathcal{C}}
\newcommand{\calS}{\mathcal{S}}
\newcommand{\Universe}{\UU}
\newcommand{\mpd}{m_{pd}}
\newcommand{\npd}{n_{pd}}
\newcommand{\nbin}{n_{bin}}
\newcommand{\npf}{B}
\newcommand{\mmtl}{m_{mtl}}
\newcommand{\hF}{\hat{F}}
\newcommand{\hc}{h^c}
\newcommand{\hd}{h^d}
\newcommand{\hi}{h^i}
\newcommand{\hq}{h^q}
\newcommand{\hr}{h^r}
\newcommand{\qsi}{q^{si}}
\newcommand{\tqv}{\tilde{q}_v}
\newcommand{\hb}{h^b}
\newcommand{\hf}{\hat{f}}
\newcommand{\mh}{\hat{m}}
\newcommand{\hatc}{\hat{c}}
\newcommand{\hatl}{\hat{\ell}}
\newcommand{\tf}{\tilde{f}}
\newcommand{\tl}{\tilde{\ell}}
\newcommand{\thash}{\tilde{h}}
\newcommand{\bh}{\bar{h}}
\newcommand{\Bin}[2]{\mathcal{B}_{#1}^{#2}}

\newcommand{\THRESH}{\ensuremath{o\parentheses{\frac{\log n}{(\log \log n)^2}}}}
\newcommand{\mumacro}{\sqrt{
		\frac{3}{m}\cdot\ln(6w^{\beta/3})}}
\newcommand{\loglog}{\log\log}

\newcommand{\FP}{\text{FP}}
\newcommand{\Err}{\text{Err}}
\renewcommand{\epsilon}{\varepsilon}
\newcommand{\eps}{\varepsilon}
\newcommand{\epsfp}{\eps^{+}}
\newcommand{\epsfn}{\eps^{-}}

\newcommand{\ADV}{\textsf{ADV}}
\newcommand{\mynull}{\textsf{null}}

\DeclarePairedDelimiter{\floor}{\lfloor}{\rfloor}
\DeclarePairedDelimiter{\ceil}{\lceil}{\rceil}

\newcommand{\size}[1]{\ensuremath{\left|#1\right|}}
\newcommand{\set}[1]{\left\{ #1 \right\}}
\newcommand{\parentheses}[1]{\left(#1\right)}
\newcommand{\expectation}[2]{\mathbb{E}_{#1}\left[ #2 \right]}
\newcommand{\Exp}[1]{\mathbb{E}\left[ #1 \right]}
\newcommand{\variance}[1]{\mathbb{V}\left[ #1 \right]}
\renewcommand{\Pr}[1]{{\mathrm{Pr}}\left[ #1 \right]}
\newcommand{\PrOver}[2]{{\mathrm{Pr}_{#2}}\left[ #1 \right]}
\DeclareMathOperator{\Prr}{\mathrm{Pr}}
\DeclareMathOperator{\Prob}{\ensuremath{\mathrm{Pr}}}
\DeclareMathOperator{\hash}{\textnormal{\textsf{hash}}}
\DeclareMathOperator{\hashcode}{\textnormal{\textsf{hashcode}}}
\DeclareMathOperator{\checkin}{\textnormal{\textsf{check-in}}}
\DeclareMathOperator{\checkout}{\textnormal{\textsf{check-out}}}
\DeclareMathOperator{\gen}{\textnormal{\textsf{gen}}}
\DeclareMathOperator{\myread}{\textnormal{\textsf{read}}}
\DeclareMathOperator{\mywrite}{\textnormal{\textsf{write}}}
\DeclareMathOperator{\stamp}{\textnormal{\textsf{stamp}}}
\DeclareMathOperator{\motelkey}{\textnormal{\textsf{motel-key}}}
\DeclareMathOperator{\mquery}{\textnormal{\textsf{mem-query}}}
\DeclareMathOperator{\query}{\textnormal{\textsf{query}}}
\DeclareMathOperator{\hquery}{\textnormal{\textsf{hash-query}}}
\DeclareMathOperator{\vquery}{\textnormal{\textsf{val-query}}}
\DeclareMathOperator{\val}{\textnormal{\textsf{val}}}
\DeclareMathOperator{\cquery}{\textnormal{\textsf{count}}}
\DeclareMathOperator{\bin}{\textnormal{\textsf{bin}}}
\DeclareMathOperator{\bank}{\textnormal{\textsf{bank}}}
\DeclareMathOperator{\pd}{\textnormal{\textsf{pd}}}
\DeclareMathOperator{\ph}{\textnormal{\textsf{hashcode}}}
\DeclareMathOperator{\predict}{\textnormal{\textsf{predict}}}
\DeclareMathOperator{\perfect}{\pi}
\DeclareMathOperator{\update}{\textnormal{\textsf{update}}}
\DeclareMathOperator{\ins}{\textnormal{\textsf{insert}}}
\DeclareMathOperator{\nop1}{\textnormal{\textsf{nop}}}
\DeclareMathOperator{\init}{\textnormal{\textsf{initialize}}}
\DeclareMathOperator{\destroy}{\textnormal{\textsf{destroy}}}
\DeclareMathOperator{\inc}{\textnormal{\textsf{increment}}}
\DeclareMathOperator{\dec}{\textnormal{\textsf{decrement}}}
\DeclareMathOperator{\pop}{\textnormal{\textsf{pop}}}
\DeclareMathOperator{\del}{\textnormal{\textsf{delete}}}
\DeclareMathOperator{\delete}{\del}
\DeclareMathOperator{\motelp}{\textnormal{\textsf{motel-ptr}}}
\DeclareMathOperator{\PDP}{\textnormal{\textsf{PD-ptr}}}
\DeclareMathOperator{\hashp}{\textnormal{\textsf{hash-ptr}}}
\DeclareMathOperator{\revhashp}{\textnormal{\textsf{rev-hash-ptr}}}
\DeclareMathOperator{\DBp}{\textnormal{\textsf{DB-ptr}}}
\DeclareMathOperator{\op}{\textnormal{\textsf{op}}}
\DeclareMathOperator{\out}{\textnormal{\textsf{out}}}
\DeclareMathOperator{\mult}{\textnormal{\textsf{mult}}}
\DeclareMathOperator{\hheader}{\textnormal{header}}
\DeclareMathOperator{\bbody}{\textnormal{body}}
\DeclareMathOperator{\PD}{\textnormal{\textsf{PD}}}
\DeclareMathOperator{\APF}{\textnormal{\textsf{APF}}}
\DeclareMathOperator{\PDE}{\ensuremath{\textnormal{\textsf{PDEnv}}}}
\DeclareMathOperator{\PDC}{\textnormal{\textsf{PDCirc}}}
\DeclareMathOperator{\EPP}{\textnormal{\textsf{EA-PD-PTR}}}
\DeclareMathOperator{\EAR}{\textnormal{\textsf{EA-REM}}}
\DeclareMathOperator{\EAPD}{\textnormal{\textsf{EA-PD}}}
\DeclareMathOperator{\DB}{\textnormal{\textsf{DB}}}
\DeclareMathOperator{\M}{\textnormal{\textsf{Motel}}}
\DeclareMathOperator{\CSD}{\textnormal{\textsf{CSD}}}
\DeclareMathOperator{\BD}{\textnormal{\textsf{BD}}}
\DeclareMathOperator{\CD}{\textnormal{\textsf{CD}}}
\DeclareMathOperator{\VarPD}{\textnormal{\textsf{VarPD}}}
\DeclareMathOperator{\motel}{\textnormal{\textsf{Motel}}}
\DeclareMathOperator{\nexti}{\textnormal{\textsf{next-interval}}}
\DeclareMathOperator{\VarCSD}{\textnormal{\textsf{VarCSD}}}
\DeclareMathOperator{\CountDictSmall}{\textnormal{\textsf{CountPD}}}
\DeclareMathOperator{\SID}{\textnormal{\textsf{SID}}}
\DeclareMathOperator{\ptr}{\textnormal{\textsf{ptr}}}
\DeclareMathOperator{\polylog}{\textnormal{\textsf{polylog}}}
\DeclareMathOperator{\poly}{\textnormal{\textsf{poly}}}
\DeclareMathOperator{\readd}{\textnormal{\textsf{read}}}
\DeclareMathOperator{\writee}{\textnormal{\textsf{write}}}
\DeclareMathOperator{\lllog}{\log^{(3)}}
\DeclareMathOperator{\llog}{\log^{(2)}}
\newcommand{\ind}[1]{\mathds{1}_{#1}}
\newcommand{\indD}{\ind{\DD(t)}}
\DeclareMathOperator{\MPH}{\textnormal{\textsf{MPH}}}
\DeclareMathOperator{\Select}{\textnormal{\textsf{Select}}}
\DeclareMathOperator{\Rank}{\textnormal{\textsf{Rank}}}



\newcommand{\cProbVar}{\frac{200\pi k}{0.99\cdot n}} %
\newcommand{\cgam}{\frac{1}{\sqrt{2\pi k}}}
\newcommand{\cdom}{\sqrt{2\pi k}}


\DeclareMathOperator{\MaxCap}{\mathsf{B}}



\newcommand{\NPDf}{N_{PDf}}
\newcommand{\NMf}{N_{Mf}}
\newcommand{\NFPc}{N_{FPc}}
\newcommand{\Novf}{N_{ovf}}
\newcommand{\ccomp}{c_1}
\newcommand{\ceps}{c_2}
\newcommand{\cmtl}{c_3}
\newcommand{\mtlmacro}[1]{\floor{\frac{\bin(#1)\cdot B}{\log^{\cmtl} n}}}
\DeclareMathOperator{\mtl}{\textnormal{\textsf{mtl}}}

\newif\ifnotes
\notestrue
\ifnotes
	\newcommand{\tomer}[1]{{\ifnotes \scriptsize \textcolor{red}{Tomer: {#1}} \fi}}
	\newcommand{\adam}[1]{{\ifnotes \scriptsize \textcolor{green}{Adam: {#1}} \fi}}
	\newcommand{\guy}[1]{\ifnotes {\noindent \scriptsize  \textcolor{blue} {Guy: {#1}}} \fi{}}
\else
	\newcommand{\tomer}[1]{}
	\newcommand{\guy}[1]{}
	\newcommand{\adam}[1]{}
\fi

\newcommand{\mathsc}[1]{{\text{\normalfont\scshape#1}}}


\renewcommand\theadalign{bc}
\renewcommand\theadfont{\normalfont}
\renewcommand\theadgape{\Gape[4pt]}
\renewcommand\cellgape{\Gape[4pt]}




\begin{document}
\title{Prefix Filter: Practically and Theoretically Better Than Bloom}

\author{Tomer Even}
\affiliation{%
	\institution{Tel Aviv University}
	\country{Israel}
}
\author{Guy Even}
\affiliation{%
	\institution{Tel Aviv University}
	\country{Israel}
}
\author{Adam Morrison}
\affiliation{%
	\institution{Tel Aviv University}
	\country{Israel}
}
\begin{abstract}

Many applications of approximate membership query data structures, or \emph{filters}, require only an \emph{incremental} filter that supports insertions but not deletions.
However, the design space of incremental filters is missing a ``sweet spot'' filter that combines space efficiency, fast queries, and fast insertions.
Incremental filters, such as the Bloom and blocked Bloom filter, are not space efficient.
Dynamic filters (i.e., supporting deletions), such as the cuckoo or vector quotient filter, are space efficient but do not exhibit consistently fast insertions and queries.

In this paper, we propose the \emph{\PF}, an incremental filter that addresses the above challenge: (1) its space (in bits) is similar to state-of-the-art dynamic filters; (2) query throughput is high and is comparable to that of the \CF; and (3) insert throughput is high with overall build times faster than those of the \VQF and \CF by $1.39\times$--$1.46\times$ and $3.2\times$--$3.5\times$, respectively. %
We present a rigorous analysis of the \PF that holds also for practical set sizes (i.e., $n=2^{25}$). The analysis deals with the probability of failure, false positive rate, and probability that an operation requires accessing more than a single cache line.

\end{abstract}




\maketitle

\pagestyle{\vldbpagestyle}
\begingroup\small\noindent\raggedright\textbf{PVLDB Reference Format:}\\
\vldbauthors. \vldbtitle. PVLDB, \vldbvolume(\vldbissue): \vldbpages, \vldbyear.\\
\href{https://doi.org/\vldbdoi}{doi:\vldbdoi}
\endgroup
\begingroup
\renewcommand\thefootnote{}\footnote{\noindent
	This work is licensed under the Creative Commons BY-NC-ND 4.0 International License. Visit \url{https://creativecommons.org/licenses/by-nc-nd/4.0/} to view a copy of this license. For any use beyond those covered by this license, obtain permission by emailing \href{mailto:info@vldb.org}{info@vldb.org}. Copyright is held by the owner/author(s). Publication rights licensed to the VLDB Endowment. \\
	\raggedright Proceedings of the VLDB Endowment, Vol. \vldbvolume, No. \vldbissue\ %
	ISSN 2150-8097. \\
	\href{https://doi.org/\vldbdoi}{doi:\vldbdoi} \\
}\addtocounter{footnote}{-1}\endgroup

\ifdefempty{\vldbavailabilityurl}{}{
	\vspace{.3cm}
	\begingroup\small\noindent\raggedright\textbf{PVLDB Artifact Availability:}\\
	The source code, data, and/or other artifacts have been made available at \url{\vldbavailabilityurl}.
	\endgroup
}

\section{Introduction}

\paragraph{What is a filter?}
An approximate membership query (AMQ) data structure, or \emph{filter}~\cite{bloom1970spacetime}, is a data structure for approximately maintaining a set of keys.
A filter is specified by three parameters: $\UU$ - the universe from which keys are taken, $n$ - an upper bound on the number of keys in the set, and $\eps$ - an upper bound on the false positive rate.
A query for a key in the set must output \yes, while the output of a query for a key not in the set is \yes with probability at most $\eps$.

\paragraph{What are filters used for?}
The main advantage of filters over data structures that offer exact representations of sets (i.e., dictionaries/hash tables) is the reduced space consumption which leads to increased throughput.
Exact representation of a set of $n$ keys from a universe of size $u$ requires at least $\log_2(u/n)$ bits per key.%
\footnote{Cuckoo hashing, for example, requires in practice $2\log u$ bit per keys~\cite{dblp:journals/jal/paghr04,10.1145/2592798.2592820} (throughput deteriorates when a cuckoo hash table is more than half full).
}
On the other hand, a filter requires at least $\log_2(1/\eps)$ bit per key~\cite{carter1978exact}.
Namely, the space per key in a filter need not depend on the universe size.
The reduced space allows for storing the filter in RAM, which leads to higher throughput.

The typical setting in which filters help in increasing performance is by saving futile searches in some slow (compared to a filter) data store. To reduce the frequency of \emph{negative queries} (i.e., queries for keys that are not in the data store), every lookup is preceded by a query to a filter.
A negative filter response guarantees that the key is not in the data store, and saves the need for a slow futile access to the data store.
The filter reduces the frequency of negative queries by a
factor of at least $1/\eps$, where $\eps$ is the upper bound on
filter's false positive rate.
It is therefore important to
design filters with high throughput specifically for negative queries.

Examples of applications that employ the above paradigm include databases~\cite{HashingMethods}, storage systems~\cite{LSM-Survey}, massive data processing~\cite{Synopses-for-Massive-Data}, and similar domains.
Filter efficiency can dictate overall performance, as filters can consume much of the system's execution time~\cite{SplinterDB,Chucky,SlimDB} and/or memory~\cite{dayan2017monkey,PebblesDB,PartIndexFilter}.

\paragraph{Importance of incremental filters.}
Many filter use cases require only an \emph{incremental} filter, which supports only insertions, and do not require a \emph{dynamic} filter that also supports deletions.
For instance, numerous systems~\cite{KVstoreAnalysis,RocksDBAnalysis,conway_et_al:LIPIcs:2018:9043,SplinterDB,dayan2017monkey,PebblesDB,rocksdb,LSM-SSD,Chucky,Dostoevsky,chang2008bigtable,Cassandra,bLSM,cLSM} use log-structured merge (LSM) tree~\cite{DBLP:journals/acta/ONeilCGO96} variants as their storage layer. In these systems, the LSM tree data in secondary storage consists of multiple immutable files called \emph{runs}. Each run has a corresponding filter in main memory, which is built when the run is created and is subsequently only queried (as runs are immutable).
Consequently, these systems only need an incremental filter.%

\paragraph{The problem.}
The design space of incremental filters is missing a ``sweet spot'' filter that combines space efficiency, fast queries, and fast insertions. Incremental filters, such as the \BBF~\cite{putze2010cache}, are fast but not space efficient. For a typical error rate of $\eps=2.5$\%, the \BBF uses up to $1.6\times$ the space of the information theoretic lower bound of $n \log_2(1/\eps)$ bits~\cite{carter1978exact}.
State-of-the-art dynamic filters (which can serve as incremental filters)
are space efficient but do not exhibit consistently fast insertions and queries.
The \CF~\cite{dblp:conf/conext/fanakm14} has the fastest queries, but its insertions slow down to a crawl as filter occupancy grows close to $n$---e.g., we observe a $27\times$ slowdown (see~\cref{sec:evaluation}).
In the \VQF~\cite{pandey2021vector}, insertion throughput does not decline as dramatically as filter occupancy grows, but query throughput is lower than the \CF.
When filter occupancy is high, the \CF's query throughput is about
$52\%/79\%$ faster for negative/positive queries, respectively.
Finally, %
in the quotient filter~\cite{bender2012thrash} insertions and queries are slower than in the \VQF.

\paragraph{The prefix filter.}
In this paper, we propose the \PF, an incremental filter that addresses the above challenge:
\begin{enumerate*}[label=(\arabic*)]
  \item
  its space is close to optimal, similarly to state-of-the-art dynamic filters;
  \item it has fast queries, comparable to those of the \CF; and
  \item it has fast insertions, with overall build time faster than those of the \VQF and \CF by $1.39\times$--$1.46\times$ and $3.2\times$--$3.5\times$, respectively.
\end{enumerate*}
Compared to the \BBF (BBF), the \PF is slower, but far more space efficient at low error rates.
The \PF exhibits a good trade-off in many cases, where the BBF's high space usage is limiting but dynamic filter speeds (of $<35$\,nanoseconds/query~\cite{pandey2021vector}) are not.

The \PF shares the common high-level structure of modern dynamic filters (hence, its space efficiency) but it exploits the lack of deletion support to simultaneously obtain fast queries and insertions.
This common structure is a hash table that stores short hashes of the keys, called \emph{fingerprints}, with filters differing in how they resolve hash table collisions. For example, the \CF employs cuckoo hashing~\cite{dblp:journals/jal/paghr04}, whose insertion time depends on table occupancy, whereas the \VQF uses power-of-two-choices hashing, whose insertions are constant-time.
Crucially, however, these collision resolution schemes result in every filter query performing \emph{two} memory accesses
for negative queries, typically incurring two cache misses (because each memory access is to a random address).

The \PF uses a novel solution to the collision resolution problem, in which typically only a \emph{single} cache line is accessed per filter operation.
Our starting point is the theoretical work of~\cite{bercea2019fullydynamic,DBLP:conf/swat/BerceaE20}, which describes a dynamic space-efficient filter that we call the \BE. In a nutshell,
the \BE is a two-level hash table for fingerprints, where the first level stores most of the fingerprints.
In contrast to cuckoo or power-of-two-choice hashing, insertions try to insert the new key's fingerprint into a \emph{single} bin in the first level. If that bin is full, the fingerprint is inserted into the second level, called the \emph{spare}.
Bins are implemented with a space-efficient data structure called a \emph{pocket dictionary} ($\PD$), which employs the Fano-Elias encoding~\cite{fano1971number,elias1974efficient,carter1978exact}.
The \spare, however, can be any hash table scheme that reaches high occupancy (about $95\%$) with low failure probability.

The \BE always accesses two cache lines per negative query because the key is searched for in both levels.
The \PF solves this problem by \emph{choosing} which key to forward to the \spare (upon insertion to a full bin) instead of simply forwarding the currently inserted key.
Specifically, upon insertion to a full bin, the \PF forwards the maximal fingerprint among the fingerprints stored in the full bin plus the new key.
This maintains the invariant that each bin stores a maximal prefix of the fingerprints that are mapped to it.
We refer to this invariant as the \emph{Prefix Invariant}.
The Prefix Invariant saves the need of forwarding a negative query to the \spare if the searched fingerprint should have resided in the stored prefix.
This simple idea results in most queries completing with \emph{one} cache line access.
We prove that the probability that a query searches the \spare is at most $\frac1{\sqrt{2\pi k}}$, where $k$ is the capacity of the first-level bins~(\cref{sec:prefix-ma}). In our prototype with $k=25$, roughly $92\%$ of negative queries access one cache line.

To further improve the filter's speed, we design a novel implementation of the pocket dictionary structure that implements a first-level bin.
Our implementation exploits vector (SIMD) instructions to decode the Elias-Fano encoding~\cite{elias1974efficient,fano1971number,carter1978exact} used in the PD without performing expensive $\Select$~\cite{pibiri2021rank,DBLP:journals/corr/MulaKL16,DBLP:journals/corr/PandeyBJ17} computations.
Our implementation may be of independent interest, as the PD (or variants) is at the heart of other filters~\cite{einziger2017tinyset, pandey2021vector}.

Another challenge in achieving a practical filter based on the \BE has to do with the size and implementation of the \spare.
The asymptotic analysis of the \BE (and~\cite{arbitman2010backyard}) proves that the number of keys stored in the \spare is negligible, and it is therefore suggested to implement the \spare using a dictionary.
In practice, however, $6\%$--$8\%$ of the keys are forwarded to the \spare because the asymptotics ``start working'' for impractically large values of $n$.
Therefore, a practical implementation needs to provide a high throughput implementation of the \spare that is also space efficient. 
To this end, the \PF implements the \spare using a filter.

We rigorously analyze the \PF. The mathematical analysis of the false positive rate, size of the spare, and the fraction of queries that access one cache line does not ``hide'' any constants. Therefore, this analysis holds both for practical parameter values (e.g., $n$ as small as $2^{25}$) and asymptotically.
This is in contrast to filters such as the \CF, whose theoretical asymptotic space requirements are worse than the \BF~\cite{dblp:conf/conext/fanakm14}.
We also empirically demonstrate the \PF's high throughput and space efficiency.

\paragraph{Contributions.} The contributions of this paper are summarized below.
\begin{itemize}[leftmargin=*]
   \item \textbf{The \PF:}
    The \PF is space-efficient, supports insertions and membership queries, and supports sets of arbitrary size (i.e., not restricted to powers of two).
  \item \textbf{Rigorous analysis:} The \PF is accompanied by a mathematical analysis that proves upper bounds on the
      probability of failure, false positive rate, and probability that an operation requires accessing more than a single cache line.
  \item \textbf{Implementation:}
        We implement the \PF in C++. The implementation includes an efficient PD that avoids expensive computations such as $\Select$ computations (\cref{sec:optimize}). The \PF code is available at \url{https://github.com/tomereven/Prefix-Filter}.
  \item\textbf{Evaluation:}
        We show that the \PF's build time (from empty to full) is faster than that of the \VQF and \CF by $1.39\times$--$1.46\times$ and $3.2\times$--$3.5\times$, respectively.
        Throughput of negative queries in the \PF is comparable to that of the \CF and faster than the \VQF by about $1.38\times$--$1.46\times$ (\cref{sec:evaluation}).
\end{itemize}



\section{Preliminaries}\label{sec:back}

\paragraph{Problem statement: Filters.}
A \emph{filter} is a data structure used for approximate representation of a set a of \emph{keys}.
A filter receives three parameters upon creation: (1) $\UU$, the universe from which keys are taken; (2) $n$, an upper bound on the cardinality of the set; and (3) $\eps$, an upper bound on the false positive rate.
An \emph{incremental} filter supports two types of operations: $\ins(x)$ and $\query(x)$.
An $\ins(x)$ adds $x$ to the set. We denote by $\DD$ the set defined by the sequence of $\ins$ operations.
Responses for queries allow one-sided errors: if $x \in \DD$, then $\query(x)=\text{\yes}$; if $x\not\in \DD$, then $\Pr{\query(x)=\text{\yes}}\leq \eps$.
The probability space is over the randomness of the filter (e.g., choice
of hash function) and does not depend on the set or the queried
key.

\paragraph{Types of queries.}
A query for a key in the set is a \emph{positive query}.
A query for a key not in the set is a \emph{negative query}.
\subsection{Terminology}

In this section we define various terms used throughout the paper.
The reader may wish to skip this section and return to it upon encountering unfamiliar terms and notation.

\paragraph{Notation.}
All logarithms in this paper are base 2.
For $x>0$, we use $[x]$ to denote the set $\set{0,1,\ldots,\floor{x}-1}$.

\paragraph{Dictionary.} A \emph{membership-dictionary} (or \emph{dictionary}) is a data structure used for exact representation of sets $\DD\subseteq\UU$.
Namely, responses to membership queries are error-free.

\paragraph{Bins.} Dictionaries and filters often employ a partitioning technique that randomly maps keys to \emph{bins}.
This partitioning reduces the size of the problem from the size of the set to (roughly) the average size of a bin.
Each bin is a membership-dictionary that stores keys mapped to the same bin.
The \emph{capacity} of a bin is the maximum number of keys it can store. A bin is \emph{full} if it contains the maximal number of keys it can store.
A bin \emph{overflows} if one attempts to insert a new key to it while it is full.


\paragraph{Load vs. load factor}
The \emph{load} of a filter is the ratio between the cardinality of the set stored in the filter and its maximum size, i.e., $|\DD|/n$.
The \emph{load factor} of a table of $m$ bins, each of capacity $k$, is the ratio between the total number of keys stored in the bins and $m \cdot k$.
We purposefully distinguish between the concepts of load and load factor. ``Load'' is well-defined for every filter, whereas ``load factor'' is defined only for a table of bins---and a filter is not necessarily such a table, and even when it is, typically $mk > n$ (see~\cref{sec:related}).

\paragraph{Failure.} A filter \emph{fails} if it is unable to complete an $\ins(x)$ operation although $|\DD| < n$. 
Filter designs aspire to minimize failure probability.




\paragraph{Fingerprint.}
The fingerprint $\fp(k)$ of a key $k$ is the image of a random hash function.
The length of a fingerprint is usually much shorter than the length of the key.

\paragraph{Quotienting.}
Quotienting is a technique for reducing the number of bits needed to
represent a key~\cite{Knuth}.
Let $Q,R>0$.
Consider a universe $[Q]\times [R]$.
Consider a key $x=(q,r)\in[Q]\times [R]$. We refer to $r$ as the \emph{remainder} of $x$ and refer to $q$ as the \emph{quotient} of $x$.
In quotienting, a set $\DD\subset [Q]\times [R]$ is	stored in an array $A[0:(Q-1)])$ of ``lists'' as follows:
a key $(q,r)\in[Q]\times [R]$ is inserted by adding $r$ to the list $A[q]$.






\section{Related Work} \label{sec:related}

There are two main families of filter designs: \emph{bit-vector} and \emph{hash table of fingerprints} designs.
We compare filter designs that have been implemented according to their space requirements (bits per key), number of cache misses incurred by a negative query, and (for hash tables of fingerprints) the maximal load factor of the underlying hash table, beyond which the filter might occasionally fail.
\Cref{table:the-space} summarizes the following discussion and the properties of the \PF's.


\begin{table}
	\caption{Comparison of practical filters' space requirements, average cache misses per negative query (CM/NQ), and maximal load factor (for hash tables of fingerprints).
		For the \PF, $\gamma \triangleq \frac{1}{\sqrt{2\pi k}}$, where $k$ denotes the capacity of its hash table bins. The space formula is derived in~\cref{sec:the-pf:params}.
        \newline $^\dagger$ We assume (throughout the paper) a cuckoo filter with bins of 4 fingerprints and 3 bits of space overhead (which is faster than other \CF variants~\cite{dblp:conf/conext/fanakm14,pandey2021vector}) and $n < 2^{64}$, as asymptotically CF fingerprints are not constant in size~\cite{dblp:conf/conext/fanakm14}.
	}
	\begin{tabular}{l|p{3.2cm}lc}
		\toprule
		\textbf{Filter} & \textbf{Bits Per Key}                                                      & \textbf{CM$/$NQ} & \thead{\textbf{Max. Load} \\  \textbf{Factor} } \\
		\midrule
		\textsf{BF}     & $1.44\cdot \log(1/\eps)$                                                    & $\approx 2$      & -                         \\
		\textsf{BBF}    & $\approx10$--$40$\% above \textsf{BF}                                          & 1                & -                         \\
		\midrule
		\textsf{CF}$^\dagger$     & $1/\alpha \, (\log (1/\eps) +3)$                                            & 2                & $94\%$                    \\
		\textsf{VQF}    & $1/\alpha \, (\log (1/\eps)+2.9)$                                           & 2                & $94.5\%$                  \\
		\midrule
		\textbf{\textsf{PF}}    & $\pmb{\frac{(1 + \gamma)}{\alpha}\cdot(\log(1/\eps) +2) + \frac{\gamma}{\alpha}}$ & $\pmb{\leq 1+2\gamma}$  & $\pmb{100\%}$                   \\
		\bottomrule
	\end{tabular}
	\label{table:the-space}
\end{table}



In a \emph{bit-vector} design, every key is mapped to a subset of locations in a bit-vector, and is considered in the set if all the bits of the bit-vector in these locations are set. %
Bit-vector filters, such as the Bloom~\cite{bloom1970spacetime} and blocked Bloom~\cite{putze2010cache} filter (BF and BBF), have a non-negligible multiplicative space overhead relative to the information theoretic minimum.
For example, a \BF uses $1.44\times$ bits per key than the minimum of $\log(1/\eps)$.

The \emph{hash table of fingerprints} design paradigm was proposed by
Carter~\etal~\cite{carter1978exact}.
In this paradigm, keys are hashed to short fingerprints which are inserted in a hash table. Designs differ in (1) table load balancing technique (e.g., cuckoo~\cite{dblp:conf/conext/fanakm14,breslow2018morton}, Robin Hood~\cite{bender2012thrash}, or power-of-two-choices~\cite{pandey2021vector} hashing); and (2) fingerprint storage techniques (e.g., explicitly storing full fingerprints~\cite{dblp:conf/conext/fanakm14}, using quotienting to explicitly store only fingerprint suffixes~\cite{bender2012thrash}, lookup tables~\cite{arbitman2010backyard}, or using the Fano-Elias encoding~\cite{pandey2021vector,einziger2017tinyset}).

Modern hash table of fingerprint designs use essentially the same space.
The hash table explicitly stores $\log(1/\eps)$ fingerprint bits, resulting in space requirement of $(\log(1/\eps + c)) \cdot 1/\alpha$ bits per key, where $c$ depends on the (per-key) overhead of hash table and encoding metadata, and $\alpha$ is the hash table's load factor.
Ideally, $\alpha$ can reach $1$, but load balancing techniques often have a maximal feasible load factor, $\alpha_{\max}$, beyond which insertions are likely to fail (or drastically slow down)~\cite{dblp:conf/conext/fanakm14,breslow2018morton,pandey2021vector,bender2012thrash}.
The relevant filters thus size their tables with $n/\alpha_{\max}$ entries, so that at full filter load, the load factor is $\alpha_{\max}$.

Viewed as incremental filters, existing hash table of fingerprints filters have limitations that are solved by the \PF (PF).
In the Cuckoo filter (CF)~\cite{dblp:conf/conext/fanakm14}, insertions slow down dramatically (over $27\times$) as load increases, resulting in slow build times.
The \VQF (VQF) has stable insertion speed, but in return, its queries are slower than the \CF's~\cite{pandey2021vector}.
Negative queries in the cuckoo and vector quotient filters always access two table bins and thus incur two cache misses.
The Morton~\cite{breslow2018morton} and quotient~\cite{bender2012thrash} filters both have insertions and queries that are slower than those of the \VQF.

The \PF has both fast insertions and queries that typically incur only one cache miss, and comparable space requirements to other hash table of fingerprints designs.
Like the \VQF and TinySet~\cite{einziger2017tinyset}, the \PF's hash table bins are succinct data structure based on the Fano-Elias encoding~\cite{fano1971number,elias1974efficient}.
While TinySet queries also access a single bin, its elaborate encoding has no practical, efficient implementation.
In contrast, we describe a practical bin implementation based on vector (SIMD) instructions.







\section{The Prefix Filter} \label{sec:the-pf}

The \PF is a ``hash table of fingerprints'' incremental filter design, distinguished by the property that its load balancing scheme requires queries and insertions to typically access only a \emph{single} hash table bin, even at high load factors.
This property translates into filter operations requiring a single cache miss (memory access) in practical settings, where the parameters are such that each \PF bin fits in one cache line.

\paragraph{High-level description.}
The \PF is a two-level structure, with each level storing key fingerprints. The first level, called the \emph{bin table}, is an array of bins to which inserted fingerprints are mapped~(\cref{sec:the-pf:bins}). Each bin is a dictionary with constant-time operations, whose capacity and element size depend on the desired false positive rate.
The second level, called the \emph{\spare}, is an incremental filter whose universe consists of key fingerprints~(\cref{sec:the-pf:spare}).

The bin table stores most fingerprints.
The \spare stores (i.e., approximates) the multiset of fingerprints which do not ``fit'' in the bin table; specifically, these are fingerprints whose bins are full and are larger than all fingerprints in their bin.
We prove that typically, at most $\frac{1.1}{\sqrt{2\pi k}}$ of the fingerprints are thus \emph{forwarded} for storage in the \spare,
where $k$ is the capacity of the bins~(\cref{sec:spare-analysis}).

The crux of the algorithm is its above policy for choosing which fingerprints to store in the \spare.
This policy maintains the invariant that each bin stores a maximal prefix of the fingerprints that are mapped to it, which allows queries to deduce if they need to search the \spare. We prove that as a result, queries need to search the \spare only with probability at most $\frac1{\sqrt{2\pi k}}$ (\cref{sec:prefix-ma}), so most queries complete with a single bin query.

Due to the influence of $k$ on the \spare's dataset size and its probability of being accessed, the \PF needs $k$ to be as large as possible while simultaneously fitting a bin within a single cache line. To this end, our \PF prototype implements bins with a succinct dictionary data structure called a \emph{pocket dictionary}~(\cref{sec:optimize}).
Conceptually, however, the \PF can work with any dictionary, and so in this section, we view a bin simply as an abstract dictionary datatype.

\subsection{First Level: Bin Table} \label{sec:the-pf:bins}

The bin table consists of an array of $m$ bins. 
Each bin has capacity $k$ and holds elements from $[s]$. 
The values of $m$, $k$, and $s$ are determined by the dataset size $n$ and desired false positive rate $\eps$, specified at filter creation time. 
We defer discussion of these value settings to~\cref{sec:the-pf:params}.

Keys are mapped to \emph{fingerprints} with a universal hash function $\FP$.
The bin table applies quotienting to store these fingerprints without needing to explicitly store all bits of each fingerprint.
Specifically, we view the fingerprint of a key $x$ as a pair $\FP(x)=(\bin(x), \fp(x))$, where $\bin(x) : \UU \rightarrow [m]$ maps $x$ to one of the $m$ bins, which we call \emph{$x$'s bin}, and $\fp(x) : \UU \rightarrow [s]$ maps $x$ to an element in the bin's element domain, which we call $x$'s \emph{mini-fingerprint}.
At a high level, the bin table attempts to store $\fp(x)$ in $\bin(x)$ (abusing notation to identify a bin by its index).

\paragraph{Insertion.}
\Cref{alg:ins pf} shows the \PF's insertion procedure. An $\ins(x)$ operation first attempts to insert $\fp(x)$ into $\bin(x)$. If $\bin(x)$ is full, the operation applies an eviction policy that forwards one of the fingerprints mapping to $\bin(x)$ (possibly $\fp(x)$ itself) to the \spare. The policy is to forward the maximum fingerprint among $\FP(x)$ and the fingerprints currently stored in $\bin(x)$.
The full maximum fingerprint can be computed from the mini-fingerprints in the bin because they all have the same bin index.
If $\FP(x)$ is not forwarded to the \spare, then $\fp(x)$ in inserted into $\bin(x)$ in place of the evicted fingerprint.
Finally, the bin is marked as \emph{overflowed}, to indicate that a fingerprint that maps to it was forwarded to the spare.

	{%
		\begin{algorithm}[t]
			\caption{Prefix filter insertion procedure}\label{alg:ins pf}
			\KwIn{$x \in \UU$.}
			\medskip
			\If {$\bin(x)$ is not full}{
				$\bin(x).\ins(\fp(x))$ \;
			} \Else {
				$\fp_{\max} \gets \max \left\{ \fp \, | \, \fp \in \bin(x) \right\}$ ; \Comment{\small Computed in $O(1)$ time (\cref{sec:pd-exts})}
				\If{$\fp(x) > \fp_{\max}$}{
					\spare.$\ins(\FP(x))$ \;
				} \Else {
					\spare.$\ins((\bin(x), \fp_{\max}))$ \;
					replace $\fp_{\max}$ with $\fp(x)$ in $\bin(x)$ \;
				}
				$\bin(x).\mathsf{overflowed} = \mathsf{TRUE}$ \;
			}
		\end{algorithm}

The \PF's eviction policy is crucial for the filter's operation. It is what enables most negative queries to complete without searching the \spare, incurring a single cache miss. The eviction policy maintains the following \emph{Prefix Invariant} at every bin:
\begin{invariant}[Prefix Invariant]\label{inv:prefix}
	For every $i \in [m]$, let $$\DD_i \triangleq \{\fp(x) \, | \, x \in\DD\text{ and } \bin(x) = i\}$$
	be the mini-fingerprints of dataset keys whose bin index is $i$ inserted into the filter so far (i.e., including those forwarded to the \spare). Let $Sort(\DD_i)$ be the sequence obtained by sorting $\DD_i$ in increasing lexicographic order. Then bin $i$ contains a prefix of $Sort(\DD_i)$.
\end{invariant}

Crucially, maintaining the Prefix Invariant makes it impossible for the \PF to support deletions. The problem is that when the maximum mini-fingerprint is deleted from an overflowed bin, there is no way to extract the fingerprint that should ``take its place'' from the \spare.

\paragraph{Query.}
The prefix invariant enables a $\query(x)$ operation that does not find $x$ in $\bin(x)$ to deduce whether it needs to search the \spare for $\FP(x)$. This search need to happen only if $\bin(x)$ has overflowed and $\fp(x)$ is greater than all mini-fingerprints currently stored in the bin.
\Cref{alg:q pf} shows the pseudo code. Our bin implementation supports finding the bin's maximum mini-fingerprint in constant time~(\cref{sec:pd-exts}).


		\begin{algorithm}[t]
			\caption{Prefix filter query procedure}\label{alg:q pf}
			\setcounter{AlgoLine}{0}
			\KwIn{$x \in \UU$.}
			\KwOut{Output \yes if $\fp(x)$ was previously inserted into $\bin(x)$. Otherwise, output \no.}
			\medskip
			\If {$\bin(x).\mathsf{overflowed}$ \textbf{ and } $(\fp(x)> \max \left\{ \fp \, | \, \fp \in \bin(x) \right\}$}{
				\Return \ \spare.$\query(\FP(x))$ \;
			}
			\Else{
				\Return $\bin(x).\query(\fp(x))$ \;
			}
		\end{algorithm}
	}

\subsection{Second Level: The Spare} \label{sec:the-pf:spare}


The \spare can be any incremental filter for the universe $\UU'$ of key fingerprints (i.e., $\UU' = \left\{ FP(x) \, | \, x \in \UU \right \}$).
\Cref{sec:the-pf:spare-params} describes how the \spare is parameterized, i.e., which dataset size and false positive rate it is created with. Determining the \spare's dataset size, in particular, is not trivial: the number of fingerprints forwarded to the spare over the lifetime of the \PF is a random variable, but the \PF must provide some bound to the \spare upon creation.
\Cref{sec:the-pf:which-spare} discusses how the \spare's speed and space requirement affect the \PF's overall speed and space requirement.

\subsubsection{Spare Parameters} \label{sec:the-pf:spare-params}

Here we describe how the \PF chooses the \spare's dataset size bound and false positive rate, both of which must be chosen when the filter is constructed.

\paragraph{Dataset size.}
The problem with specifying the \spare's dataset size, denoted $n'$, is that the number of fingerprints forwarded to the \spare is a random variable.
If we overestimate $n'$, the \spare will consume space needlessly.
But if we underestimate $n'$, \spare insertions might fail if it receives more than $n'$ insertions---causing the \PF to fail.
(This is akin to the situation in other hash table-based filters, which might fail with some probability.)

To set $n'$ to a value that yields a low \PF failure probability, we (1) prove that the expectation of the random variable $X$ whose value is the number of fingerprints forwarded to the \spare is
$\mathbb{E}[X] \approx n/\sqrt{2\pi k}$ and (2) bound the probability that $X$ deviates from its expectation by a factor of $1+\delta$~(\cref{sec:spare-analysis}).
Based on this bound, we suggest setting $n' = 1.1 \cdot \mathbb{E}[X]$,
which yields a \PF failure probability (due to $X > n'$) of at most $\cProbVar$.


\paragraph{Spare false positive rate.}
The \spare's false positive rate $\eps'$ only marginally affects the \PF's false positive rate.
We prove in~\cref{sec:filter-fpp} that the prefix filter's false positive rate is bounded by $\frac{\alpha\cdot k}{s} + \frac{1}{\sqrt{2\pi k}} \eps'$.
Therefore, the main determining factor for the \PF's false positive rate is the choice of bin table parameters (see further discussion in~\cref{sec:the-pf:params}).

\subsubsection{Impact of Spare Speed and Space} \label{sec:the-pf:which-spare}

Speed-wise, queries access the \spare infrequently.
Less than a $1/\sqrt{2 \pi k}$ fraction of queries access the \spare (\cref{sec:prefix-ma}).
Space-wise, the expected number of fingerprints forwarded to the spare is at most a $1/\sqrt{2 \pi k}$ fraction of the fingerprints (\cref{sec:spare-analysis}).
This means that a bit consumed by the \spare adds an average of about $1/\sqrt{2 \pi k}$ bits of overhead to the overall filter's space requirement.
Our evaluation~(\cref{sec:evaluation}) shows that in practice, this translates to negligible space overhead.

Importantly, however, the above formulas are ``worst case,'' in the sense that they are derived for a bin table of size $m=n/k$ (see~\cref{sec:analysis}).
In practice, we can forward significantly fewer fingerprints to the spare in exchange for a small amount of space by decreasing the bin table's maximal load factor, i.e., setting $m=\frac{n}{\alpha\cdot k}$ for $\alpha<1$, so the table's load factor after $n$ insertions is $\alpha$.
(Intuitively, with more bins, fewer bins overflow.) \cref{fig:balls-in-spare} shows this trade-off.
It plots the expected fraction of fingerprints forwarded to the spare for $n=2^{30}$ as a function of the bin capacity $k$ for different settings of the bin table's maximal load factor.

Our prototype implementation uses $k=25$, resulting in about $8\%$ of the dataset being stored in the \spare when the bin table size is $n/k$ ($\alpha=100\%$).
By simply picking $\alpha=95\%$, we can reduce this fraction by $1.36\times$ at a negligible space cost. %
We thus use $m=\frac{n}{0.95\cdot k}$ in our evaluation.

\begin{figure}[t]
	\centering
	\includegraphics[width=\columnwidth]{Images/balls-in-spare-with-grid.pdf}
	\caption{Expected fraction of fingerprints forwarded to the spare for $n=2^{30}$ as a function of the bin capacity $k$, for different values of the bin table maximal load factor ($\alpha$).
	}\label{fig:balls-in-spare}
\end{figure}



\subsection{Analysis Summary} \label{sec:the-pf:params}

We analyze the \PF's properties in~\cref{sec:analysis}. The following theorem summarizes our results:

\begin{theorem}[\PF]\label{thm:PF}
	Consider a prefix filter with a bin table of $m=\frac{n}{\alpha\cdot k}$ bins ($\alpha \leq 1$) and a \spare implementation whose space requirement is $S(n',\eps')$, where $n'$ and $\eps'$ are the \spare's dataset size and false positive rate, respectively. Let $n' = 1.1 \frac{n}{\sqrt{2\pi k}}$. Then:


	\begin{enumerate}[leftmargin=*]
		\item The filter's false positive rate is bounded by $\frac{\alpha\cdot k}{s} + \frac{1}{\sqrt{2\pi k}} \eps'$. 
		\item For every sequence of operations containing at most $n$ insertions, the filter does not fail with probability $\geq 1-\cProbVar$.
		\item If the filter does not fail, then every query accesses a single cache line with probability $\geq 1-\cgam$.
		      %
		      %
		      %
		      %
		      The fraction of insertions that access the \spare is at most $\frac{1.1}{\sqrt{2\pi k}}$ with probability $\geq 1-\cProbVar$.
			  %
		\item The filter uses
		      $\frac{1}{\alpha} \cdot n \cdot\left( \log (s/k)+2\right) + S(n',\eps')$ bits of memory.
	\end{enumerate}
\end{theorem}
\begin{proof}
	Property (1) is proven in~\cref{sec:filter-fpp}.
	Property (2) is proven in~\cref{sec:spare-analysis}.
	Property (3) is proven in~\cref{sec:prefix-ma}.
	Property (4) follows by combining the space requirement of the \spare and the pocket dictionary bin implementation (\cref{sec:optimize}), which uses $k(\log (s/k)+2)$ bits per bin.
\end{proof}

\paragraph{Parameter and spare selection.}
\Cref{thm:PF} implies that the \PF can achieve a desired false positive rate $\eps$ in many ways, as long as $\frac{\alpha\cdot k}{s} + \frac{1}{\sqrt{2 \pi k}} \eps' \leq \eps$.
In practice, implementation efficiency considerations in our prototype dictate that $k/s=1/256$, which leads to a choice of $k=25$~(\cref{sec:pd-params}) mini-fingerprints per bin (each mini-fingerprint is in $[s]$).
This is similar to the situation in other practical filters, such as the cuckoo and vector quotient filters, where efficient implementations support only a few discrete false positive rates~\cite{dblp:conf/conext/fanakm14,pandey2021vector}.
Importantly, the \PF can obtain a false positive rate below $1/256$ by using $\alpha<1$.
Our prototype uses $\alpha=0.95$, which pays a negligible space cost to achieve $\eps < 1/256$ and also reduces the fraction of fingerprints stored in the \spare~(\cref{sec:the-pf:which-spare}).
The \spare's false positive rate is not a major factor in the filter's false positive rate, since it gets downweighted by a factor of $1/\sqrt{k}$.

\Cref{thm:PF} also implies that the \PF requires
$\frac{1}{\alpha}(\log (1/\eps)+2) + S(n',\eps')/n$ bits per key, assuming $k/s = \eps$.
The choice of \spare thus marginally affects the space requirement.
For instance, \cref{table:the-space} shows the space requirement obtained when using a \CF with $\eps' = \eps$ for a \spare.
This \spare consumes $S(n',\eps) = n' (\log(1/\eps) + 3)$ bits,
which for the overall filter translates to at most $\frac{1.1 \cdot (\log(1/\eps) + 3)}{\sqrt{2\pi k}}$ additional bits per key.






\subsection{Discussion}

\paragraph{Concurrency support.}
The \PF admits a highly scalable concurrent implementation. Assuming a concurrent \spare implementation, the \PF needs only to synchronize accesses to the bin table.
Since \PF operations access one bin, this synchronization is simple to implement with fine-grained per-bin locking.
This scheme is simpler than in other load balancing schemes, such as cuckoo or power-of-two-choices hashing, which may need to hold locks on two bins simultaneously.


While a concurrent implementation and its evaluation is not in the scope of this paper, we expect it to be highly scalable.
Indeed, a similar (per-bin locking) scheme is used by the \VQF, whose throughput is shown to scale linearly with the number of threads~\cite{pandey2021vector}.

\paragraph{Comparison to the \BE.}
The \PF's two-level architecture is inspired by the theoretic dynamic \BE~\cite{DBLP:conf/swat/BerceaE20}.
The \PF does not need to support deletions, which allows us to change the \BE architecture in several important ways that are crucial for making the \PF a fast, practical filter:

\begin{enumerate}[leftmargin=*]
	\item \textbf{Eviction policy.} In the \BE, no evictions take place. A key is sent to the \spare if its bin is full upon insertion.
	      As a result, a query has no way of knowing in which level its key may be stored, and must always search \emph{both} the bin table and the \spare.

	\item \textbf{Datatype of the \spare.} In the \BE, the \spare is a \emph{dictionary} of \emph{keys}.
	      While a dictionary is not space efficient, the \BE's spare holds only $o(n / \log n)$ keys and its size is $o(n)$ bits~\cite{DBLP:conf/swat/BerceaE20}, i.e., asymptotically negligible. For practical values of both $n$ and $k$, however, the \spare stores about 6\%--8\% of the keys---which is far from negligible. The \PF solves this problem by implementing the \spare as a filter.

	\item \textbf{Universe of the \spare.} In the \BE, the \spare stores actual keys from $\UU$, which are forwarded if their bin is full upon insertion. In the \PF, the spare ``stores'' key fingerprints from the range of $\FP$, because forwarding (through eviction) can occur when the key itself is no longer available.
\end{enumerate}


\section{Pocket Dictionary Implementation}\label{sec:optimize}

The \PF's query speed is dictated by the speed of searching a first-level bin. In particular, a bin should fit into a single cache line, as otherwise queries may incur multiple cache misses. On the other hand,
we want to maximize the bin capacity $k$, as that improves load balancing, which affects the spare's size (\cref{sec:spare-analysis}) and the probability that negative queries need to search the \spare (\cref{sec:prefix-ma}).

To meet these conflicting demands, each first-level bin in the \PF is implemented with a \emph{pocket dictionary} (PD) data structure, introduced in the \BE~\cite{bercea2019fullydynamic}.
The PD is a space-efficient representation of a bounded-size set, which uses the Elias-Fano encoding~\cite{elias1974efficient,fano1971number} to encode the elements it stores~(see~\cref{sec:pd-background}).

The PD has constant-time operations, but in practice, all existing PD implementations~\cite{pandey2021vector,einziger2017tinyset} perform (relatively) heavy computations to search the compact encoding. In comparison, a cuckoo filter query---whose speed we would like to match or outperform---reads two memory words and performs simple bit manipulations on them, so computation is a negligible fraction of its execution time.

This section describes the \PF's novel PD implementation. Our implementation employs a \emph{query cutoff} optimization that exploits SIMD instructions to avoid executing heavy computations for $>99$\% of negative queries (\cref{sec:pd-opt}). We further extend the PD to support new operations required by the \PF (\cref{sec:pd-exts}).

Our PD implementation can be independently useful, as the PD (or a similar structure) is at the heart of filters such as the vector quotient filter (where PDs are called ``mini-filters''~\cite{pandey2021vector}) and TinySet~\cite{einziger2017tinyset} (where they are called ``blocks''). Indeed, we find that implementing the vector quotient filter using our PD outperforms the authors' original implementation, and therefore use our implementation in the evaluation (\cref{sec:evaluation}).

\subsection{Background: Pocket Dictionary}\label{sec:pd-background}

A pocket dictionary encodes a set of at most $k$ ``small'' \emph{elements} using a variant of the quotienting technique. In the \PF, each PD element is the mini-fingerprint of some \PF key.
Conceptually, a PD encodes $Q$ ``lists'' each of which contains $R$-bit values, subject to the constraint that at most $k$ values are stored overall. We use $PD(Q,R,k)$ to denote a concrete PD implementation with fixed values for these parameters.

Each PD element is a pair $(q,r) \in [Q] \times [2^R]$.
We refer to $q$ and $r$ as the \emph{quotient} and \emph{remainder}, respectively. The client of a $PD(Q,R,k)$ is responsible for ensuring that the most significant bits of elements can be viewed as a $q \in Q$, as $Q$ is not necessarily a power of two. In the \PF, our mini-fingerprint hash $\fp(\cdot)$ takes care of this.

\paragraph{Encoding.}
A $PD(Q,R,k)$ encodes $k$ elements using $R+2$ bits per element.
In general, a $PD(Q,R,k)$ represents $t \leq k$ elements with $Q + t + tR$ bits using the following encoding.
We think of the PD as having $Q$ lists, where inserting element $(q,r)$ to the PD results in storing $r$ in list $q$.
The $\PD$ consists of two parts, a $\hheader$ and $\bbody$.
The $\hheader$ encodes the occupancy of each list. These counts (including for empty lists) appear in quotient order, encoded in unary using the symbol $0$ and separated by the symbol $1$.
The $\bbody$ encodes the contents of the lists: the remainders of the PD's elements are stored as $r$-bit strings in non-decreasing order with respect to their quotient, thereby forming the (possibly empty) lists associated with each quotient.


Consider, for example, a $PD(8,4,7)$ storing the following set:
\begin{align*}
	\set{(1,13),(2,15),(3,3),(5,0),(5,5),(5,15),(7,6)}
\end{align*}

Then
\begin{align*}
	\hheader & \triangleq 1 \circ 01 \circ 01 \circ 01 \circ 1\circ0001\circ 1\circ 01 \\
	\bbody   & \triangleq 13 \circ 15 \circ 3 \circ 0 \circ 5 \circ 15 \circ 6,
\end{align*}

where the ``$\circ$'' symbol denotes concatenation and does not actually appear in the PD's encoding.

\paragraph{Operations.}
For $q \in Q$, we denote the occupancy of list $q$ by $occ(q)$,
and the sum of occupancies of all PD lists smaller than $q$ by $S_{q} = \sum_{q' < q} occ(q')$. PD operations are executed as follows.

\vspace{0.5\baselineskip}\noindent
\emph{$\query(q,r)$:} Compute $S_q$ and $occ(q)$.
Then, for every $S_q \leq i < S_q + occ(q)$, compare the input remainder $r$ with the remainder at $\bbody[i]$. If a match is found, return \yes; otherwise, return \no.

\vspace{0.5\baselineskip}\noindent
\emph{$\ins(q,r)$:} If the PD is full (contains $k$ remainders), the insertion fails.
Otherwise, the $\hheader$ is rebuilt by inserting a $0$ after the first $S_q + q$ bits.
Then, the $\bbody$ is rebuilt by moving the remainders of lists $q+1,\dots,Q$ (if any) one position up,
from $\bbody[j]$ to $\bbody[j+1]$, and inserting $r$ at $\bbody[S_q + occ(q)]$.

\paragraph{Implementation.}
Existing PD implementations use rank and select operations~\cite{SelectDef} to search the PD.
For a $b$-bit vector $B \in \{0,1\}^b$, $\Rank(B,j)$ returns the number of 1s in the prefix $B[0, \dots, j]$ of B and $\Select(B,j)$ returns the index of the $j$-th 1 bit. Formally:
\begin{align*}
	\Rank(B,j)   & = |\{ i \in \left[0 \dots j\right] \, | \, B[i] = 1 \}| \\
	\Select(B,j) & = \min \{0\leq i < b \, | \, \Rank(B,i) = j\},
\end{align*}
\noindent
where $\min\left( \emptyset\right)$ is defined to be $b$.

To perform a PD $\query(q,r)$, the implementation uses $\Select$ on the PD's $\hheader$ to retrieve the position of the $(q-1)$-th and $q$-th $1$ bits, i.e., the endpoints of the interval representing list $q$ in the $\bbody$. It then searches the $\bbody$ for $r$ in that range. If $R$ is small enough so that remainders can be represented as elements in an AVX/AVX-512 vector register, this search can be implemented with AVX vector instructions.
Unfortunately, implementing the $\Select$ primitive efficiently is challenging, with several proposals~\cite{pibiri2021rank,DBLP:journals/corr/MulaKL16,DBLP:journals/corr/PandeyBJ17},
none of which is fast enough for our context (see~\cref{sec:pd-find}).

\subsection{Optimized Pocket Dictionary} \label{sec:pd-opt}

Here we describe the \PF's efficient PD implementation. We explain the PD's physical layout and parameter choices (\cref{sec:pd-params}), the PD's search algorithm---its key novelty---that avoids executing a $\Select$ for $>99\%$ of random queries (\cref{sec:pd-find}), and PD extensions for supporting the \PF's insertion procedure (\cref{sec:pd-exts}).

\subsubsection{Physical Layout and Parameters} \label{sec:pd-params}

Our implementation has a fixed-sized header, capable of representing the PD's maximum capacity. Three considerations dictate our choice of the $Q$, $R$, and $k$ parameters:

\paragraph{\circled{1} Each PD in the \PF should reside in a single 64-byte cache line.}
This constraint guarantees that the first-level search of every \PF query incurs one cache miss. Satisfying this constraint effectively restricts possible PD sizes to 32 or 64 bytes, which are sizes that naturally fit within a 64-byte cache line when laid out in a cache line-aligned array. (Other sizes would require either padding the PDs---wasting space---or would result in some PDs straddling a cache line boundary, necessitating two cache misses to fetch the entire PD.)

\paragraph{\circled{2} The PD's header should fit in a 64-bit word.}
This constraint arises because our algorithm needs to perform bit operations on the header. A header that fits in a single word enables efficiently executing these operations with a handful of machine instructions.

\paragraph{\circled{3} The PD's body can be manipulated with SIMD (vector) instructions.} The AVX/AVX-512 instruction set extensions include instructions for manipulating the 256/512-bit vectors as vectors of 8, 16, 32, or 64-bit elements~\cite{intelAVXexts}. This means that R must be one of $\left\{8,16,32,64\right\}$.


\paragraph{Parameter choice.}
We choose parameters that maximize $k$ subject to the above constraints:
$Q=25$, $R=8$, and $k=25$. The $\PD(25, 8, 25)$ has a maximal size of $250 = 25 + 25 + 25\cdot8$ bits, which fit in 32 bytes with 6 bits to spare (for, e.g., maintaining PD overflow status), while having a maximal $\hheader$ size of $50 = 25+25$ bits, which fits in a machine word.


\subsubsection{Cutting Off Queries} \label{sec:pd-find}

Our main goal is to optimize negative queries (\cref{sec:back}).
For the \PF to be competitive with other filters, a PD query must complete in a few dozen CPU cycles. This budget is hard to meet with the standard PD search approach that performs multiple $\Select$s on the PD $\hheader$ (\cref{sec:pd-background}). The problem is that even the fastest x86 $\Select$ implementation we are aware of~\cite{DBLP:journals/corr/PandeyBJ17} takes a non-negligible fraction of a PD query's cycle budget, as it executes a pair of instructions (PDEP and TZCNT) whose latency is 3--8 CPU cycles each~\cite{abel2019uops}.



We design a PD search algorithm that executes a negative query without computing $\Select$ for $>99$\% of queries, assuming uniformly random PD elements---which is justified by the fact that our elements are actually mini-fingerprints, i.e., the results of hashing keys.

Our starting point is the observation that most negative queries can be answered without searching the $\hheader$ at all; instead, we can search the $\bbody$ for the remainder of the queried element, and answer \no if it is not found. Given a queried element $(q,r)$, searching the $\bbody$ for a remainder $r$ can be implemented efficiently using two AVX/AVX-512 vector instructions: we first use a ``broadcast'' instruction to create a vector $x$ where $x[i]=r$ for all $i \in [k]$, and then compare $x$ to the PD's $\bbody$ with a vector compare instruction. The result is a word containing a bitvector $\mathtt{v}_r$, defined as follows
\begin{align*}
	\forall i\in[k]\quad \mathtt{v}_r[i] & \triangleq
	\begin{cases}
		1 & \text{if}\quad r = \bbody[i] \\
		0 & \text{otherwise}
	\end{cases}
\end{align*}

\noindent
Then if $\mathtt{v}_r = 0$, the search's answers is \no.

For the \PF's choice of PD parameters, the above ``cutoff'' can answer \no for at least 90\% of the queries (\cref{lemma:shortcut} below).
The question is how to handle the non-negligible~$\approx 10$\% of queries for which the ``cutoff'' cannot immediately answer \no, without
falling back to the standard PD search algorithm that performs multiple $\Select$s.

Our insight is that in the vast majority of cases where a query $(q,r)$ has $\mathtt{v}_r \neq 0$, then $r$ appears \emph{once} in the PD's $\bbody$ (\cref{lemma:shortcut2} below). Our algorithm therefore handles this common case without executing $\Select$, and falls back to the $\Select$-based solution only in the rare cases where $r$ appears more than once in the PD's $\bbody$.

\Cref{algo:pop1} shows the pseudo code of the \PF's PD search algorithm.
The idea is that if $\bbody[i]=r$ ($0 \leq i < k$), we can check if index  $i$ belongs to list $q$ by verifying in the $\hheader$ that (1) list $q-1$ ends before index $i$ and (2) list $q$ ends after index $i$. We can establish these conditions by checking that $\Rank(\hheader, q+i-1)=q$, which implies (1), and that list $q$ is not empty, which implies (2).
For example, suppose $q=4$, $i=3$, and $\hheader = 101010110001101$. Then list 3 ends before index 3 but list 4 is empty (bit $q+i$ is 1).

Computing $\Rank$ costs a single-cycle POPCOUNT instruction. We further
optimize by avoiding explicitly extracting $i$ from $\mathtt{v}_r$; instead, we leverage the fact that the only set bit in $\mathtt{v}_r$ is bit $i$, so $(\mathtt{v}_r \ll q)-1$ is a bitvector of $q+i$ ones, which we bitwise-AND with the $\hheader$ to keep only the relevant bits for our computation.


\begin{algorithm}
	\setcounter{AlgoLine}{0}
	\KwIn {Queried element $(q,r)$.}
	\KwOut{Whether $(q,r)$ is in the PD.}
	construct 64-bit bitvector $\mathtt{v}_r$; \Comment{\small Using VPBROADCAST \& VPCMP}
	\If{$\mathtt{v}_r = 0$}{\Return \no }
	\eIf(\Comment*[f]{\small $\mathtt{v}_r$ has one set bit?}){$(\mathtt{v}_r\,\&\,(\mathtt{v}_r-1)) = 0$} {$w \gets \mathtt{v}_r \ll q$ \;
		\eIf{ $\Rank(\hheader\,\&\,(w-1), 64) = q$ \textbf{and} $(\hheader\,\&\, w) = 0 $ }{ \Return{ \yes } }{ \Return \no }
	}
	{
		use $\Select$-based algorithm \;
	}
	\caption{PD search algorithm.}\label{algo:pop1}
\end{algorithm}



\paragraph{Analysis.}
We prove that if PD and query elements are uniformly random, then a query $(q,r)$ has $\mathtt{v}_r=0$ with probability~$>0.9$ (\cref{lemma:shortcut}), and if $\mathtt{v}_r \neq 0$, then with probability~$>0.95$, $r$ will appear once in the PD's body (\cref{lemma:shortcut2}).

\begin{claim}
	\label{lemma:shortcut}
	Consider a $\PD(25, 8, 25)$ containing uniformly random elements. Then the probability over queries $(q,r)$ that $\mathtt{v}_r=0$ is $>0.9$.
\end{claim}
\begin{proof}
	Consider a $\PD(Q, R, k)$.
	Let the number of distinct remainders in the PD's $\bbody$ be $s \leq k$. For a uniformly random remainder $r$,
	\begin{align*}
		\Pr{\mathtt{v}_r = 0} = 1 - \Pr{\mathtt{v}_r \neq 0} & = 1 - s/2^R \geq 1 - k/2^R
	\end{align*}
	For the \PF's choice of PD parameters, we have $1 - k/2^R \overset{k = 25,R=8}{\approx} 0.902$.
\end{proof}

\begin{claim} \label{lemma:shortcut2}
	Consider an element $(q,r)$. The probability (over $\PD(25, 8, 25)$ with uniformly random elements) that a PD's $\bbody$ contains $r$ once, conditioned on $\mathtt{v}_r \neq 0$, is~$>0.95$.
\end{claim}
\begin{proof}
	Consider a $\PD(Q,R,k)$ whose body contains $s \leq k$ distinct remainders.
	The probability that the PD's body contains $r$ once, conditioned on it containing $r$ at all, is
	\begin{align*}
		\frac{s \cdot 1/2^R \cdot (1-1/2^R)^{s-1}}{1-(1-1/2^R)^s} \geq
		\frac{k \cdot 1/2^R \cdot (1-1/2^R)^{k-1}}{1-(1-1/2^R)^k} \overset{k = 25,R=8}{\approx} 0.953
	\end{align*}

	The first inequality holds because for $\beta\in (1/2,1)$ and $i \geq 1$, $T(i) \triangleq \frac{i \cdot \beta^{i-1}}{1-\beta^i}$ is monotonically decreasing; in our case, $\beta = 1-1/2^R$. The claim then follows since the bound holds for any $1 \leq s \leq k$.
\end{proof}



\subsubsection{Prefix Filter Support: Finding the Maximum Element} \label{sec:pd-exts}

A \PF insertion that tries to insert an element into a full PD must locate (and possibly evict) the maximum element stored in the PD. Here, we describe the extensions to the PD algorithm required to support this functionality.

\paragraph{Computing the remainder.}
In a standard PD~(\cref{sec:pd-background}), the $\bbody$ stores the remainders according to the lexicographic order of the elements.
Maintaining this ``lexicographic invariant'' is wasteful, hence we use the following relaxed invariant: if the PD has overflowed, then the remainder of the maximum element is stored in the last ($k$-th) position of the $\bbody$.
Maintaining this relaxed invariant requires finding the maximum remainder in the last non-empty list only when the PD first overflows or when the the maximum element is evicted.






\paragraph{Computing the quotient.}
In a standard PD, the maximum element's quotient needs to be computed from the $\hheader$: it is equal to the quotient of the last non-empty list. This quotient can be derived from the number of ones before the $k$-th zero bit in the $\hheader$ or from the number of consecutive (trailing) ones in the $\hheader$.
We find, however, that computing these numbers adds non-negligible overhead for a filter operation. To avoid this overhead, the \PF's PD reserves a $\log Q$-bit field in the PD which stores (for a PD that has overflowed) the quotient of the maximum element stored in the PD.







\section{Analysis} \label{sec:analysis}

In this section, we analyze the properties of the prefix filter
(omitted proofs appear in the full version~\cite{fullVers}).
The analysis holds for every fixed sequence of queries and at most $n$ insertions, with no limitation on the interleaving of insertions and queries.
(As the sequence is fixed, future queries do not depend on past false positive events.)
We assume that the hash functions are random functions (i.e., the function values are uniformly distributed and independent).
Hence, the  probabilities are taken over the random choice of the hash function and do not depend at all on the sequence of operations.



\paragraph{Notation.}
We use the following notation:
\begin{enumerate*}[label=(\arabic*)]
    \item $n$ denotes the maximum number of elements in the set $\DD\subset \UU$;
    \item $m$ denotes the number of bins in the bin table (i.e., first level) and $p\triangleq 1/m$;
    \item $k$ denotes the capacity of each bin;
    \item fingerprints are pairs $\FP(x)=(\bin(x),\fp(x))$, where $\bin(x)\in[m]$ and $\fp(x)\in [s]$. Recall that we call $\fp(x)$ the mini-fingerprint.
\end{enumerate*}

\subsection{Spare Occupancy and Failure}\label{sec:spare-analysis}
In this section, we bound the number of elements that are forwarded to the \spare.
The analysis views the problem as a balls-into-bins experiment.
Namely, randomly throw $n$ balls (fingerprints) into $m=n/k$ bins of capacity $k$, such that if a ball is mapped to a full bin, then it is forwarded to the \spare.%
\footnote{If $m > n/k$, then the number of balls forwarded to the spare is not bigger.}
We prove the bounds for practical values of $n$ (i.e., $n\geq 2^{25}$), whereas previous analyses of two-level filters require  $m=(1+o(1))n/k$, where the term $o(1)$ is greater than $1$ even for $n=2^{40}$~\cite{arbitman2010backyard,bercea2020dynamic}.

Let $B_i$ denote the number of balls that are mapped to bin $i$.
Let $\Bin{n}{p}$ denote a binomial random variable with parameters $n$ and $p$.
The random variables $B_i$ and $\Bin{n}{p}$ are identically distributed.
The contribution of bin $i$ to the spare is $X_i \triangleq\max\set{0,B_i-k}$.
Let $X\triangleq \sum_{i=1}^m X_i$ denote the random variable that equals the number of fingerprints that are forwarded to the spare.

We bound $X$ using a second moment bound (Cantelli's inequality).
\begin{theorem}\label{thm:X}
    The number $X$ of balls forwarded to the spare satisfies:
    \begin{align}
        \label{eq:expectation}
         & \expectation{}{X}=n\cdot(1-p)\cdot \Pr{\Bin{n}{p}=k}\leq n\cdot \frac{1}{\sqrt{2\pi k}} \\ &
        \label{eq:deviation}
        \Pr{X \geq (1+\delta) \cdot \expectation{}{X}} \leq \frac{2\pi k}{\delta^2\cdot 0.99 n} \quad\text{(for $n\geq 3k, k\geq 20$)}
    \end{align}
\end{theorem}

In~\cref{sec:the-pf:spare-params}, we propose to set the \spare's dataset size to $1.1 \cdot \expectation{}{X}$.
By plugging in $\delta=0.1$ into~\cref{eq:deviation}, we obtain
\begin{claim}\label{claim:fail}
The probability that the \spare overflows (and hence the prefix filter fails) is at most $\cProbVar$.
\end{claim}

\subsection{Memory Access per Operation}\label{sec:prefix-ma}

\paragraph{Queries.} We prove that every query requires a single memory access (i.e., reads one cache line) with probability at least $1-1/\sqrt{2\pi k}$, where $k$ denotes the capacity of a bin.

\begin{claim}[Spare access by positive queries]\label{claim:spare-access}
    A positive query in the \PF is forwarded to the \spare with probability at most $\frac{\Exp{X}}{n}$.
\end{claim}

\noindent
The following theorem deals with negative queries.
\begin{theorem}\label{thm:pf-no-query}
    A negative query in the \PF is forwarded to the \spare with probability at most $\Pr{\Bin{n+1}{p}=k+1} +\frac{1}{n} \leq \frac{1}{\sqrt{2\pi k}}\;.$
\end{theorem}
\begin{proof}
Consider a negative query of a  fixed key $x\notin\DD$.
The~\nameref{inv:prefix} implies that $\query(x)$ is forwarded to the \spare only if:
\begin{enumerate*}
    \item $\bin(x)$ overflowed, and
    \item $\fp(x)$ is larger than the largest fingerprint currently stored in $\bin(x)$.
\end{enumerate*}

Let $i\triangleq \bin(x)$.
Let $\fp_{(1)}\leq \fp_{(2)} \leq \cdots \leq \fp_{(B_i)}$
denote the set of mini-fingerprints that are mapped to bin $i$ in
non-decreasing order. 
Define two random variables $\varphi_i, \psi_i$:
\begin{align*}
    \varphi_i\triangleq
    \begin{cases}
        \su-1     & \text{If } B_i\leq k \\
        \fp_{(k)} & \text{Otherwise.}
    \end{cases}
    \quad\psi_i\triangleq
    \begin{cases}
        1                & \text{If } B_i\leq k \\
        {\ZZ}^{B_i}_{(k)} & \text{Otherwise.}
    \end{cases}
\end{align*}
where $\ZZ^{\ell}_{(k)}$ denotes the $k$'th smallest order statistic out of $\ell$
i.i.d. random variables uniformly distributed in the interval $[0,1]$.
\begin{observation}\label{obs:phi}
If $B_i>k$, then $\varphi_i$ and $\floor*{s\cdot \psi_i}$ are identically distributed.
\end{observation}

Forwarding of $\query(x)$ to the \spare occurs if and only if
$\fp(x)>\varphi_i$.
Thus, it suffices to bound $\Pr{\fp(x)>\varphi_i}$.
\begin{claim}\label{}
    \begin{align*}
        \Pr{\fp(x)\leq\varphi_i} = \frac{\Exp{\varphi_i} +1}{s} \geq \Exp{\psi_i}
    \end{align*}
\end{claim}



For $\ell > k$, the $k$'th order statistic of uniform random variables satisfies $\Exp{\ZZ^{\ell}_{(k)}} = \frac{k}{\ell + 1}$. Therefore:
\begin{claim}
    \begin{align*}
        \Exp{\psi_i} &= \Pr{B_i \leq k} +  \Exp{\ZZ^{B_i}_{(k)} \mid B_i>k} \cdot \Pr{B_i> k}\\
         &\geq \Pr{\Bin{n}{p} \leq k}+\frac{n}{(n+1)}\cdot \Pr{\Bin{n+1}{ p}> k+1}
    \end{align*}
\end{claim}
\noindent
Combing the above inequalities, we obtain
\begin{align}
    \Pr{\fp(x)\leq\varphi_i} &\geq 
    \Pr{\Bin{n}{p} \leq k} + \frac{n}{n+1}\cdot \Pr{\Bin{n+1}{ p}> k+1} \\
    \geq \nonumber &
    \frac{n}{n+1}\left(1-\Pr{\Bin{n+1}{p} = k+1}\right)                \;
\end{align}
The first part of the proof follows by taking the complement event.
To complete the proof, we apply Stirling's approximation:
    \begin{align*}
        \frac1{n} + \Pr{\Bin{n+1}{p} = k+1} \leq \cgam\;
    \end{align*}
\end{proof}

\paragraph{Insertions.}
The number of insert operations that require more than one memory access equals the number of elements that are stored in the
\spare. By \Cref{claim:fail},  with probability $\cProbVar$, all but at most $\frac{1.1\cdot n}{\cdom}$ insertions require one memory access.



\subsection{False Positive Rate} \label{sec:filter-fpp}
In this section, we analyze the false positive rate of the \PF.
Our analysis assumes that the \spare is constructed with false positive rate $\eps'$ for a set of size at most $1.1 \cdot \expectation{}{X}$ and that failure did not occur (i.e. $X\leq 1.1 \cdot \expectation{}{X}$).

A false positive event for $\query(y)$ (for $y\in \UU\setminus \DD)$ is contained in the union of two events:
\begin{enumerate*}[label=(\Alph*)]
    \item
    Fingerprint collision, namely, there exists $x\in\DD$ such that $\FP(y)=\FP(x)$.
    \item
    A fingerprint collision did not occur and the \spare is accessed to process $\query(y)$ and answers yes.
\end{enumerate*}
Let $\eps_1\triangleq \Pr{A}$ and $\delta_2\triangleq \Pr{B}$.
To bound the false positive rate it suffices to bound $\eps_1+\delta_2$.

\begin{claim} \label{claim:eps1}
    $\eps_1 \leq \frac{n}{m\cdot s}$ and $\delta_2\leq \frac{\eps'}{\sqrt{2\pi k}}$.
\end{claim}
\begin{proof}
    Fix $y \in \UU \setminus \DD$.	The probability that $\FP(x)=\FP(y)$ is $\frac{1}{m\cdot s}$ because $\FP$ is chosen from a family of $2$-universal hash functions whose range is $[m\cdot s]$.
    The bound on $\eps_1$ follows by applying a union bound over all $x\in\DD$.
    To prove the bound on $\delta_2$, note that every negative query to the \spare generates a false positive with probability at most $\eps'$.
    However, not every query is forwarded to the \spare.
    In~\cref{claim:spare-access} we bound the probability that a query is forwarded to the spare by $1/\sqrt{2 \pi k}$, and the claim follows.
\end{proof}

\begin{corollary}
    The false positive rate of the \PF is at most $\frac{n}{m \cdot s}+ \frac{\eps'}{\sqrt{2\pi k}}$.
\end{corollary}


\section{Evaluation}\label{sec:evaluation}

In this section, we empirically compare the \PF to other
state-of-the-art filters with respect to several metrics:
space usage and false positive rate (\cref{sec:eval:space}),
throughput of filter operations at different loads (\cref{sec:eval:filling}), and build time, i.e., overall time to insert $n$ keys into an empty filter (\cref{sec:build time}).



\subsection{Experimental Setup}

\paragraph{Platform.} We use an Intel Ice Lake CPU (Xeon Gold 6336Y CPU @ 2.40\,GHz), which has per-core, private 48\,KiB L1 data caches and 1.25\,MiB L2 caches, and a shared 36\,MiB L3 cache.
The machine has 64\,GiB of RAM. Code is compiled using GCC 10.3.0 and run on Ubuntu 20.04.
Reported numbers are medians of 9 runs.
Medians are within $-3.41$\% to $+4.4\%$ of the corresponding averages, and 98\% of the measurements are less than 1\% away from the median.

\paragraph{False positive rate ($\eps$).}
Our \PF prototype supports a false positive rate of $\eps=0.37\% \lessapprox 2^{-8}$ (\cref{sec:pd-params}). However, not all filters support this false positive rate (at least not with competitive speed), thus making an apples-to-apples comparison difficult. We therefore configure each filter with a false positive rate that is as close as possible to $2^{-8}$ without deteriorating its speed. \Cref{sec:eval:filters} expands on these false positive rate choices.

\paragraph{Dataset size ($n$).}
We use a dataset size (maximum number of keys that can be inserted into the filter) of $n = 0.94 \cdot 2^{28}$ (252\,M), which ensures that filter size exceeds the CPU's cache capacity. We purposefully do not choose $n$ to be a power of $2$ as that would unfairly disadvantage some
implementations, for the following reason.

Certain hash table of fingerprints designs, such as the cuckoo and vector quotient filter, become ``full'' and start failing insertions (or slow down by orders of magnitude) when the load factor of the underlying hash table becomes ``too high'' (\cref{table:the-space}). For instance, the cuckoo filter occasionally fails if its load factor exceeds 94\%~\cite{graf2020xor}. It should thus size its hash table to fit $n/0.94$ keys. Unfortunately, the fastest implementation of the cuckoo filter (by its authors~\cite{dblp:conf/conext/fanakm14}) cannot do this. This implementation is what we call \emph{non-flexible}: it requires $m$, the number of hash table bins, to be a power of $2$, so that the code can truncate a value to a bin index with a bitwise-ANDs instead of an expensive modulo operation. The implementation uses bins with capacity 4 and so its default $m$ is $n/4$ rounded up to a power of 2. The maximal load factor when $n$ is a power of 2 is thus 1, so it must double $m$ to avoid failing, which disadvantages it in terms of space usage.

Our choice of an $n$ close to a power of 2 avoids this disadvantage. When created with our $n = 0.94 \cdot 2^{28}$, the cuckoo filter uses $m=2^{28}/4$ bins, and thus its load factor in our experiments  never exceeds the supported load factor of 94\%.




\paragraph{Implementation issues.}
We pre-generate the sequences of operations (and arguments) so that measured execution times reflect only filter performance.
While the keys passed to filter operations are random, we do not remove any internal hashing in the evaluated filters, so that our measurements reflect realistic filter use where arguments are not assumed to be uniformly random.
All filters use the same hash function, by Dietzfelbinger~\cite[Theorem 1]{Dietzfelbinger2018}.




\subsubsection{Compared Filters} \label{sec:eval:filters}
We evaluate the following filters:

\paragraph{Bloom filter (BF-$x[k=\cdot]$).}
We use an optimized Bloom filter implementation~\cite{graf2020xor}, which uses two hash functions to construct $k$ hash outputs.
The parameter $x$ denotes the number of bits per key.%

\paragraph{Cuckoo Filter (CF-$x$).} ``CF-$x$'' refers to a \CF
with fingerprints of $x$ bits with buckets of $4$ fingerprints (the bucket size recommended by the \CF authors).
The \CF's false positive rate is dictated by the fingerprint length, but competitive speed requires fingerprint length that is a multiple of 4.
Thus, while a CF-11 has a false positive rate of $\approx 2^{-8}$, it is very slow due non-word-aligned bins or wastes space to pad bins.
We therefore evaluate CF-8 and CF-12, whose false positive rates of 2.9\% and 0.18\%, respectively, ``sandwich'' the \PF's rate of $0.37\%$.

We evaluate two \CF implementations: the authors' implementation~\cite{CFimpl}, which is non-flexible, and a flexible implementation~\cite{FastFilterImpl}, denoted by a
``\textsf{-Flex}'' suffix, which does not require the number of bins in the hash table to be a power of 2.

\paragraph{Blocked Bloom filter (BBF).} We evaluate two implementations  of  this filter: a non-flexible implementation (i.e., the bit vector length is a power of $2$) from the \CF
repository and a
flexible version, \BBFx, taken from~\cite{graf2020xor}.
The false positive rate of these implementations cannot be tuned, as they set a fixed number of bits on insertion, while in a standard \BF the number of bits set in each insertion depends on the desired false positive rate.
It is possible to control the false positive rate by decreasing the load (i.e., initializing the \BBF with a larger $n$ than our experiments actually insert), but then its space consumption would be wasteful.
We therefore report the performance of the \BBF implementations with the specific parameters they are optimized for.

\paragraph{TwoChoicer (TC).} This is our implementation of the \VQF~\cite{pandey2021vector}.
Its hash table bins are implemented with our pocket dictionary, which is faster than the bin implementation of the \VQF authors~\cite{VQFImpl}.%
\footnote{In our throughput evaluation~(\cref{sec:eval:filling}),
the throughput of the TC is higher than the \VQF by at least $1.26\times$ in negative queries at any load, and is comparable at insertions and positive queries.}
We use the same bin parameters as in the original \VQF implementation:
a 64-byte PD with a capacity of $48$ with parameters $Q = 80$ and $R = 8$.
Setting $R=8$ leads to an empirical false positive rate of $0.44$\%.


\paragraph{Prefix-Filter (PF[Spare]).}
We use a PF whose bin table contains $m = \frac{n}{0.95\cdot k}$ bins (see~\cref{sec:the-pf:which-spare}).
We evaluate the \PF with three different implementations of the \spare: a \BBFx, CF-12-Flex, and TwoChoicer, denoted PF[BBF-Flex], P[CF12-Flex], and PF[TC], respectively.
Let $n'$ denote the \spare's desired dataset size derived from our analysis~(\cref{sec:the-pf:spare-params}).
We use a \spare dataset size of $2n', n'/0.94, n'/0.935$ for
PF[BBF-Flex], PF[CF12-Flex], and PF[TC], respectively.
The purpose of the BBF-Flex setting is to obtain the desired false positive rate, and the only purpose of the other settings is to avoid failure.

\paragraph{Omitted filters.}
We evaluate but omit results of the Morton~\cite{breslow2018morton} and
quotient filter~\cite{bender2012thrash}, because they are strictly worse than the vector quotient filter (TC).%
\footnote{In addition, the Morton filter is known to be similar or worse than the \CF on Intel CPUs such as ours~\cite{breslow2018morton}.}
This result is consistent with prior work~\cite{pandey2021vector}.

\subsection{Space and False Positive Rate} \label{sec:eval:space}

We evaluate the size of the filters by inserting $n$ random keys and measuring the filter's space consumption, reporting it in bits per key.
We then measure the false positive rate by performing $n$ random queries (which due to the universe size are in fact negative queries) and measuring the fraction of (false) positive responses.
\Cref{table:fpp-server} shows the results. 
We also compare the space use (bits/key) of each filter to the information theoretic minimum for the same false positive rate, examining both additive and multiplicative differences from the optimum.

Comparing space use of filters with different false positive rates is not meaningful, so we compare each filter's space overhead over the information theoretic minimum for the same false positive rate.
Except for the Bloom and blocked Bloom filters, which have multiplicative overhead, the relevant metric is the additive difference from the optimum.
We see that in practice, all filters use essentially the same space, $3.4$--$4$ bits per key more than the optimum.

The \PF's space use and false positive rates are nearly identical regardless of whether BBF-Flex, CF-12-Flex, or TC is used as a \spare.
This holds despite the fact that as standalone filters, the false positive rates and space use of these filters differs considerably.
This result empirically supports our analysis that the impact of the \spare on the \PF's overall space use and false positive rate is negligible.


\begin{table}
	\caption{%
	Filter false positive rate and space use: empirically obtained results (for $n=2^{28}\cdot 0.94$) and comparison to the information theoretic minimum.
	}
	\scalebox{0.94}{
		\begin{tabular}{l|lllll}
			\toprule
			\textbf{Filter} & \thead{\textbf{Error}                                \\ \textbf{(\%)}} & \textbf{Bits/key} & \thead{\textbf{Optimal} \\\textbf{bits/key}} & \textbf{Diff.} & \textbf{Ratio} \\
			\midrule
			CF-8            & 2.9163                & 8.51  & 5.10  & 3.41 & 1.669 \\
			CF-8-Flex       & 2.9175                & 8.51  & 5.10  & 3.41 & 1.669 \\
			CF-12           & 0.1833                & 12.77 & 9.09  & 3.67 & 1.404 \\
			CF-12-Flex      & 0.1833                & 12.77 & 9.09  & 3.67 & 1.404 \\
			CF-16           & 0.0114                & 17.02 & 13.10 & 3.92 & 1.299 \\
			CF-16-Flex      & 0.0114                & 17.02 & 13.10 & 3.92 & 1.299 \\
			\midrule
			PF[BBF-Flex]    & 0.3723                & 12.13 & 8.07  & 4.06 & 1.503 \\
			PF[CF-12-Flex]  & 0.3797                & 11.64 & 8.04  & 3.60 & 1.447 \\
			PF[TC]          & 0.3917                & 11.55 & 8.00  & 3.56 & 1.445 \\
			\midrule
			BBF             & 2.5650                & 8.51  & 5.28  & 3.23 & 1.610 \\
			BBF-Flex        & 0.9424                & 10.67 & 6.73  & 3.94 & 1.585 \\
			BF-8[k=6]       & 2.1611                & 8.00  & 5.53  & 2.47 & 1.446 \\
			BF-12[k=8]      & 0.3166                & 12.00 & 8.30  & 3.70 & 1.445 \\
			BF-16[k=11]     & 0.0460                & 16.00 & 11.09 & 4.91 & 1.443 \\
			\midrule
			TC              & 0.4447                & 11.41 & 7.81  & 3.60 & 1.460 \\
			\bottomrule
		\end{tabular}
	}
	\label{table:fpp-server}
\end{table}


\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{Images/bench-median-server.pdf}
   \vspace{-20pt}
  \caption{Throughput comparison as filter load increases ($X$-axis shows the fraction of $n=2^{28}\cdot 0.94$ elements
  inserted so far).
  }\label{fig-perf}
\end{figure*}


\subsection{Throughput} \label{sec:eval:filling}

We evaluate the throughput of filter operations as the load (fraction of keys inserted out of $n$) gradually increases in increments of 5\%. We report the throughput of insertions, negative queries, and positive queries. 
Prior work~\cite{pandey2021vector,bender2012thrash,breslow2018morton,dblp:conf/conext/fanakm14} uses similar methodology to evaluate the impact of filter load balancing.

Each experiment consists of 20 rounds. 
Each round consists of three operation sequences whose throughput is measured.
The round begins with a sequence of $0.05n$ insertions of uniformly random 64-bit keys.
We then perform a sequence of $0.05n$ queries of uniformly random keys (which due to the $2^{64}$ universe size are, in fact, negative queries).
The round ends with a sequence of $0.05n$ positive queries by querying for a randomly permuted sample of $0.05n$ keys that were inserted in some previous round.
Key generation does not affect throughput results, as we only time round executions, whereas the insertion sequence is pre-generated and the positive query sequences are generated between rounds.

\Cref{fig-perf} shows the throughput (operations/second) of
insertions, uniform (negative) queries, and positive queries for each load (i.e., round).

We omit the \BF from the plots, as it is the slowest in queries, and only faster than \CF in high-load insertions.
The \BBF outperforms all other filters by about $2\times$ for all operations and all loads.
But the \BBF has significantly worse space efficiency (which due to implementation limitations is reflected in $3\times$--$6\times$ higher false positive rates, see~\cref{sec:eval:filters}).
We therefore do not consider it further.

\paragraph{Negative queries.}
Compared to CF-12-Flex and TC, whose false positive rate is similar to the \PF's, the \PF has higher negative query throughput at all loads.
In fact, the \PF has higher negative query throughput than the CF-12 for all loads up to 95\%: the \PF's throughput is higher by

55\%, 40\% and 2.8\% for loads of 50\%, 70\%, and 90\%,
respectively (same result for all \spare implementation up to $\pm 3\%$).
The main reason is that CF and TC negative queries incur two cache misses, whereas \PF negative queries that do not access the \spare incur only a single cache miss.
Both \PF and TC, whose bins are implemented as pocket dictionaries, exhibit a gradual decline in negative query throughput as load increases.
This decline occurs because as bins become fuller, the query ``cutoff'' optimization becomes less effective.
We also see the space vs. 
speed trade-off in a non-flexible implementation.
The query throughput of CF-12 and BBF is higher than that of their flexible counterparts by 14.5\% and 8.1\%, respectively.
In exchange for this, however, the non-flexible implementation may use $2\times$ more space than a flexible one.

\paragraph{Insertions.}
The \PF has about $1.25\times$ higher insertion throughput than TC for loads up to roughly 85\%.
Subsequently, the \PF's insertion throughput gradually decreases, but it becomes lower than TC's only at 95\% load.
TC's throughput degrades when the load exceeds 50\% due to its insertion shortcut optimization, because at these loads a larger number of TC insertions require access to two bins.

The \PF has higher insertion throughput than CF-12 and CF-8 for all loads above 10\%. The reason is that the \CF's insertion throughput declines by orders of magnitude as load increases, whereas the \PF's throughput is stable up to 60\% load and subsequently declines by only $1.9\times$--$2.8\times$, depending on the \spare implementation.

\paragraph{Positive queries.}
At 100\% load, the \PF's positive query throughput is lower by $28\%-40\%$ compared to CF-12-Flex and by $46\%-60\%$ compared to CF-12.
The \PF is consistently faster than TC, e.g., by 12\%-22\% (depending on the \spare implementation) at 100\% load.

\subsection{Build Time}\label{sec:build time}

In this experiment, we measure filter \emph{build time}: the time it takes to insert $n$ random keys into an initially empty filter. This is a very common workload for filters, e.g., whenever the filter represents an immutable dataset~\cite{KVstoreAnalysis,RocksDBAnalysis,conway_et_al:LIPIcs:2018:9043,SplinterDB,dayan2017monkey,PebblesDB,rocksdb,LSM-SSD,Chucky,Dostoevsky,chang2008bigtable,Cassandra,bLSM,cLSM}.

\Cref{fig:build-time} shows the build time of the evaluated filters.
Build time reflects average of insertion speed as load increases.
Therefore, the \PF's high insertion throughput at loads below $80\%$, which decreases only gradually at higher loads, translates into overall faster build time than all CF configurations and TC---by $>3.2\times$ and $1.39\times$--$1.46\times$, respectively.
The choice of the \spare implementation has only a minor influence on the \PF's build time (a difference of $5.6$\% between the \PF's worst and best build times).

The \CF's precipitous drop in insertion throughput as load increases translates into build times similar to BF-16[$k=11$], whose operations perform 11 memory accesses. 
In other words, with respect to build time, the \CF behaves similarly to a filter whose insertions cost about 11 cache misses.

\begin{figure}[t]
  \centering
  \includegraphics[width=0.9\columnwidth]{Images/Built-time-median-server2.pdf}
  \vspace{-10pt}
  \caption{Filter build time (seconds) for
    $n=0.94 \cdot 2^{28}$.
  }
  \label{fig:build-time}
\end{figure}






\section{Conclusion}

We propose the \PF, an incremental filter that offers (1) space efficiency comparable to state-of-the-art dynamic filters; (2) fast queries, comparable to those of the \CF; and (3) fast insertions, with overall build times faster than those of the \VQF and \CF. Our rigourous analysis of the \PF's false positive rate and other properties holds both for practical parameter values and asymptotically. We also empirically evaluate the \PF and demonstrate its qualities in practice.

\begin{acks}
This research was funded in part by the Israel Science Foundation
(grant 2005/17) and the Blavatnik Family Foundation.
\end{acks}

\balance
\bibliographystyle{ACM-Reference-Format}
\bibliography{filters}

\end{document}

"; 
				
			string tmpstring = @"\documentclass[12pt]{article}
\usepackage{amsmath}
\usepackage{amsthm}
\usepackage{graphicx,psfrag,epsf}
\usepackage{enumerate}
\usepackage{natbib}
\usepackage[utf8]{inputenc} % allow utf-8 input
\usepackage{hyperref}       % hyperlinks
\usepackage{url}            % simple URL typesetting
\usepackage{booktabs}       % professional-quality tables
\usepackage{amsfonts}       % blackboard math symbols
\usepackage{nicefrac}       % compact symbols for 1/2, etc.
\usepackage{microtype}      % microtypography
\usepackage{authblk}
\usepackage{natbib}
\usepackage{doi}
\usepackage{float}
\usepackage{algorithmic}
\usepackage{xcolor}
\usepackage[toc,page]{appendix}

\newtheorem{theorem}{Theorem}[section]
\newtheorem{corollary}[theorem]{Corollary} 
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{remark}[theorem]{Remark}
\newtheorem{definition}[theorem]{Definition}
\newtheorem{example}[theorem]{Example}
\newtheorem{assumption}[theorem]{Assumption}
\newtheorem{proposition}[theorem]{Proposition}

\begin{document}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  \title{Scalable $k$-d trees for distributed data}
  \author{Aritra Chakravorty, William S. Cleveland, and Patrick J. Wolfe}
  \affil{\texttt{\{chakrav0,wsc,patrick\}@purdue.edu}}
\maketitle


\begin{abstract}
Data structures known as $k$-d trees have numerous applications in scientific computing, particularly in areas of modern statistics and data science such as range search in decision trees, clustering, nearest neighbors search, local regression, and so forth. In this article we present a scalable mechanism to construct $k$-d trees for distributed data, based on approximating medians for each recursive subdivision of the data. We provide theoretical guarantees of the quality of approximation using this approach, along with a simulation study quantifying the accuracy and scalability of our proposed approach in practice.
\end{abstract}


\noindent%
{\it Keywords:} Distributed computing, high-dimensional feature space, nearest neighbor search, statistical scalability, tree data structures

\vspace{\baselineskip}%
\noindent%
{\it AMS subject classifications:} 
62R07, 68P05, 68P10, 68T09, 68W10
\section{Introduction}\label{sec:introduction}

Local neighborhood queries, as a form of proximity search, are of fundamental interest in modern scientific computing for large data sets. Indeed, many areas of statistics and data science such as range search in a statistical decision tree, clustering, nearest neighbors search, local regression, and so on make use of such ideas. However, when data sets are stored in a contemporary distributed environment such as Spark \citep{Zaharia2016}, identifying the local neighborhood around a given point in a multidimensional setting can be challenging: There is less scope of interaction between subsets of a distributed data set, and often it becomes increasingly difficult to implement more mathematically or computationally sophisticated algorithms. A significant current literature aims to address this problem. For example, low-distortion embedding \citep{Ailon2009} can speed up search algorithms in approximate nearest neighbors, whereas parallel algorithms for nearest neighbor search \citep{Hu2015,Chen2018,Pinkman2020} can offer increased scalability, even potentially in high-dimensional settings \citep{Xiao2016}.

The majority of such approaches involve the construction of a $k$-d tree for multivariate data as a generic data structure \citep{Bentley1975}. Similarly to a binary tree, a $k$-d tree divides the data recursively at each level of the tree along an axis called the key for that level. However, as opposed to a standard binary tree which has only one key for every level of the tree, in a $k$-d tree uses $k$ keys and cycles through these keys for successive levels of the tree. For example, to build a $k$-d tree from three-dimensional points comprising $(x, y, z)$ coordinates, keys would by default be cycled as $x, y, z, x, y, z, \dots$, for successive levels of the $k$-d tree. Every non-leaf node divides the space into two parts, known as half-spaces. This node acts as a boundary point for the two half-spaces. Points to the left of this boundary along the key coordinate are represented by the left sub-tree of that node, and points right are represented by the right sub-tree. So, for example, if at a given level the $x$ coordinate is chosen as key, then all points in the sub-tree with a smaller $x$ value than the node will appear in the left sub-tree, and all points with larger $x$ value will be in the right sub-tree.

For this reason, $k$-d trees have seen wide use as efficient tools to subdivide point clouds of input data into sub-spaces of nearly equal volume. There is a more logically efficient but computationally complex scheme for cycling the keys that chooses the coordinate that has the widest dispersion or largest variance to be the key for a given level \citep{Friedman1977}, with the possibility of non-unique keys. Observe that, since the keys are different at different levels of a $k$-d tree, it is impossible to perform any re-balancing techniques, such as are used to build so-called AVL trees \citep{Velskii1962} or red--black trees \citep{Bayer1972, Guibas1978}. 

\begin{figure}[!htbp]
\begin{center}
\includegraphics[width=5in]{./Rplot.eps}
\end{center}
\caption{\label{fig:kdtree}Canonical $k$-d tree construction. Initially at level $1$, all data points lie within the rectangular cell shown. The first splitting hyperplane is determined by the median of the $x$ coordinates of all points; it produces two new cells. At level $2$, we look at all points in the left (respectively\ right) cell, with the splitting hyperplane now made at the median of the $y$ coordinates of the points in this cell. At level $3$, again we choose the corresponding $x$ coordinates to make the split. Median computation means that cell counts are almost equal across each level, ensuring that the $k$-d tree is balanced.}
\end{figure}

As shown in Figure \ref{fig:kdtree}, the canonical approach to constructing a $k$-d tree computes medians of subsets of the input data at each level of the tree. As we move down the levels, we choose data variables periodically to select splitting hyperplanes. We split along the median of the selected variable. Choosing the medians as splitting hyperplanes constructs a balanced $k$-d tree, whereby each leaf node is approximately the same distance from the root. If medians can be found in time $O(n)$, it is possible to construct a $k$-d tree in time $O(n\log n)$ \citep{Bentley1975}. This cannot be done with exact sorting algorithms such as quick-sort, merge-sort, or heap-sort, with the latter leading instead to $O(n\log^2n)$ time for $k$-d tree construction \citep{Wald2006}. Note that the use of medians also means that the entire input data set must be read upon algorithm initialization.

Our main interest here lies developing in a parallel-computation approach to approximating medians, which also has the advantage of being easily implemented using typical programming models for contemporary distributed computing environments (e.g., map-reduce \citep{Dean2008}). Other authors have recently explored a batched incremental approach of constructing $k$-d trees \citep{Bleloch2018}, an adaptive split and sort strategy for parallel $k$-d trees construction \citep{Wehr2018}, and a construction based on pre-sorted results \citep{Brown2015b, Cao2020}. Other pre-sorting algorithms are common---to avoid re-sorting at each level of the tree---but are known to have poor worst-case performance despite a best-case complexity of $O(n\log n)$ \citep{Wald2006}. Another approach is to pre-sort points in each of $k$ dimensions, and then maintain the order of these $k$ sorts when building a $k$-d tree, achieving a worst-case complexity of $O(kn\log n)$ \citep{Procopiuc2003, Brown2015}. Additional constructions predominate in the ray-tracing literature for computer graphics \citep{Hunt2006, Shevtsov2007, Zhou2008, Soupikov2008, Choi2010}.

This article introduces a scalable parallel algorithm to construct balanced $k$-d trees through the approximation of medians. We first describe the intuition underlying our approach in section \ref{sec:intution}, and then provide our main theoretical results in section \ref{sec:main}. Next, in section \ref{sec:algorithm}, we develop an algorithm for balanced approximate $k$-d tree construction based on these results, and in section \ref{sec:performance} we describe a simulation study quantifying accuracy and scalability. Finally, we conclude in section \ref{sec:disc} with a brief discussion.
 
\section{Intuition underlying $k$-d tree construction in parallel, distributed environments}\label{sec:intution}

Assume that we have a data set $X$, possibly large and distributed, and an index set $I$ such that the $i$th element of $X$ is denoted as $x_{\:i}$ for $i\in I$. We first describe the $k$-d tree construction procedure in terms of boundary points or vertices and neighborhood or cells. Let us consider the usual construction algorithm of a $k$-d tree. It is a recursive algorithm whereby in each recursion, we get a new level or set of nodes from the previous level or set of nodes. These nodes can be also thought in terms of vertices of neighborhoods. Suppose we are at a certain level $d$ of the $k$-d tree, and we want to get the vertices for the next level. We have a number of neighborhoods in this level, and if we get the new vertices corresponding to each of these neighborhoods, we can easily get all the sub-neighborhoods for the next level $d+1$. 
First, let us figure out how to get the vertex where we divide a neighborhood. Let a general neighborhood at depth $d$ be denoted as: $\big(\mathbf{a},\mathbf{b}\big)=\big((a_{\:1},b_{\:1}),\dots,(a_{\:p},b_{\:p})\big)$. Suppose at depth $d$ that we want divide the data along the $t$th coordinate. Then, we must compute the median $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$ along this $t$th coordinate for all observations $\mathbf{x}_{\:i}$ that lie inside the interval $(\mathbf{a}, \mathbf{b})$. Let us denote the total number of observations $\mathbf{x}_{\:i}$ that lie inside the open interval $(\mathbf{a},\mathbf{b})$ by $\boldsymbol{\mathsf{1}}(\mathbf{X},\mathbf{a},\mathbf{b})$. Observe that we have the expression
\begin{align*}
\boldsymbol{\mathsf{1}}(\mathbf{X},\mathbf{a},\mathbf{b})=\sum_{i\in I}\mathsf{1}(\mathbf{a}<\mathbf{x}_{\:i}<\mathbf{b})=\sum_{i\in I}\left(\prod_{k=1}^p\mathsf{1}(a_{\:k}<x_{\:i,\:k}<b_{\:k})\right).
\end{align*}

For a general $(\mathbf{a},\mathbf{b})\subseteq(\mathbf{0},\mathbf{1})$ and $m\in\mathbb{R}$, let us define the $(p-1)$-dimensional set:
\begin{align*}
\mathcal{A}_{\:t}(m,\mathbf{a},\mathbf{b})=\big\{\mathbf{x}\in(\mathbf{0},\mathbf{1})\colon x_{\:t}=m,a_{\:k}<x_{\:k}<b_{\:k}\text{ for }1\leq k\leq p,k\neq t\big\}. 
\end{align*}
Let us also introduce $p$-dimensional vector $\mathbf{a}_{\:\text{-}t}(m)$ such that:
\begin{align*}
\tilde{\mathbf{a}}=\mathbf{a}_{\:\text{-}t}(m)\leftrightarrow\tilde{a}_{\:i}=a_{\:i}\text{ for }i\neq t, 1\leq i\leq p\text{ and }\tilde{a}_{\:t}=m.
\end{align*}
Observe $(\mathbf{a},\mathbf{b})$ is the disjoint union of $\big(\mathbf{a},\mathbf{b}_{\:\text{-}t}(m)\big)$, $\big(\mathbf{a}_{\:\text{-}t}(m),\mathbf{b}\big)$ and $\mathcal{A}_{\:t}(m,\mathbf{a},\mathbf{b})$. Since $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$ the median along the $t$th coordinate for all the observations $\mathbf{x}_{\:i}$, that lie inside the interval $(\mathbf{a}, \mathbf{b})$, the two disjoint intervals: $\big(\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\big)$ and $\big(\mathbf{a}_{\:\text{-}t}\big(m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\big)$ should contain equal number of observations. 

Therefore, we can find the median $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$ by solving the following equation for $m\in(a_{\:t},b_{\:t})$:
\begin{align*}
\boldsymbol{\mathsf{1}}\big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}(m)\big)=\boldsymbol{\mathsf{1}}\big(\mathbf{X},\mathbf{a}_{\:\text{-}t}(m),\mathbf{b}\big).
\end{align*}
We standardize the function $\boldsymbol{\mathsf{1}}(\mathbf{X},\mathbf{a},\mathbf{b})$ to $\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})=(1/|\mathbf{X}|)\cdot\boldsymbol{\mathsf{1}}(\mathbf{X},\mathbf{a},\mathbf{b})$. Observe that $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$ is also a solution to the following equation for $m\in(a_{\:t},b_{\:t})$:
\begin{align*}
\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}(m)\big)=\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X},\mathbf{a}_{\:\text{-}t}(m),\mathbf{b}\big).
\end{align*}
Note that $\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})$ always lies inside $(0,1)$, as opposed to $\boldsymbol{\mathsf{1}}(\mathbf{X},\mathbf{a}, \mathbf{b})$, which almost surely grows with $|\mathbf{X}|$. With this split of $\left(\mathbf{a},\mathbf{b}\right)$ at the median $m(\mathbf{X}, \mathbf{a},\mathbf{b})$, we get sub-neighborhoods $\big(\mathbf{a}_{\:\text{left}},\mathbf{b}_{\:\text{left}}\big)=\big(\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\big)$ and $\big(\mathbf{a}_{\:\text{right}},\mathbf{b}_{\:\text{right}}\big)=\big(\mathbf{a}_{\:\text{-}t}\big(m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\big)$.

Now, we will show how the canonical $k$-d tree construction procedure can be identified in terms of the conditional medians $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$. Recall our assumption that each observation of the data $\mathbf{X}$ has been scaled, so that they lie in the $p$-dimensional interval $(\mathbf{0},\mathbf{1})$, so that $0<x_{\:i,\:k}<1$ for $i\in I, 1\leq k\leq p$. We start our $k$-d tree construction algorithm with the single neighborhood $(\mathbf{0},\mathbf{1})=\big((0,1),(0,1),\dots,(0,1)\big)$. 

At level $1$, we pick the first coordinate $x_{\:1}$ as our splitting direction and split along $x_{\:1}$ at the median value $m_{\:1,\:1}(\mathbf{X})=m_{\:1}(\mathbf{X},\mathbf{0},\mathbf{1})$. This split produces two disjoint sub-neighborhoods of $(\mathbf{0},\mathbf{1})$: $\big(\big(0,m_{\:1,\:1}(\mathbf{X})\big),(0,1),\dots,(0,1)\big)=\big(\mathbf{0},\mathbf{1}_{\:\text{-}1}\big(m_{\:1,\:1}(\mathbf{X})\big)\big)$ and $\big(\big(m_{\:1,\:1}(\mathbf{X}),1\big),(0,1),\dots,(0,1)\big)=\big(\mathbf{0}_{\:\text{-}1}\big(m_{\:1,\:1}(\mathbf{X})\big),\mathbf{1}\big)$. The union of these sub-neighborhoods along with the $(p-1)$-dimensional plane $\mathcal{A}_{\:1}\big(m_{\:1,\:1}(\mathbf{X}),\mathbf{0},\mathbf{1}\big)$, is $\big(\mathbf{0},\mathbf{1}\big)$. 

At level $2$, we pick the second coordinate $x_{\:2}$ as our splitting direction and split each of these neighborhoods along $x_{\:2}$ at corresponding median values. Let us denote these two medians as $m_{\:2,\:1}(\mathbf{X})$ and $m_{\:2,\:2}(\mathbf{X})$. Then our resulting four subset neighborhoods after the second split are: $\big(\big(0,m_{\:1,\:1}(\mathbf{X})\big),\big(0,m_{\:2,\:1}(\mathbf{X})\big),\dots,(0,1)\big)$, $\big(\big(0,m_{\:1,\:1}(\mathbf{X})\big),\big(m_{\:2,\:1}(\mathbf{X}),1\big),\dots,(0,1)\big)$, $\big(\big(m_{\:1,\:1}(\mathbf{X}),1\big),\big(0,m_{\:2,\:2}(\mathbf{X})\big),\dots,(0,1)\big)$ and $\big(\big(m_{\:1,\:1}(\mathbf{X}),1\big),\big(m_{\:2,\:2}(\mathbf{X}),1\big),\dots,(0,1)\big)$. The union of these intervals, along with the $(p-1)$-dimensional planes $\mathcal{A}_{\:1}\big(m_{\:1,\:1}(\mathbf{X}),\mathbf{0},\mathbf{1}\big)$, $\mathcal{A}_{\:2}\big(m_{\:2,\:1}(\mathbf{X}),\mathbf{0},\mathbf{1}_{\:\text{-}1}\big(m_{\:1,\:1}(\mathbf{X})\big)\big)$ and $\mathcal{A}_{\:2}\big(m_{\:2,\:2}(\mathbf{X}),\mathbf{0}_{\:\text{-}1}\big(m_{\:1,\:1}(\mathbf{X})\big),\mathbf{1}\big)$, is easily verified to be $(\mathbf{0},\mathbf{1})$. 

In general we cycle through all the coordinates in this manner. Suppose at level $d$ we pick the coordinate $x_{\:t}$; then we start with $2^{d-1}$ number of neighborhoods and we split each of these neighborhoods in two subset neighborhoods along $x_{\:t}$ at the median values. Then, at level $d$ we get $2^{d-1}$ median values $m_{\:d,\:1}(\mathbf{X}),\dots,m_{\:d,\:2^{d-1}}(\mathbf{X})$. We will have $2^{d-1}$ splits at level $d$, producing $2^d$ neighborhoods before proceeding to level $d+1$. If we continue and construct a $k$-d tree of depth $D$, we will compute $2^D-1$ conditional median statistics $m_{\:1,\:1}(\mathbf{X})$; $m_{\:2,\:1}(\mathbf{X})$, $m_{\:2,\:2}(\mathbf{X})$; $\dots$; $m_{\:D,\:1}(\mathbf{X})$, $\dots,m_{\:D,\:2^{D-1}}(\mathbf{X})$ in the construction process. Observe that these $2^D-1$ statistics give us all necessary and sufficient information to construct the entire $k$-d tree. 

\section{Main results}\label{sec:main}

The $2^D-1$ conditional medians needed to construct a canonical $k$-d tree of depth $D$ cannot be computed exactly in parallel. Instead, using the techniques developed by \citet{Chakravorty2021}, we propose to approximate each such median $m_{\:d,\:k}(\mathbf{X})$ by the $J$th term of a sequence of statistics $\{\hat{m}_{\:d,\:k}^J(\mathbf{X})\}_{J=0}^\infty$ that are easily computed in parallel. Below we show $\hat{m}_{\:d,\:k}^J(\mathbf{X})$ to be the minimizer of an objective function which approximates the standardized sum-of-product of indicators $\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})$ described in section \ref{sec:intution}. Specifically, this approximation takes the form of a $J$th partial sum of a convergent basis expansion of the indicator functions, from which it can be seen that the choice of $J$ will provide a user-controlled trade-off between speed and accuracy.

\subsection{Approximation of indicator functions}\label{subsec:approx}

Let $a\in[0,1)$ and $b\in(0,1]$, such that $a<b$ and $(a,b)\subseteq(0,1)$. Define the set:
\begin{align*}
P_{\:(a,b)}=(0,1)\setminus\Big(\{a\}^{\mathsf{1}(a>0)}\cup\{b\}^{\mathsf{1}(b<1)}\Big).
\end{align*}

We begin with the following lemma.

\begin{lemma}\label{lemma:1d:exp}
For $x\in P_{\:(a,b)}$, we have the following expansion:
\begin{align*}
\mathsf{1}(a<x<b)=\sum_{j=0}^{\infty}c_{\:j}(x)g_{\:j}(a,b),
\end{align*}
where for $x\in(0,1)$ and $j\in\mathbb{N}^+$ we define
\begin{align*}
&\mathsf{c}_{\:0}(x)=1,\quad \mathsf{c}_{\:2j-1}(x)=\cos\big((2j-1)x\big),\quad \mathsf{c}_{\:2j}(x)=\sin\big((2j-1)x\big);\text{ and } \\
&\mathsf{g}_{\:0}(a,b)=1-\frac{1}{2}\big(\mathsf{1}(a>0)+\mathsf{1}(b<1)\big), \\
&\mathsf{g}_{\:2j-1}(a,b)=\frac{2}{\pi(2j-1)}\Big(\mathsf{1}(b<1)\sin\big((2j-1)b\big)-\mathsf{1}(a>0)\sin\big((2j-1)a\big)\Big), \\ 
&\mathsf{g}_{\:2j}(a,b)=\frac{2}{\pi(2j-1)}\Big(\mathsf{1}(a>0)\cos\big((2j-1)a\big)-\mathsf{1}(b<1)\cos\big((2j-1)b\big)\Big).
\end{align*}
\end{lemma}

\begin{proof}
See Appendix \ref{ap:approx_proofs}.
\end{proof}

Next, let $\mathsf{1}_{\:J}(x,a,b)$ denote the $(2J)$th partial sum in the series expansion of $\mathsf{1}(a<x<b)$ in Lemma \ref{lemma:1d:exp} for $J\in\mathbb{N}^+$, so that:
\begin{align*}
\mathsf{1}_{\:J}(x,a,b)=\sum_{j=0}^{2J}\mathsf{c}_{\:j}(x)\cdot\mathsf{g}_{\:j}(a,b)\text{ for }J\in\mathbb{N}^+.
\end{align*}
Now, for a $\delta\in(0,1)$, let us define the set:
\begin{align*}
U_{\:\delta,\:(a,b)}=(0,1)\setminus\big((a-\delta,a+\delta)^{\mathsf{1}(a>0)}\cup(b-\delta,b+\delta)^{\mathsf{1}(b<1)}\big).
\end{align*}

We then have the following lemma.

\begin{lemma}\label{lemma:1d:unif}
(A)\ For any $\delta\in(0,1)$, the sequence of functions $\{\mathsf{1}_{\:J}(x,a,b)\}_{\:J=0}^{\infty}$ uniformly converges to the limit $\mathsf{1}(a<x<b)$ for $x\in U_{\:\delta,\:(a,b)}$.

(B)\ The sequence of functions $\{\mathsf{1}_{\:J}(x,a,b)\}_{\:J=0}^{\infty}$ is uniformly bounded for $x\in(0,1)$.
\end{lemma}

\begin{proof}
See Appendix \ref{ap:approx_proofs}.
\end{proof}

Finally, for $\mathbf{a}\in[\mathbf{0},\mathbf{1}),\mathbf{b}\in(\mathbf{0},\mathbf{1}]$, we define sets
\begin{align*}
P_{\:(\mathbf{a},\mathbf{b})}=\times_{l=1}^pP_{\:(a_{\:l},b_{\:l})},\quad U_{\:\delta,\:(\mathbf{a},\mathbf{b})}=\times_{l=1}^pU_{\:\delta,\:(a_{\:l},b_{\:l})}.
\end{align*}
Let $\mathbb{N}_{\:J}=\{0,1,\dots,2J\}$, and let $\boldsymbol{j}=(j_{\:1},\dots,j_{\:p})$ denote a general index element of $\mathbb{N}_{\:J,\:p}=\mathbb{N}_{\:J}\times\dots\times\mathbb{N}_{\:J}$($p$ times). Now for each $\boldsymbol{j}\in\mathbb{N}_{\:J,\:p}$, we define the following functions:
\begin{align*}
\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x})=\prod_{l=1}^p\mathsf{c}_{\:j_{\:l}}(x_{\:l}),\quad\boldsymbol{\mathsf{g}}_{\:\boldsymbol{j}}(\mathbf{a},\mathbf{b})=\prod_{l=1}^p\mathsf{g}_{j_{\:l}}(a_{\:l},b_{\:l}).
\end{align*}
We approximate $\mathsf{1}(\mathbf{a}<\mathbf{x}<\mathbf{b})$ with $\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})$, where
\begin{align*}
\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})&=\prod_{l=1}^p\mathsf{1}_{\:J}(x_{\:l},a_{\:l},b_{\:l})=\prod_{l=1}^p\Big(\sum_{j=0}^{2J}\mathsf{c}_{\:j}(x_{\:l})\cdot\mathsf{g}_{\:j}(a_{\:l},b_{\:l})\Big) \\
&=\sum_{\boldsymbol{j}\in\mathbb{N}_{\:J,\:p}}\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x})\cdot\boldsymbol{\mathsf{g}}_{\:\boldsymbol{j}}(\mathbf{a},\mathbf{b}).
\end{align*}

Lastly, we have the following lemma.

\begin{lemma}\label{lemma:pd:unif}
(A)\ For any $\delta\in(0,1)$, the sequence of functions $\{\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\}_{\:J=0}^{\infty}$ uniformly converges to the limit $\mathsf{1}(\mathbf{a}<\mathbf{x}<\mathbf{b})$ for $\mathbf{x}\in U_{\:\delta,\:(\mathbf{a},\mathbf{b})}$.

(B)\ The sequence of functions $\{\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\}_{\:J=0}^{\infty}$ is uniformly bounded for $\mathbf{x}\in(\mathbf{0},\mathbf{1})$.
\end{lemma}

\begin{proof}
See Appendix \ref{ap:approx_proofs}.
\end{proof}

\subsection{Stochastic bounds on accuracy}\label{subsec:stoch}

Consider a probability triple $(\Omega,\mathcal{F},P)$ giving rise to independent and identically distributed realizations $\{\mathbf{x}_{\:i}, i \in I\}$ of a random variable $\tilde{\mathbf{x}}\colon\Omega\to(\mathbf{0},\mathbf{1})$, so that $\mathbf{x}_{\:i}(w)$ is the value corresponding to a sample point $w\in\Omega$ for $i\in I$. Let us fix a $w\in\Omega$ and $n\in\mathbb{N}$, and let $\mathbf{X}(w,n)$ denote the input data  $\big(\mathbf{x}_{\:1}(w),\mathbf{x}_{\:2}(w),\dots,\mathbf{x}_n(w)\big)$, so that $|\mathbf{X}|=|\mathbf{X}(w,n)|=n$. For $\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}$, let us define the statistic $\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})=\sum_{i\in I}\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x}_{\:i})$, and its corresponding standardized version $\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})=\big(\nicefrac{1}{|\mathbf{X}|}\big)\cdot\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})$. Note that for any arbitrary partition $\big\{\mathbf{X}_{\:1},\dots,\mathbf{X}_{\:R}\big\}$ of the data $\mathbf{X}$ into $R$ subsets (here $R\in\mathbb{N}^+$ and $1\leq R\leq n$), we always have  $\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})=\sum_{r=1}^R\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X}_{\:r})$ for $\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}$.
So, for any distributed data set $\mathbf{X}$, the collection of statistics  $\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})$ for $\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}$, can exactly be computed in parallel. Observe: $\boldsymbol{\mathsf{C}}_{\:\boldsymbol{0}}(\mathbf{X})=\sum_{i\in I}1=|\mathbf{X}|$, where $\boldsymbol{0}$ is a $p$-dimensional vector of zeros. For $\boldsymbol{j}\in\mathbb{N}_{\:J,\:p}$, we have: $\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})=\big(\nicefrac{1}{\mathbf{X}}\big)\cdot\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})=\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})/\boldsymbol{\mathsf{C}}_{\:\boldsymbol{0}}(\mathbf{X})$. Thus, the collection of standardized statistics $\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})$ for $\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}$ also can be exactly computed in parallel.

Throughout this section, we will assume that $(\mathbf{a},\mathbf{b})$ is a fixed neighborhood inside $(\mathbf{0},\mathbf{1})$. We approximate $\boldsymbol{\mathsf{1}}(\mathbf{X},\mathbf{a},\mathbf{b})$ by $\boldsymbol{\mathsf{1}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$, defined as
\begin{align*}
\boldsymbol{\mathsf{1}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})=\sum_{i\in I}\mathsf{1}_J(\mathbf{x}_{\:i},\mathbf{a},\mathbf{b})=\sum_{i\in I}\sum_{\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}}\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x})\cdot\boldsymbol{\mathsf{g}}_{\:\boldsymbol{j}}(\mathbf{a},\mathbf{b}).
\end{align*}
This is a finite sum and we can exchange summation to obtain
\begin{align*}
\boldsymbol{\mathsf{1}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})=\sum_{\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}}\Big(\sum_{i\in I}\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x}_{\:i})\Big)\cdot\boldsymbol{\mathsf{g}}_{\:\boldsymbol{j}}(\mathbf{a},\mathbf{b})=\sum_{\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}}\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})\cdot\boldsymbol{\mathsf{g}}_{\:\boldsymbol{j}}(\mathbf{a},\mathbf{b}).
\end{align*}
If we standardize by dividing both sides by $|\mathbf{X}|$, we obtain:
\begin{align}\label{kd:eq:a}
\bar{\boldsymbol{\mathsf{1}}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})=\frac{1}{|\mathbf{X}|}\boldsymbol{\mathsf{1}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})=\sum_{\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}}\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})\cdot\boldsymbol{\mathsf{g}}_{\:\boldsymbol{j}}(\mathbf{a},\mathbf{b}).
\end{align}
Recall from section \ref{sec:intution} that $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$ solves the following  for $m\in(a_{\:t},b_{\:t})$:
\begin{align*}
\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}(m)\big)=\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X},\mathbf{a}_{\:\text{-}t}(m),\mathbf{b})\big).
\end{align*}

We will see that for large $J$ and large $|\mathbf{X}|$, it can be shown that $\bar{\boldsymbol{\mathsf{1}}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ is a good approximation to $\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})$. Consequently, we define $\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ as a solution to the following equation for $m\in(a_{\:t},b_{\:t})$:
\begin{align}\label{kd:eq:b}
\bar{\boldsymbol{\mathsf{1}}}_{\:J}\big(\mathbf{X},\mathbf{a},\mathbf{b}^{-t}(m)\big)=\bar{\boldsymbol{\mathsf{1}}}_{\:J}\big(\mathbf{X},\mathbf{a}^{-t}(m),\mathbf{b})\big).
\end{align}

To obtain a parallel $k$-d tree construction, we approximate $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$ with $\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ during the construction of the $k$-d tree, selecting the integer $J$ as a trade-off between approximation accuracy and speed. Since we have the relation $\bar{\boldsymbol{\mathsf{1}}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})=\sum_{\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}}\mathbf{g}_{\:\boldsymbol{j}}(\mathbf{a},\mathbf{b})\cdot\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})$, we realize that $\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ is a solution to an equation that is characterized by a set of statistics $\big\{\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})\colon\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}\big\}$ which can be computed entirely in parallel. Hence the computation of $\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ for $(\mathbf{a},\mathbf{b})\subseteq(\mathbf{0},\mathbf{1})$, and thus the construction of an approximate $k$-d tree, can be done straightforwardly within a parallel, distributed computing environment.

Define the error in approximation of $\mathsf{1}(\mathbf{a}<\mathbf{x}<\mathbf{b})$ at $\mathbf{x}$ as:
\begin{align*}
\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})=\mathsf{1}(\mathbf{a}<\mathbf{x}<\mathbf{b})-\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b}).
\end{align*}
Also define the total error $\mathsf{E}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ and the average error $\bar{\mathsf{E}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ as:
\begin{align*}
&\mathsf{E}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})=\boldsymbol{\mathsf{1}}(\mathbf{X},\mathbf{a},\mathbf{b})-\boldsymbol{\mathsf{1}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b}),\\ 
&\bar{\mathsf{E}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})=\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})-\bar{\boldsymbol{\mathsf{1}}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b}).
\end{align*}
Finally, let us also define the set
\begin{align*}
\mathcal{N}_{\:p}=\{\mathcal{A}_{\:t}(m,\mathbf{a},\mathbf{b}):1\leq t\leq p,m\in(0,1),(\mathbf{a},\mathbf{b})\subseteq(\mathbf{0},\mathbf{1})\}.
\end{align*}

Now, we state two basic assumptions for the random variable $\tilde{\mathbf{x}}$.

\begin{assumption}\label{assumption:positive_density}
$P:\mathbb{B}(\mathbf{0},\mathbf{1})\mapsto[0,1]$ is a probability measure which is absolutely continuous with respect to the Lebesgue measure $\lambda_{\:p}$ on $\mathbb{B}(\mathbf{0},\mathbf{1})$.
\end{assumption}

\begin{assumption}\label{assumption:sup_null_set}
\begin{align*}
\sup_{\mathcal{A}_{\:t}(m,\mathbf{a},\mathbf{b})\in\mathcal{N}_{\:p}}\bigg(\lim_{|\mathbf{X}|\to\infty}\Big|\frac{1}{|\mathbf{X}|}\sum_{i\in I}\mathsf{1}\big(\mathbf{x}_{\:i}\in \mathcal{A}_{\:t}(m,\mathbf{a},\mathbf{b})\big)\Big|\bigg)\overset{a.s.}{\rightarrow}0.
\end{align*}
\end{assumption}

These assumptions enable us to obtain the following stochastic bounds on approximation accuracy.

\begin{theorem}\label{thm:n_l=n_r}
Suppose Assumption \ref{assumption:positive_density} holds. Then, given any $(\mathbf{a},\mathbf{b})\subseteq(\mathbf{0},\mathbf{1})$, we have:
\begin{align*}
&(A)\lim_{J\to\infty}E_{\:P}\big(\mathsf{e}_{\:J}(\tilde{\mathbf{x}},\mathbf{a},\mathbf{b})\big)=0. \\
&(B) \lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\mathsf{E}}(\mathbf{X},\mathbf{a},\mathbf{b})\overset{a.s.}{=}0. \\
&(C) \lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big) \\
&\hspace{4cm}=\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b})\Big).
\end{align*}
\end{theorem}

\begin{proof}
See Appendix \ref{ap:stoch_proofs}.
\end{proof}

\begin{theorem}\label{thm:n_l=n/2}
Suppose Assumption \ref{assumption:positive_density} and Assumption \ref{assumption:sup_null_set} hold. Then, given any $(\mathbf{a},\mathbf{b})\subseteq(\mathbf{0},\mathbf{1})$, 
we have:
\begin{align*}
&\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\overset{a.s.}{=}\frac{1}{2}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b}), \\
&\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b}),\mathbf{b}\big)\Big)\overset{a.s.}{=}\frac{1}{2}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b}).
\end{align*}
\end{theorem}

\begin{proof}
See Appendix \ref{ap:stoch_proofs}.
\end{proof}

\section{Constructing a balanced $k$-d tree from distributed data}\label{sec:algorithm}

Let us briefly recall the canonical construction of a $k$-d tree and its equivalent formulation in terms of conditional medians $m_{\:t}(\mathbf{X},\mathbf{a},\mathbf{b})$ as discussed in section \ref{sec:intution}. To build a $k$-d tree of depth $D$ from data $\mathbf{X}$, we compute $2^D-1$ conditional medians $m_{\:1,\:1}(\mathbf{X})$; $m_{\:2,\:1}(\mathbf{X})$, $m_{\:2,\:2}(\mathbf{X})$; $\dots$; $m_{\:D,\:1}(\mathbf{X})$, $\dots$, $m_{\:D,\:2^{D-1}}(\mathbf{X})$, and these $2^D-1$ statistics provide us necessary and sufficient information to build the entire $k$-d tree. This is a naturally recursive procedure, in that $m_{\:2,\:1}(\mathbf{X})$ and $m_{\:2,\:2}(\mathbf{X})$ are dependent on $m_{\:1,\:1}(\mathbf{X})$, and so forth.

By contrast, given a parameter $J$, our approximate $k$-d tree construction will instead proceed by non-recursively computing $2^D-1$ approximate conditional medians $\hat{m}_{\:1,\:1,\:J}(\mathbf{X})$; $\hat{m}_{\:2,\:1,\:J}(\mathbf{X})$, $\hat{m}_{\:2,\:2,\:J}(\mathbf{X})$; $\dots$; $\hat{m}_{\:D,\:1,\:J}(\mathbf{X})$, $\dots$, $\hat{m}_{\:D,\:2^{D-1},\:J}(\mathbf{X})$. (To be clear, we have: $\hat{m}_{\:1,\:1,\:J}(\mathbf{X})=\hat{m}_{\:1,\:J}(\mathbf{X},\mathbf{0},\mathbf{1})$, $\hat{m}_{\:2,\:1,\:J}(\mathbf{X})=\hat{m}_{\:2,\:J}\big(\mathbf{X},\mathbf{0},\mathbf{1}_{\:\text{-}1}\big(\hat{m}_{\:1,\:J}(\mathbf{X},\mathbf{0},\mathbf{1})\big)\big)$, etc.) 

Observe that $\hat{m}_{\:d,\:k}^J(\mathbf{X})$ is formally a function of the statistics $\{\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X}):\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}$ for $1\leq d\leq D,1\leq k\leq 2^{d-1}$ which are statistics that can be computed entirely in parallel. Thus we have an approximate $k$-d tree construction in which the input data can be read once to compute $\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})$ for each $\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}$. Then, equations \ref{kd:eq:a} and \ref{kd:eq:b} are used recursively to compute $\hat{m}_{\:d,\:k}^J(\mathbf{X})$ for $1\leq d\leq D,1\leq k\leq 2^{d-1}$.

It is important to consider the metric by which approximation accuracy should be judged. For data analysis, a main purpose of the $k$-d tree construction is to divide a data set into neighborhoods containing almost equal numbers of observations. In the canonical construction of a $k$-d tree, if we start with $|\mathbf{X}|$ observations, at depth $D$, each of the cell neighborhoods contains approximately $\big(\nicefrac{1}{2^D}\big)\cdot|\mathbf{X}|$ observations (assuming we choose to discard any point on the cell boundaries). When we are approximating $m_{\:d,\:k}^J(\mathbf{X})$ by $\hat{m}_{\:d,\:k,\:J}(\mathbf{X})$, even if we are off by a small amount, as long as the eqi-cardinality of the neighborhoods is maintained, we have succeeded in constructing a sufficiently accurate $k$-d tree to serve the purpose at hand. 

Thus, instead of judging how well the approximate median $\hat{m}_{\:d,\:k,\:J}(\mathbf{X})$ approximates the exact median $m_{\:d,\:k}(\mathbf{X})$, for $1\leq d\leq D,1\leq k\leq 2^{d-1}$, we focus on how well the approximate $k$-d tree subdivides the overall data point cloud into cell neighborhoods having almost equal numbers of observations. At depth $D$ we have $2^D$ neighborhoods and so to judge the accuracy of the $k$-d tree, we can look at the range of all cell boundary counts and determine their distances from the ideal cell boundary counts of $\big(\nicefrac{1}{2^D}\big)\cdot|\mathbf{X}|$ observations for each cell.

Suppose that during the construction of a $k$-d tree, a general neighborhood $(\mathbf{a},\mathbf{b})$ containing $n$ observations gets split into disjoint sub-neighborhoods $(\mathbf{a}_{\:\text{left}},\mathbf{b}_{\:\text{left}})$ and $(\mathbf{a}_{\:\text{right}},\mathbf{b}_{\:\text{right}})$ containing $\hat{n}_{\:l}$ and $\hat{n}_{\:r}$ observations. For future reference, we will be calling the neighborhood $(\mathbf{a},\mathbf{b})$ as the parent neighborhood of its two children neighborhoods $(\mathbf{a}_{\:\text{left}},\mathbf{b}_{\:\text{left}})$ and $(\mathbf{a}_{\:\text{right}},\mathbf{b}_{\:\text{right}})$. Now from Theorem \ref{thm:n_l=n/2}, if Assumption \ref{assumption:positive_density} and  Assumption \ref{assumption:sup_null_set} holds, then given a $\epsilon>0$, we can say that, for large enough $|\mathbf{X}|$ and $J$, we will have:
\begin{align*}
&\big|\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a}_{\:\text{left}},\mathbf{b}_{\:\text{left}})-\frac{1}{2}\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})\big|<\epsilon,\text{ and } \\
&\big|\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a}_{\:\text{right}},\mathbf{b}_{\:\text{right}})-\frac{1}{2}\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})\big|<\epsilon.
\end{align*}
In other words, for an arbitrary interval with $n$ elements, we will have:
\begin{align*}
\big|\hat{n}_{\:l}-\frac{n}{2}\big|<\epsilon\:|\mathbf{X}|\text{ and }\big|\hat{n}_{\:r}-\frac{n}{2}\big|<\epsilon\:|\mathbf{X}|.
\end{align*}

Let $\hat{n}_{\:d,\:k,\:J}(\mathbf{X})$ denote the cell count of the $k$th cell at depth $d$, for parameter $J$, for $1\leq d\leq D,1\leq k\leq 2^d$. For consistency, we let $\hat{n}_{\:0,\:1,\:J}(\mathbf{X})=|\mathbf{X}|$, and we assume that at level $0$, there is only one cell containing all the observations, and in general, we have $2^d$ cells at level $d$. At depth $D$, consider the $k$th cell, and let $k_{\:(0)},k_{\:(1)},\dots,k_{\:(D)}$ be the sequence of parent cell indices of this cell, so that $k_{\:(0)}=1$, $k_{\:(D)}=k$ and  $1\leq k_{(d)}\leq 2^d$ for $1\leq d<D$. Then for large enough $|\mathbf{X}|$ and $J$, we can say from last paragraph that:
\begin{align*}
\big|\:\hat{n}_{\:d,\:k_{\:(d)},\:J}(\mathbf{X})-\frac{1}{2}\hat{n}_{\:d-1,\:k_{\:(d-1)},\:J}(\mathbf{X})\:\Big|<\epsilon\:|\mathbf{X}|\text{ for }1\leq d\leq D.
\end{align*}
So, for large enough $|\mathbf{X}|$ and $J$, we have:
\begin{align*}
&\hspace{-2em}\Big|\:\hat{n}_{\:D,\:k,\:J}(\mathbf{X})-\frac{1}{2^D}\hat{n}_{\:0,\:1,\:J}(\mathbf{X})\:\Big| \\
&\leq \sum_{d=1}^D\Big|\:\frac{1}{2^{D-d}}\hat{n}_{\:d,\:k_{\:(d)},\:J}(\mathbf{X})-\frac{1}{2^{D-d+1}}\hat{n}_{\:d-1,\:k_{\:(d-1)},\:J}(\mathbf{X})\:\Big| \\
&=\sum_{d=1}^D\frac{1}{2^{D-d}}\Big|\:\hat{n}_{\:d,\:k_{\:(d)},\:J}(\mathbf{X})-\frac{1}{2}\hat{n}_{\:d-1,\:k_{\:(d-1)},\:J}(\mathbf{X})\:\Big| \\
&<\sum_{d=1}^D\frac{\epsilon\:|\mathbf{X}|}{2^{d-1}}<2\epsilon\:|\mathbf{X}|.
\end{align*}
In other words, if we assume the technical conditions of Assumption \ref{assumption:positive_density} and Assumption \ref{assumption:sup_null_set}, we indeed have the desired result that
\begin{align*}
\Big|\hat{n}_{\:D,\:k,\:J}(\mathbf{X})-\frac{1}{2^D}|\mathbf{X}|\Big|< 2\epsilon\:|\mathbf{X}|\text{ for }1\leq k\leq 2^D
\end{align*}
as both $|\mathbf{X}|$ and $J$ become large. Thus our approximate $k$-d tree construction is assured to become asymptotically accurate as the data set size increases and we consider an increasingly large approximation order parameter $J$.

\section{Accuracy and computational scalability}\label{sec:performance}

We now study the accuracy and scalablity of this method of $k$-d tree construction algorithm using simulated data. An implementation of this construction in map-reduce is provided in Appendix \ref{ap:construct}.

We simulated observations $\tilde{\mathbf{x}}=(\tilde{x},\tilde{y},\tilde{z})~$ from a multivariate normal distribution with mean $\mathbf{0}_{\:3}'$ and common correlation $\rho$ between each distinct pair of variables. We considered values for $\rho$ in the set $\{0,0.25,0.5,0.75\}$, and simulated $N=3\times 10^9$ observations for each value.

\subsection{Assessment of accuracy}\label{sec:accuracy}

We first constructed a $k$-d tree for each $\rho$, and then generated box plots to observe distributions of cell counts at each level of $k$-d tree depth from $6$ to $10$. The exact $k$-d tree construction is impractical at this scale, and so we judge accuracy in terms of cell counts rather than cell boundaries.

\begin{figure}[t]
\begin{center}
\includegraphics[trim={.3in 0 0 0}, clip, width=3.5in, angle=270]{./kdtree_cellcount_boxplot.eps}
\end{center}
\caption{\label{fig:norm_acc}Balanced tree accuracy measured by cell counts, for simulated normal data in three dimensions.}
\end{figure}

Figure \ref{fig:norm_acc} shows the results of this procedure for data simulated from the normal distribution described above, where we take $\tilde{x}$, $\tilde{y}$ and $\tilde{z}$ as our variables to construct the approximate $k$-d tree. Each panel represents a collection of $k$-d trees corresponding to depth $D$ and accuracy parameter $\underline{\boldsymbol{J}}$ (described in section \ref{sec:eff}), as different rows represent different depth and different columns represent different accuracy parameters. Inside each panel we have four different box plots corresponding to four levels of correlation $\rho$. 

For each combination of depth $D$,  accuracy parameter  $\underline{\boldsymbol{J}}$, and correlation $\rho$, the corresponding box plot demonstrates the distribution of $k$-d tree neighborhood cell counts. For example, the third (from bottom) box plot in the top-left panel demonstrates neighborhood cell counts of $k$-d tree output for depth $D=6$,  accuracy parameter $\underline{\boldsymbol{J}}=(3,5)$ and $\rho=0.5$. At depth $D=6$ we should have $2^6=64$ neighborhoods, for exact canonical construction we should have $(3\times 10^9)/64\simeq 2^{25.48232}$ observations in each neighborhood. Here, the box plot shows these neighborhood cell counts range from about $2^{25.45}$ to $2^{25.52}$, and the box labels shows half of the cell counts range from $2^{25.46}$ to $2^{25.49}$.

As a rule of thumb we can say that a narrower box plot corresponds to a more accurate $k$-d tree construction by this measure. We may also make the following general qualitative observations regarding Figure \ref{fig:norm_acc}. First, the modulus of the vector coefficient $\underline{\boldsymbol{J}}$ increases, the accuracy of the $k$-d tree output indeed generally increases. Second, the tree level increases, the accuracy of the $k$-d tree output generally decreases. This is expected because if we approximate the cell boundaries badly at lower levels, we will approximate the cell boundaries much worse at higher levels, since they are dependent on cell boundaries badly at lower levels. Finally, as correlation $\rho$ increases, the accuracy decreases in general. (However, this is harder to identify at higher levels.)

\subsection{Computational scalability}\label{sec:runtime}

\begin{figure}[t]
\begin{center}
\includegraphics[trim={.3in .3in 0 0}, clip, width=3.5in, angle=270]{./kdtree_runtime_dotplot.eps}
\end{center}
\caption{\label{fig:norm_run}Running times for approximate $k$-d tree construction with increasing modulus of accuracy parameter $\underline{\boldsymbol{J}}$.}
\end{figure}

Figure \ref{fig:norm_run} quantifies the running time of this approximate $k$-d tree construction for different accuracy parameters $\underline{\boldsymbol{J}}$ and correlations $\rho$. Observe that the running time does not depend heavily on depth $D$, because the map-reduce step is the major driver, and post-reduce local optimizations here take negligible time compared to the main map-reduce step. In general, running time increases as $p$ increases and the modulus of the accuracy parameter $\underline{\boldsymbol{J}}$ increases, but that $\rho$ does not appear to have any major influence.

\section{Discussion}\label{sec:disc}

In this article we have described a scalable mechanism to construct $k$-d trees for large data sets, which can be implemented naturally within a distributed computing environment using programming models such as map-reduce. While the median computations necessary for exact construction of a canonical $k$-d tree cannot be done in parallel, we have instead proposed a parallel median approximation algorithm which enables all necessary quantities to construct a canonical $k$-d tree to be computed using only a single pass over the input data. We have shown this approach to come with a variety of theoretical guarantees as described in section \ref{sec:main}, focusing in particular on its ability to produce balanced $k$-d trees as discussed in section \ref{sec:algorithm}. In turn, section \ref{sec:performance} has provided a simulation study quantifying both the accuracy and speed of a concrete map-reduce implementation using artificially generated data, as a function of various algorithm parameters and data properties.


\begin{thebibliography}{27}

\bibitem[Ailon and Chazelle(2009)]{Ailon2009}
N.~Ailon and B.~Chazelle.
\newblock The fast Johnson--Lindenstrauss transform and approximate nearest
  neighbors.
\newblock \emph{SIAM Journal on Computing}, 39\penalty0 (1):\penalty0 302--322,
  2009.

\bibitem[Bayer(1972)]{Bayer1972}
R.~Bayer.
\newblock Symmetric binary B-trees: Data structure and maintenance algorithms.
\newblock \emph{Acta Informatica}, 1\penalty0 (4):\penalty0 290--306, 1972.

\bibitem[Bentley(1975)]{Bentley1975}
J.~L.~Bentley.
\newblock Multidimensional binary search trees used for associative searching.
\newblock \emph{Communications of the ACM}, 18\penalty0 (9):\penalty0 509--517,
  1975.

\bibitem[Friedman and Finkel(1977)]{Friedman1977}
J.~L.~Bentley, J.~H.~Friedman, and R.~A. Finkel.
\newblock An algorithm for finding best matches in logarithmic expected time.
\newblock \emph{ACM Transactions on Mathematical Software}, 3\penalty0
  (3):\penalty0 209--226, 1977.

\bibitem[Blelloch et~al.(2018)Blelloch, Gu, Shun, and Sun]{Bleloch2018}
G.~E. Blelloch, Y.~Gu, J.~Shun, and Y.~Sun.
\newblock Parallel write-efficient algorithms and data structures for
  computational geometry.
\newblock In \emph{Proceedings of the 30th on Symposium on Parallelism in
  Algorithms and Architectures}, pages 235--246, 2018.

\bibitem[Brown(2015a)]{Brown2015}
R.~A. Brown.
\newblock Building a balanced $k$-d tree in $O(kn \log n)$ time.
\newblock \emph{the Journal of Computer Graphics Techniques}, 4\penalty0
  (1):\penalty0 50--68, 2015.
  
\bibitem[Brown(2015b)]{Brown2015b}
R.~A. Brown.
\newblock Building a balanced $k$-d tree with map-reduce, arXiv preprint arXiv:1512.06389, 2015.

\bibitem[Cao et~al.(2020)Cao, Wang, Zhao, Duan, and Zhang]{Cao2020}
Y.~Cao, H.~Wang, W.~Zhao, B.~Duan, and X.~Zhang.
\newblock A new method to construct the $k$-d tree based on presorted results.
\newblock \emph{Complexity}, 2020:\penalty0 1--7, 2020.

\bibitem[Chakravorty(2019)]{Chakravorty2019}
A.~Chakravorty.
\newblock \emph{Embarrassingly Parallel Statistics and its Applications}.
\newblock PhD thesis, Purdue University, 2019.

\bibitem[Chakravorty et~al.(2021)Chakravorty, Cleveland, and
  Wolfe]{Chakravorty2021}
A.~Chakravorty, W.~S. Cleveland, and P.~J. Wolfe.
\newblock Statistical scalability and approximate inference in distributed
  computing environments, arXiv preprint arXiv:2112.15572, 2021.

\bibitem[Chen et~al.(2019)Chen, Zhou, Tang, Singh, Bouguila, Wang, Wang, and
  Dua]{Chen2018}
Y.~Chen, L.~Zhou, Y.~Tang, J.~P. Singh, N.~Bouguila, C.~Wang, H.~Wang, and
  J.~Dua.
\newblock Fast neighbor search by using revised $k$-d tree.
\newblock \emph{Information Sciences}, 472:\penalty0 145--162, 2019.

\bibitem[Choi et~al.(2010)Choi, Komuravelli, Lu, Sung, Bocchino, Adve, and
  Hart]{Choi2010}
B.~Choi, R.~Komuravelli, V.~Lu, H.~Sung, R.~L. Bocchino, S.~V. Adve, and J~.C.
  Hart.
\newblock Parallel {SAH} $k$-d tree construction.
\newblock In \emph{Proceedings of the Conference on High Performance Graphics},
  pages 77--86, 2010.

\bibitem[Dean and Ghemawat(2008)]{Dean2008}
J.~Dean and S.~Ghemawat.
\newblock Map-reduce: Simplified data processing on large clusters.
\newblock \emph{Communications of the ACM}, 51\penalty0 (1):\penalty0 107--113,
  2008.

\bibitem[Guibas and Sedgewick(1978)]{Guibas1978}
L. J.~Guibas and R.~Sedgewick.
\newblock A dichromatic framework for balanced trees.
\newblock In \emph{19th Annual Symposium on Foundations of Computer Science},
  pages 8--21, 1978.

\bibitem[Hunt et~al.(2006)Hunt, Mark, and Stoll]{Hunt2006}
W.~Hunt, W.~R. Mark, and G.~Stoll.
\newblock Fast $k$-d tree construction with an adaptive error-bounded
  heuristic.
\newblock In \emph{2006 IEEE Symposium on Interactive Ray Tracing}, pages
  81--88, 2006.

\bibitem[Hu and Ahmadi(2015)]{Hu2015}
S.~Nooshabadi, L.~Hu, and M.~Ahmadi.
\newblock Massively parallel $k$-d tree construction and nearest neighbor search
  algorithms.
\newblock In \emph{2015 IEEE International Symposium on Circuits and Systems
  (ISCAS)}, pages 2752--2755, 2015.

\bibitem[Pinkham and Zhang(2020)]{Pinkman2020}
R.~Pinkham, S.~Zeng, and Z.~Zhang.
\newblock Quicknn: Memory and performance optimization of $k$-d tree based
  nearest neighbor search for 3d point clouds.
\newblock In \emph{2020 IEEE International Symposium on High Performance
  Computer Architecture (HPCA)}, pages 180--192, 2020.

\bibitem[Procopiuc et~al.(2003)Procopiuc, Agarwal, Arge, and
  Vitter]{Procopiuc2003}
O.~Procopiuc, P.~K. Agarwal, L.~Arge, and J.~S. Vitter.
\newblock Bkd-tree: A dynamic scalable $k$-d tree.
\newblock In T.~Hadzilacos, Y.~Manolopoulos, J.~Roddick, and Y.~Theodoridis,
  editors, \emph{Advances in Spatial and Temporal Databases}, pages 46--65.
  Springer, Berlin-Heidelberg, Heidelberg, Berlin, 2003.

\bibitem[Rudin(1976)]{Rudin1976}
W.~Rudin.
\newblock \emph{Principles of Mathematical Analysis}.
\newblock McGraw--Hill, New York, NY, 1976.

\bibitem[Shevtsov et~al.(2007)Shevtsov, Soupikov, and Kapustin]{Shevtsov2007}
M.~Shevtsov, A.~Soupikov, and A.~Kapustin.
\newblock Highly parallel fast $k$-d tree construction for interactive ray
  tracing of dynamic scenes.
\newblock \emph{Computer Graphics Forum}, 26\penalty0 (3):\penalty0 395--404,
  2007.

\bibitem[Soupikov et~al.(2008)Soupikov, Shevtsov, and Kapustin]{Soupikov2008}
A.~Soupikov, M.~Shevtsov, and A.~Kapustin.
\newblock Improving $k$-d tree quality at a reasonable construction cost.
\newblock In \emph{2008 IEEE Symposium on Interactive Ray Tracing}, pages
  67--72, 2008.

\bibitem[Velskii and Landis(1962)]{Velskii1962}
G.~A. Velskii and E.~Landis.
\newblock An algorithm for the organization of information.
\newblock In \emph{Proceedings of the USSR Academy of Sciences}, volume 146,
  pages 263--265, 1962.

\bibitem[Wald and Havran(2006)]{Wald2006}
I.~Wald and V.~Havran.
\newblock On building fast $k$-d trees for ray tracing, and on doing that in $O(n
  \log n)$.
\newblock In \emph{2006 IEEE Symposium on Interactive Ray Tracing}, pages
  61--69, 2006.

\bibitem[Wehr and Radkowski(2018)]{Wehr2018}
D.~Wehr and R.~Radkowski.
\newblock Parallel $k$-d tree construction on the {GPU} with an adaptive split
  and sort strategy.
\newblock \emph{International Journal of Parallel Programming}, 46\penalty0
  (6):\penalty0 1139--1156, 2018.

\bibitem[Xiao and Biros(2016)]{Xiao2016}
B.~Xiao and G.~Biros.
\newblock Parallel algorithms for nearest neighbor search problems in high
  dimensions.
\newblock \emph{SIAM Journal on Scientific Computing}, 38\penalty0
  (5):\penalty0 S667--S699, 2016.

\bibitem[Zaharia et~al.(2016)Zaharia, R.~S.~Xin, Wendell, Das, Armbrust, Dave,
  Meng, Rosen, Venkataraman, Franklin, et~al.]{Zaharia2016}
M.~Zaharia, S.~Reynold R.~S.~Xin, P.~Wendell, T.~Das, M.~Armbrust, A.~Dave,
  X.~Meng, J.~Rosen, S.~Venkataraman, M.~J. Franklin, et~al.
\newblock Apache Apark: A unified engine for big data processing.
\newblock \emph{Communications of the ACM}, 59\penalty0 (11):\penalty0 56--65,
  2016.

\bibitem[Zhou et~al.(2008)Zhou, Hou, Wang, and Guo]{Zhou2008}
K.~Zhou, Q.~Hou, R.~Wang, and B.~Guo.
\newblock Real-time $k$-d tree construction on graphics hardware.
\newblock \emph{ACM Transactions on Graphics}, 27\penalty0 (5):\penalty0 1--11,
  2008.

\end{thebibliography}

\appendix

\section{Proofs of results from section \ref{subsec:approx}}\label{ap:approx_proofs}

First, we consider a Fourier expansion of the indicator function $\mathsf{1}(z<0)$. We have, for $-\pi<z<\pi; z\neq 0$:
\begin{align*}
\mathsf{1}(z<0)=\mathsf{1}(z\leq 0)=\frac{1}{2}-\frac{2}{\pi}\sum_{j=1}^{\infty}\frac{\sin\big((2j-1)z\big)}{(2j-1)}
\end{align*}
Now if $x\in(0,1)$ and $c$ is a constant in $(0,1)$, we have $-\pi<-2<x-c<2<\pi$, or $x-c\in(-\pi,\pi)$. So we can expand $\mathsf{1}(x<c)=\mathsf{1}(x-c<0)$ and $\mathsf{1}(x\leq c)=\mathsf{1}(x-c\leq 0)$ as follows:
\begin{align}\label{proof:eq:1}
\mathsf{1}(x<c)&=\mathsf{1}(x\leq c)=\frac{1}{2}-\sum_{j=1}^{\infty}\frac{2}{\pi(2j-1)}\sin\big((2j-1)(x-c)\big)\\
&=\frac{1}{2}+\sum_{j=1}^{\infty}\bigg(\frac{2\sin\big((2j-1)c\big)}{\pi(2j-1)}\cdot\cos\big((2j-1)x\big) \nonumber \\
&\hspace{5cm}+\frac{-2\cos\big((2j-1)c\big)}{\pi(2j-1)}\cdot\sin\big((2j-1)x\big)\bigg). \nonumber
\end{align}

The above expression is recognizable as a convergent $L^2$ approximation from the class of sum of separable trigonometric functions of the form $\sum_{j}f_{\:j}(c)\cdot g_{\:j}(x)$ \cite[Example 3.10]{Chakravorty2021}.

\subsection{Proof of Lemma \ref{lemma:1d:exp}}
\begin{proof}
(A)\ Let $x\in(0,1)$ and consider arbitrary constants $a,b$ such that $0\leq a<x<b\leq 1$. Observe that if $a<b$, then $\mathsf{1}(a<x<b)=\mathsf{1}(a<x)-\mathsf{1}(b\leq x)$. The idea is to approximate these terms along the lines of equation \ref{proof:eq:1}. However, if $a=0$, then we already know that as $x\in(0,1)$, so, we must have $a<x$, and in that case $\mathsf{1}(a<x)=1$. Similarly if $b=1$, then $\mathsf{1}(b\leq x)=0$. Now we have:
\begin{align}\label{proof:eq:2}
&\mathsf{1}(a<x<b)=\mathsf{1}(a=0)\cdot\mathsf{1}(b=1)\cdot 1+\mathsf{1}(a>0)\cdot\mathsf{1}(b=1)\cdot\mathsf{1}(a<x) \\
&+\mathsf{1}(a=0)\cdot\mathsf{1}(b<1)\cdot\mathsf{1}(x< b)+\mathsf{1}(a>0)\cdot\mathsf{1}(b<1)\cdot\mathsf{1}(a<x<b)\nonumber \\
&=\big(1-\mathsf{1}(a>0)\big)\cdot\big(1-\mathsf{1}(b<1)\big)+\mathsf{1}(a>0)\cdot\big(1-\mathsf{1}(b<1)\big)\cdot\mathsf{1}(a<x)\nonumber \\
&+\big(1-\mathsf{1}(a>0)\big)\cdot\mathsf{1}(b<1)\cdot\big(1-\mathsf{1}(b\leq x)\big)\nonumber \\
&+\mathsf{1}(a>0)\cdot\mathsf{1}(b<1)\cdot\big(\mathsf{1}(a<x)-\mathsf{1}(b\leq x)\big)\nonumber \\
&=1-\mathsf{1}(a>0)+\mathsf{1}(a>0)\cdot\mathsf{1}(a<x)-\mathsf{1}(b<1)\cdot\mathsf{1}(b\leq x).\nonumber
\end{align}
If we replace $\mathsf{1}(a<x)$ and $\mathsf{1}(b\leq x)$ in equation \ref{proof:eq:2}, with the expansion in equation \ref{proof:eq:1}, we have:
\begin{align*}
&\mathsf{1}(a<x<b)=\bigg(1-\frac{\mathsf{1}(a>0)}{2}-\frac{\mathsf{1}(b<1)}{2}\bigg) \\
&+\sum_{j=1}^{\infty}\frac{2.\mathsf{1}(b<1)\sin\big((2j-1)b\big)-2.\mathsf{1}(a>0)\sin\big((2j-1)a\big)}{\pi(2j-1)}\cos\big((2j-1)x\big) \\
&+\sum_{j=1}^{\infty}\frac{2.\mathsf{1}(a>0)\cos\big((2j-1)a\big)-2.\mathsf{1}(b<1)\cos\big((2j-1)b\big)}{\pi(2j-1)}\sin\big((2j-1)x\big).
\end{align*}
Let us define, for $x\in(0,1)$ and constants $a\in[0,1),b\in(0,1]$, the functions:
\begin{align*}
&\mathsf{c}_{\:0}(x)=1,\quad \mathsf{c}_{\:2j-1}(x)=\cos\big((2j-1)x\big),\quad \mathsf{c}_{\:2j}(x)=\sin\big((2j-1)x\big);\text{ and } \\
&\mathsf{g}_{\:0}(a,b)=1-\frac{1}{2}\big(\mathsf{1}(a>0)+\mathsf{1}(b<1)\big), \\
&\mathsf{g}_{\:2j-1}(a,b)=\frac{2}{\pi(2j-1)}\Big(\mathsf{1}(b<1)\sin\big((2j-1)b\big)-\mathsf{1}(a>0)\sin\big((2j-1)a\big)\Big), \\ 
&\mathsf{g}_{\:2j}(a,b)=\frac{2}{\pi(2j-1)}\Big(\mathsf{1}(a>0)\cos\big((2j-1)a\big)-\mathsf{1}(b<1)\cos\big((2j-1)b\big)\Big).
\end{align*}
Then we have for $x\in(0,1)$, $a\in[0,1)$, $b\in(0,1]$ and $x\neq a$, $x\neq b$
\begin{align*}
\mathsf{1}(a<x<b)=\sum_{j=0}^{\infty}\mathsf{c}_{\:j}(x)\cdot\mathsf{g}_{\:j}(a,b).
\end{align*}
\end{proof}

\subsection{Proof of Lemma \ref{lemma:1d:unif}}

\begin{proof}
(A)\ From \citet[part (A) of Lemma E.3]{Chakravorty2021}, we realize that if $0<a<1$, then $\mathsf{1}_{\:J}(x-a)$ uniformly converges to $\mathsf{1}(0<x-a)$ if $x-a\in(-\pi,-\delta)\bigcup(\delta,\pi)$ or $x\in(a-\pi,a-\delta)\bigcup(a+\delta,a+\pi)$. Observe that $a-\pi<0$ and $1<a+\pi$ for $0<a<1$. If $a=0$ then $\mathsf{1}_{\:J}(x-a)=\mathsf{1}(x<a)=0$. So, $\mathsf{1}_{\:J}(x-a)$ uniformly converges to $\mathsf{1}(0<x-a)$, if $x\in U_{\delta,(a,b)}$. Similarly, we can show $\mathsf{1}_{\:J}(x-b)$ uniformly converges to $\mathsf{1}(0\leq x-b)$, if $x\in U_{\delta,(a,b)}$. Then, $\mathsf{1}^{J}(x,a,b)$ converges uniformly to its limit $\mathsf{1}(a<x<b)$ in $U_{\delta,(a,b)}$.

(B)\ Since $\mathsf{1}_{\:J}(x,a,b)=1-\mathsf{1}(a>0)+\mathsf{1}(a>0)\mathsf{1}_{\:J}(x-a)-\mathsf{1}(b<1)\mathsf{1}_{\:J}(x-b)$, we conclude from \citet[part (B) of Lemma E.3]{Chakravorty2021} that the sequence of functions $\mathsf{1}_{\:J}(x,a,b)$ is uniformly bounded in the interval $(0,1)$.
\end{proof}

\subsection{Proof of Lemma \ref{lemma:pd:unif}}
\begin{proof}
For $\mathbf{a}\in[\mathbf{0},\mathbf{1}),\mathbf{b}\in(\mathbf{0},\mathbf{1}]$, define
\begin{align*}
P_{\:(\mathbf{a},\mathbf{b})}=\times_{l=1}^pP_{\:(a_{\:l},b_{\:l})}, \quad
U_{\:\delta,\:(\mathbf{a},\mathbf{b})}=\times_{l=1}^pU_{\:\delta,\:(a_{\:l},b_{\:l})}.
\end{align*}
Now fix $\delta>0$, and for $1\leq l\leq p$, let us define
\begin{align*}
f_{\:J,\:l}(\mathbf{x},\mathbf{a},\mathbf{b})=\mathsf{1}_{\:J}(x_{\:l},a_{\:l},b_{\:l}), \quad
f_{\:l}(\mathbf{x},\mathbf{a},\mathbf{b})=\mathsf{1}(a_{\:l}<x_{\:l}<b_{\:l}).
\end{align*}
Thus we have $\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})=\prod_{l=1}^pf_{\:J,\:l}(\mathbf{x},\mathbf{a},\mathbf{b})$ and $\mathsf{1}(\mathbf{x},\mathbf{a},\mathbf{b})=\prod_{l=1}^pf_{\:l}(\mathbf{x},\mathbf{a},\mathbf{b})$.

Now, from parts (A) and (B) of Lemma \ref{lemma:1d:exp}, we know that $\mathsf{1}_{\:J}(x_{\:l},a_{\:l},b_{\:l})$ converges uniformly to $\mathsf{1}(a_{\:l}<x_{\:l}<b_{\:l})$ when $x_{\:l}\in U_{\delta,(a_{\:l},b_{\:l})}$, and furthermore is uniformly bounded for $1\leq l\leq p$. So, $f_{\:J,\:l}(\mathbf{x},\mathbf{a},\mathbf{b})$ converges uniformly to $f_{\:l}(\mathbf{x},\mathbf{a},\mathbf{b})$ when $\mathbf{x}\in U_{\:\delta,\:(\mathbf{a},\mathbf{b})}$, and is uniformly bounded for $1\leq l\leq p$. Now, we apply the result of \citet[Theorem 7.9]{Rudin1976} for a product of $p$ functions to conclude that $\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})$ converges uniformly to $\mathsf{1}(\mathbf{a}<\mathbf{x}<\mathbf{b})$ for $\mathbf{x}\in U_{\:\delta,\:(\mathbf{a},\mathbf{b})}$.
\end{proof}


\section{Proofs of results from section \ref{subsec:stoch}}\label{ap:stoch_proofs}

\subsection{Proof of Theorem \ref{thm:n_l=n_r}}\label{pf:n_l=n_r}

\begin{proof}
(A) Let $\epsilon>0$. From part (B) of Lemma \ref{lemma:pd:unif}, we know that $\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})$ is uniformly bounded on $(\mathbf{0},\mathbf{1})$. Since the indicator function $\mathsf{1}(\mathbf{x},\mathbf{a},\mathbf{b})$ is also bounded, the absolute difference $|\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})|$ is hence uniformly bounded in $(\mathbf{0},\mathbf{1})$. Let this bound be denoted by $M$, so that $\big|\:\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:\big|<M$, for any $J$ and any $\mathbf{x}\in(\mathbf{0},\mathbf{1})$. 

Now, since $P$ is absolutely continuous with respect to $\lambda$, there exists an $\eta>0$ such that if $\lambda(A)<\eta$, then $P(A)<\nicefrac{\epsilon}{(2\cdot M)}$ for any $A\in\mathbb{B}(\mathbf{0},\mathbf{1})$. Let us hence pick a $\delta$ such that $\lambda\big({Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'\big)=(2\cdot\delta)^p<\eta$, so that we have $P\big({Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'\big)<\nicefrac{\epsilon}{2M}$. Next, because of uniform convergence on $Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}$, by part (A) of Lemma \ref{lemma:pd:unif} we can choose a $J$ large enough to have $\big|\:\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:\big|=\big|\:\mathsf{1}(\mathbf{x},\mathbf{a},\mathbf{b})-\mathsf{1}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:\big|<\nicefrac{\epsilon}{2}$, for any $\mathbf{x}\in Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}$. Then we have:
\begin{align*}
&\hspace{-1em}\big|\:E_{\:P}\big(\mathsf{e}_{\:J}(\tilde{\mathbf{x}},\mathbf{a},\mathbf{b})\big)\:\big|=\big|\int\limits_{(\mathbf{0},\mathbf{1})}\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:\mathrm{d}P\:\big| \\
&=\big|\int\limits_{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:\mathrm{d}P+\int\limits_{{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'}\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b}) \:\mathrm{d}P\:\big| \\
&\leq \big|\int\limits_{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:\mathrm{d}P\:\big|+\big|\int\limits_{{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'}\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b}) \:\mathrm{d}P\:\big| \\
&\leq\int\limits_{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}|\:\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:|\:\mathrm{d}P+\int\limits_{{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'}|\:\mathsf{e}_{\:J}(\mathbf{x},\mathbf{a},\mathbf{b})\:|\:\mathrm{d}P \\
&<\int\limits_{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}\nicefrac{\epsilon}{2}\cdot\mathrm{d}P+\int\limits_{{Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'}M\cdot\mathrm{d}P=\nicefrac{\epsilon}{2}\cdot P\big(Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}\big)
+M\cdot P\big({Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'\big) \\
&\leq\nicefrac{\epsilon}{2}\cdot 1+M\cdot P\big({Q_{\:\delta,\:(\mathbf{a},\mathbf{b})}}'\big)<\nicefrac{\epsilon}{2}+M\cdot\nicefrac{\epsilon}{2M}<\epsilon.
\end{align*}

Consequently, we conclude that $E_{\:P}(\mathsf{e}_{\:J}\big(\tilde{\mathbf{x}},\mathbf{a},\mathbf{b})\big)\to 0$ as $J\to\infty$.

(B) Recall that the set of all $\mathbf{x}_{\:i}$ for $i\in I$ comprise independent and identically distributed observations of the random variable $\tilde{\mathbf{x}}$. Since the sequence $\Big\{E_{\:P}(\mathsf{e}_{\:J}\big(\tilde{\mathbf{x}},\mathbf{a},\mathbf{b})\big)\Big\}_{J=0}^{\infty}$ converges to a limit, it is uniformly bounded. Then, an application of Kolmogorov's strong law of large numbers gives us: 
\begin{align*}
\lim_{|X|\to\infty}\bar{\mathsf{E}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\overset{a.s.}{=}E_{\:P}\big(\mathsf{e}_{\:J}(\tilde{\mathbf{x}},\mathbf{a},\mathbf{b})\big)\:[P].
\end{align*}
Then, from part (A), we have,
\begin{align*}
\lim_{J\to\infty}\big(\lim_{|X|\to\infty}\bar{\mathsf{E}}_{\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\overset{a.s.}{=}0\:[P].
\end{align*}

(C) From part (B), we have:
\begin{align}\label{main:proof:eq:a}
&\hspace{-1em}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\mathsf{E}}_{\:J}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\overset{a.s.}{=}0\:[P]\nonumber \\
&\leftrightarrow\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bigg(\bar{\boldsymbol{\mathsf{1}}}_{\:J}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\nonumber \\
&\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\bigg)\overset{a.s.}{=}0\:[P]\nonumber \\
&\leftrightarrow\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}_{\:J}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big) \\
&\hspace{4cm}\overset{a.s.}{=}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\:[P]\nonumber.
\end{align}

Similarly, we also have:
\begin{align}\label{main:proof:eq:b}
&\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}_{\:J}\Big(\mathbf{X},\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big) \\
&\hspace{4cm}\overset{a.s.}{=}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big)\:[P]\nonumber.
\end{align}

Now, from the definition of $\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})$ we have:
\begin{align}\label{main:proof:eq:c}
\bar{\boldsymbol{\mathsf{1}}}_{\:J}\Big(\mathbf{X}
,\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big)=\bar{\boldsymbol{\mathsf{1}}}_{\:J}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big).
\end{align}

Equation \ref{main:proof:eq:c} ensures equality of the left-hand sides of equations \ref{main:proof:eq:a} and \ref{main:proof:eq:b}. So, we can equate the right hand sides of equations \ref{main:proof:eq:a} and \ref{main:proof:eq:b} to conclude:
\begin{align*}
&\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big) \\
&\hspace{4cm}\overset{a.s.}{=}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b})\Big).
\end{align*}
\end{proof} 

\subsection{Proof of Theorem \ref{thm:n_l=n/2}}\label{pf:n_l=n/2}

\begin{proof}
Let $\epsilon>0$, and note that
\begin{align*}
&(\mathbf{a},\mathbf{b})=\Big(\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\cup\Big(\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big) \\
&\hspace{6cm}\cup\mathcal{A}_{\:t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b}),\mathbf{a},\mathbf{b}\big).
\end{align*}

In other words:
\begin{multline*}
\mathsf{1}\big(\mathbf{x}_{\:i}\in(\mathbf{a},\mathbf{b})\big)=\mathsf{1}\bigg(\mathbf{x}_{\:i}\in\Big(\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\bigg) \\
+\mathsf{1}\bigg(\mathbf{x}_{\:i}\in\Big(\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big)\bigg)+\mathsf{1}\Big(\mathbf{x}_{\:i}\in\mathcal{A}_{\:t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b}),\mathbf{a},\mathbf{b}\big)\Big).
\end{multline*}

Summing over $i\in I$, and dividing both sides by $|\mathbf{X}|$, we obtain:
\begin{multline}\label{main:proof:eq:d}
\bar{\boldsymbol{\mathsf{1}}}(\mathbf{X},\mathbf{a},\mathbf{b})=\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big) +\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big) \\
+\frac{1}{|\mathbf{X}|}\sum_{i\in I}\mathbf{\mathsf{1}}\Big(\mathbf{x}_{\:i}\in\mathcal{A}_{\:t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b}),\mathbf{a},\mathbf{b}\big)\Big).
\end{multline}

Now, $\mathcal{A}_{\:t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b}),\mathbf{a},\mathbf{b}\big)\in\mathcal{N}_{\:p}$ for any $(\mathbf{a},\mathbf{b})\subseteq(\mathbf{0},\mathbf{1})$. So, by Assumption \ref{assumption:sup_null_set} there exists a null set $\mathbb{M}_{\:1}\subset\Omega$, such that, for each $w\in\Omega\setminus\mathbb{M}_{\:1}$, there exists an $n_{\:w,\:2}\in\mathbb{N}$, such that if $n>n_{\:w,\:2}$, then for any $(\mathbf{a},\mathbf{b})\subseteq(\mathbf{0},\mathbf{1})$, we have:
\begin{align*}
\bigg|\:\frac{1}{|\mathbf{X}(w,n)|}\sum_{i\in I}\mathbf{\mathsf{1}}\Big(\mathbf{x}_{\:i}(w)\in\mathcal{A}_{\:t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}),\mathbf{a},\mathbf{b}\big)\Big)\:\bigg|<\frac{2\epsilon}{3}.
\end{align*}

Then, from equation \ref{main:proof:eq:d}, we have for $w\in\Omega\setminus\mathbb{M}_{\:1}$ and $n>n_{\:w,\:2}$:
\begin{multline}\label{main:proof:eq:e}
\Big|\:\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)-\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big)\Big) \\
-\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big)\:\Big|<\frac{2\epsilon}{3}.
\end{multline}

From the definition of $\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)$, we have:
\begin{multline}\label{main:proof:eq:f}
\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big)\Big) \\
=\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big).
\end{multline}

From Theorem \ref{thm:n_l=n_r} part (B), we know that there exists an integer $J_{\:\epsilon,\:P}$ such that for $J>J_{\:\epsilon,\:P}$, there exists integer $n_{\:w,\:J}$, such that if $n>n_{\:w,\:J}$, then $\bar{\mathcal{E}}_{\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)<\epsilon$, so that $|\bar{\boldsymbol{\mathsf{1}}}_{\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)-\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)|<\epsilon$ for $(\mathbf{a},\mathbf{b})\in(\mathbf{0},\mathbf{1})$. In particular, for $J>J_{\:w,\:J}$ and $n>n_{\:w,\:J}$ we have:
\begin{align}\label{main:proof:eq:g}
&\Big|\:\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big)\Big) \nonumber \\ &\hspace{3cm}-\bar{\boldsymbol{\mathsf{1}}}_{\:J}\Big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big)\Big)\:\Big|<\frac{2\epsilon}{3}.
\end{align}
We likewise have:
\begin{align}\label{main:proof:eq:h}
&\Big|\:\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big) \nonumber \\ &\hspace{3cm}-\bar{\boldsymbol{\mathsf{1}}}_{\:J}\Big(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X}(w,n),\mathbf{a},\mathbf{b})\big),\mathbf{b}\Big)\:\Big|<\frac{2\epsilon}{3}.
\end{align}

Then, from equations \ref{main:proof:eq:e}--\ref{main:proof:eq:h}, we have:
\begin{align*}
&\bigg|\:\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)-2\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg)\:\bigg| \\
&=\Bigg|\:\Bigg(\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)-\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg) \\
&\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big),\mathbf{b}\bigg)\Bigg) \\
&-\Bigg(\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg) \\
&\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}_{\:J}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg)\Bigg) \\
&+\Bigg(\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big),\mathbf{b}\bigg) \\ &\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}_{\:J}\bigg(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big),\mathbf{b}\bigg)\Bigg)
\end{align*}
\begin{align*}
&+\Bigg(\bar{\boldsymbol{\mathsf{1}}}_{\:J}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg) \\
&\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}_{\:J}\bigg(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big),\mathbf{b}\bigg)\Bigg)\:\Bigg| 
\end{align*}
\begin{align*}
&\leq\bigg|\:\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)-\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg) \\
&\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big),\mathbf{b}\bigg)\:\bigg| \\
&+\bigg|\:\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg) \\
&\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}_{\:J}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg)\:\bigg| \\
&+\bigg|\:\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big),\mathbf{b}\bigg) \\
&\hspace{4cm}-\bar{\boldsymbol{\mathsf{1}}}_{\:J}\bigg(\mathbf{X}(w,n),\mathbf{a}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big),\mathbf{b}\bigg)\:\bigg| \\
&<\frac{2\epsilon}{3}+\frac{2\epsilon}{3}+\frac{2\epsilon}{3}=2\epsilon \\
&\Leftrightarrow\bigg|\:\bar{\boldsymbol{\mathsf{1}}}\bigg(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}_{\:\text{-}t}\Big(\hat{m}_{\:t,\:J}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\Big)\bigg)-\frac{1}{2}\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X}(w,n),\mathbf{a},\mathbf{b}\big)\:\bigg|<\epsilon.
\end{align*}

Since $\epsilon$ is arbitrary, we must have:
\begin{align*}
\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a},\mathbf{b}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b})\big)\Big)\overset{a.s.}{=}\frac{1}{2}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X},\mathbf{a},\mathbf{b})\big)\:[P].
\end{align*}

Similarly, we can also prove:
\begin{align*}
\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\Big(\mathbf{X},\mathbf{a}_{\:\text{-}t}\big(\hat{m}_{\:t,\:J}(\mathbf{X},\mathbf{a},\mathbf{b}),\mathbf{b}\big)\Big)\overset{a.s.}{=}\frac{1}{2}\lim_{J\to\infty}\lim_{|\mathbf{X}|\to\infty}\bar{\boldsymbol{\mathsf{1}}}\big(\mathbf{X},\mathbf{a},\mathbf{b})\big)\:[P].
\end{align*}
\end{proof}

\section{Implementing the proposed method of construction of a balanced $k$-d tree in practice}\label{ap:construct}

\subsection{Algorithmic approach}\label{sec:eff}

To construct a balanced $k$-d tree for distributed data as described in section \ref{sec:algorithm}, the set of statistics $\{\{\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})\}\}_{\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}}$ can be computed in a single step, using a programming model such as map-reduce (fully detailed below). Then, equations \ref{kd:eq:a} and \ref{kd:eq:b} can be used recursively to compute $\hat{m}_{d,k}^J(\mathbf{X})$ for $1\leq d\leq D,1\leq k\leq 2^{d-1}$, resulting in an approximately balanced $k$-d tree. Because $\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})=\sum_{i\in I}\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x}_{\:i})$, where $\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x}_{\:i})=\prod_{l=1}^p\mathsf{c}^{\:j_{\:l}}(x_{\:i_{\:l}})$, this implies the computation of $2Jp$ trigonometric terms for each $\mathbf{x}_{\:i}$. 

Instead, let us consider $K$ parameters $J_{\:1},J_{\:2},\dots,J_{\:K}$, such that $J=\prod_{k=1}^KJ_{\:k}$. Denote $\underline{\boldsymbol{J}}=\big(J_{\:1},J_{\:2},\dots,J_{\:K}\big)$, and define index sets
\begin{align*}
&\mathbb{N}_{\:\underline{\boldsymbol{J}}}=\{0\}\cup\big(\{1,\dots,2J_{\:1}\}\times\{1,\dots,J_{\:2}\}\times\dots\times\{1,\dots,J_{\:K}\}\big), \\
&\mathbb{N}_{\:\underline{\boldsymbol{J}},\:p}=\mathbb{N}_{\:\underline{\boldsymbol{J}}}\times\dots\times\mathbb{N}_{\:\underline{\boldsymbol{J}}} (p\text{ times }).
\end{align*}
Note that a general element $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}},\:p}$ is a $p$-tuple $\big(\underline{\boldsymbol{j}}_{\:1},\dots,\underline{\boldsymbol{j}}_{\:p}\big)$, where for $1\leq l\leq p$, the entry $\underline{\boldsymbol{j}}_{\:l}$ is either $0$, or a $K$-length vector $\big(j_{\:l,\:1},\dots,j_{\:l,\:K}\big)$, where $1\leq j_{\:l,\:1}\leq 2J_{\:1}$ and $1\leq j_{\:l,\:k}\leq J_{\:k}$ for $2\leq k\leq K$. With these notations in place, we define the following functions:
\begin{align*}
&\mathsf{c}^{\:2j-1}(z)=\cos^{2j-1}(z),\quad \mathsf{c}^{\:2j}(z)=\sin(z)\cdot\cos^{2j-2}(z) \\
&\hspace{5cm}\text{ for }j\in\mathbb{N}^+\text{ and }z\in(0,1); \\
&\dot{\mathsf{c}}^{\:j}(z,J')=\cos^{j-1}(2J'z) \\
&\hspace{5cm}\text{ for }j\in\mathbb{N}^+,z\in(0,1)\text{ and }J'\in\mathbb{N}^+; \\
&\tilde{\boldsymbol{\mathsf{c}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{x},\underline{\boldsymbol{J}}\big)=\prod_{l=1}^p\Big(\mathsf{c}^{\:j_{\:l,\:1}}(x_{\:l})\cdot \prod_{k=2}^K\dot{\mathsf{c}}^{\:j_{\:l,\:k}}(x_{\:l},L_{\:k-1})\Big)^{\mathsf{1}\big(\underline{\boldsymbol{j}}_{\:l}\neq 0\big)} \\
&\hspace{5cm}\text{ for }\mathbf{x}\in(\mathbf{0},\mathbf{1}),\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}},\:p}\text{ and }\underline{\boldsymbol{J}}\in{\mathbb{N}^+}^K \\
&\text{ where }L_{\:k}=\prod_{k'=1}^kJ_{\:k}\text{ for }1\leq k<K,\text{ here }\underline{\boldsymbol{J}}=\big(J_{\:1},J_{\:2},\dots,J_{\:K}\big).
\end{align*}
Given $\underline{\boldsymbol{J}}\in{\mathbb{N}^+}^K$, we define the statistic: $\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)=\sum_{i\in I}\tilde{\boldsymbol{\mathsf{c}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{x}_{\:i},\underline{\boldsymbol{J}}\big)$ and its standardized version $\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)=\big(\nicefrac{1}{|\mathbf{X}|}\big)\cdot\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}},\:p}$. Finally, define the sets of statistics
\begin{align*}
&\bar{\boldsymbol{\mathsf{C}}}_{{\:(0:2J)}^{\:p}}(\mathbf{X})=\{\{\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})\}\}_{\:\boldsymbol{j}\in\mathbb{N}_{\:J;\:p}}, \\
&\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{X},\underline{\boldsymbol{J}})=\{\{\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\boldsymbol{J})\}\}_{\:\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}}.
\end{align*}

We then have the following theorem, which asserts the existence of a transformation recovering our original basic construction.

\begin{theorem}\label{chev:thm:main}
For $K\in\mathbb{N}^+$ and $\underline{\boldsymbol{J}}\in{\mathbb{N}^+}^K$, there exists a linear transformation $\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}$ such that
\begin{align*}
\bar{\boldsymbol{\mathsf{C}}}_{{\:(0:2J)}^{\:p}}(X)=\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\Big(\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(X,\underline{\boldsymbol{J}})\Big).
\end{align*}
\end{theorem}

\begin{proof}
See Appendix \ref{pf:chev:thm:main}.
\end{proof}

For any arbitrary partition $\big\{\mathbf{X}_{\:1},\dots,\mathbf{X}_{\:R}\big\}$ of the data $\mathbf{X}$ into $R$ subsets (with $R\in\mathbb{N}^+$ and $1\leq R\leq n$), once again we have the relation  $\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)=\sum_{r=1}^R\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X}_{\:r},\underline{\boldsymbol{J}}\big)$ for $\:\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$. Hence for any distributed data set $\mathbf{X}$, the collection of statistics $\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$, can exactly be computed in parallel. Observe that $\boldsymbol{0}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$ and  $\tilde{\boldsymbol{\mathsf{C}}}^{\:\boldsymbol{0}}(\mathbf{X})=\sum_{i\in I}1=|\mathbf{X}|$. Then, for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$, we have that $\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)=\big(\nicefrac{1}{\mathbf{X}}\big)\cdot\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)=\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)/\tilde{\boldsymbol{\mathsf{C}}}^{\:\boldsymbol{0}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)$. Thus, the collection of standardized statistics $\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$ also can be exactly computed in parallel.

As a result, it is possible to reduce substantially the number of trigonometric terms needed per data point: First, the collection of statistics $\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{X},\underline{\boldsymbol{J}}\big)$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$ is computed in a single step. Then, the transformation $\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}$ from Theorem \ref{chev:thm:main} is used to compute $\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})$ for $\boldsymbol{j}\in\mathbb{N}_{\:J\:,p}$. Then, as before, equations \ref{kd:eq:a} and \ref{kd:eq:b} are used recursively to compute $\hat{m}_{\:d,\:k,\:J}(\mathbf{X})$ for $1\leq d\leq D,1\leq k\leq 2^{d-1}$, to construct the entire approximate $k$-d tree. 

While $(2J+1)^p$ statistics must still be computed, only $p\cdot K$ trigonometric terms are needed per data point (using the relation $\sin(x)=\sqrt{1-\cos^2(x)}$). Hence when $K<<J$, as supported by the simulation results of section  \ref{sec:performance}, this yields a substantial reduction in computational overhead, replacing serial for-loop trigonometric computations with serial for-loop multiplication by constant terms.

\subsection{Map-reduce implementation}\label{sec:MapReduce}

We now describe how to compute the set of statistics necessary for $k$-d tree construction; i.e.,  $\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\underline{\boldsymbol{J}})$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$. Suppose the user specifies a partition $\{I_{\:1},\ldots,I_{\:R}\}$ of the index set $I$, so that the data set of interest $\mathbf{X}$ is distributed according to corresponding subsets $\mathbf{X}_{\:1},\ldots,\mathbf{X}_{\:R}$. The data are now referenced through the set of key-value pairs $\{1,\mathbf{X}_{\:1}\},\ldots,\{R,\mathbf{X}_{\:R}\}$, which in turn serve as an input to the map step. Observe that $\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X}_{\:r},\underline{\boldsymbol{J}})=\sum_{i\in I_{\:r}}\tilde{\boldsymbol{\mathsf{c}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{x}_{\:i},\underline{\boldsymbol{J}})$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$. Hence, given an arbitrary key-value pair $\{r,\mathbf{X}_{\:r}\}$, the terms $\tilde{\boldsymbol{\mathsf{c}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{x}_{\:i},\underline{\boldsymbol{J}})$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$ will be computed, and then summed over $i\in I_{\:r}$, to obtain $\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X}_{\:r},\underline{\boldsymbol{J}})$. Thus, for the input key-value pair $\{r,\mathbf{X}_{\:r}\}$, the corresponding map step output is the set of intermediate key-value pairs  $\{\underline{\underline{\boldsymbol{j}}},\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X}_{\:r},\underline{\boldsymbol{J}})\}$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$. 

In the reduce step, we take the reduce function to be the addition operator. So, for each key, we sum over the corresponding values from the set of all intermediate key-value pairs. Since $I$ is the disjoint union of $I_{\:1},\ldots,I_{\:R}$, the final map-reduce output is the set of key-value pairs $\{\underline{\underline{\boldsymbol{j}}},\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\underline{\boldsymbol{J}})\}$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$. As described by \citet[section~3.2]{Chakravorty2021}, the partition $\{I_{\:1},\ldots,I_{\:R}\}$ may also be determined implicitly through an architecture such as Spark \citep{Zaharia2016}. In this case, $X$ is treated as a resilient distributed data set (RDD), via a function $\lambda(\mathbf{x})=\{\{\tilde{\boldsymbol{\mathsf{c}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{x},\underline{\boldsymbol{J}})\}\}_{\:\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}}$ used to transform it to an intermediate RDD by way of a flat-map transformation. This intermediate RDD is then further transformed, once again taking the reduce function to be the addition operator.

After implementing the overall map-reduce step described above, the resulting statistics $\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\underline{\boldsymbol{J}})$ for $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$ may now be used to compute $\hat{m}_{\:d,\:k}^J(\mathbf{X})$ for $1\leq d\leq D,1\leq k\leq 2^{d-1}$, enabling construction of the $k$-d tree.

\subsection{Proof of Theorem \ref{chev:thm:main}}\label{pf:chev:thm:main}

To establish the existence of the linear transformation asserted by Theorem \ref{chev:thm:main}, we require some preliminary results. To this end, let us first define the quantities
\begin{align*}
&\boldsymbol{\mathsf{c}}_{\:(1:2J)}(z)=\big(c_{\:1}(z),\dots,c_{\:2J}(z)\big); \\
&\boldsymbol{\mathsf{c}}_{\:(0:2J)}(z)=\big(c_{\:0}(z),c_{\:1}(z),\dots,c_{\:2J}(z)\big)=\big(1,\boldsymbol{\mathsf{c}}_{\:(1:2J)}(z)\big).
\end{align*}
Here $\boldsymbol{\mathsf{c}}_{\:(0:2J)}(z)$ is indexed by the set $\mathbb{N}_{\:J}=\{0,1,\dots,2J\}$. Now, for $\underline{\boldsymbol{J}}=(J_{\:1},\dots,J_{\:K})$, define the index set
\begin{align*}
\mathbb{N}_{\:\{\underline{\boldsymbol{J}}\}}=\{1,\dots,2J_{\:1}\}\times\{1,\dots,J_{\:2}\}\times\dots\times\{1,\dots,J_{\:K}\}.
\end{align*}
We then add the element $0$ to obtain the index set
\begin{align*}
\mathbb{N}_{\:\underline{\boldsymbol{J}}}=\{0\}\cup\big(\{1,\dots,2J_{\:1}\}\times\{1,\dots,J_{\:2}\}\times\dots\times\{1,\dots,J_{\:K}\}\big).
\end{align*}
Also, for the new index element $0$, define: $\tilde{c}^{\:0}(z,\underline{\boldsymbol{J}})=1$. Now we define:
\begin{align*}
\tilde{\boldsymbol{\mathsf{c}}}^{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots\:,\:(1:J_{\:K})}(z,\underline{\boldsymbol{J}})=\{\{\tilde{\mathsf{c}}^{\:\underline{\boldsymbol{j}}}(z,\underline{\boldsymbol{J}})\}\}_{\:\big\{\underline{\boldsymbol{j}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}}}\big\}}.
\end{align*}

Then, we have the following lemma.

\begin{lemma}\label{chev:lem:gen:1d}
For $K\in\mathbb{N}^+$ and $\underline{\boldsymbol{J}}\in{\mathbb{N}^+}^K$, there exists a linear transformation $\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}$ such that:
\begin{align*}
\boldsymbol{\mathsf{c}}_{\:(0:2J)}(z)=\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}(z,\underline{\boldsymbol{J}})\big).
\end{align*}
\end{lemma}

\begin{proof}
From \citet[section 3.6]{Chakravorty2019}, we have a general linear-transformation ${\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}}':\mathbb{R}^{2J_{\:1}}\times\dots\times\mathbb{R}^{J_{\:K}}\to\mathbb{R}^{2J}$ for $K\in\mathbb{N}^+$ and $\boldsymbol{J}\in{\mathbb{N}^+}^K$ satisfying:
\begin{align*}
\quad\boldsymbol{\mathsf{c}}_{\:(1:2J)}(z)={\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}}'\big(\boldsymbol{\mathsf{c}}^{\:(1:2J_{\:1}),\:\dots,\:(1:J_{\:K})}(z,\boldsymbol{J})\big).
\end{align*}
Suppose $\mathcal{V}$ is the generic invertible transformation that vectorizes a multi-dimensional array in the natural-order of the index-set of the array. Then, we will be able to find a $2J\times 2J$ matrix ${\mathcal{A}^{(K)}_{\:\underline{\boldsymbol{J}}}}'$, such that:
\begin{align*}
\quad\boldsymbol{\mathsf{c}}_{\:(1:2J)}(z)={\mathcal{A}^{(K)}_{\:\underline{\boldsymbol{J}}}}'\cdot\mathcal{V}\big(\boldsymbol{\mathsf{c}}^{\:(1:2J_{\:1}),\:\dots,\:(1:J_{\:K})}(z,\boldsymbol{J})\big).
\end{align*}

Now observe that
\begin{align*}
\mathcal{V}\big(\boldsymbol{\mathsf{c}}^{\:0;\:(1:2J_{\:1}),\:\dots,\:(1:J_{\:K})}(z,\boldsymbol{J})\big)=\Big(1\ ,\mathcal{V}\big(\boldsymbol{\mathsf{c}}^{\:(1:2J_{\:1}),\:\dots,\:(1:J_{\:K})}(z,\boldsymbol{J})\big)\Big)
\end{align*}
Take $\mathcal{A}^{(K)}_{\:\underline{\boldsymbol{J}}}:=\text{diag}\big(1,{\mathcal{A}^{(K)}_{\:\underline{\boldsymbol{J}}}}'\big)$; since $\boldsymbol{\mathsf{c}}_{\:(0:2J)}(z)=\big(1,\boldsymbol{\mathsf{c}}_{\:(1:2J)}(z)\big)$, we must have
\begin{align*}
\quad\boldsymbol{\mathsf{c}}_{\:(0:2J)}(z)=\mathcal{A}^{(K)}_{\:\underline{\boldsymbol{J}}}\cdot\mathcal{V}\big(\boldsymbol{\mathsf{c}}^{\:0;\:(1:2J_{\:1}),\:\dots,\:(1:J_{\:K})}(z,\boldsymbol{J})\big).
\end{align*}
So, we have proved the existence of a transformation $\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}$, such that
\begin{align*}
\quad\boldsymbol{\mathsf{c}}_{\:(0:2J)}(z)=\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}\big(\boldsymbol{\mathsf{c}}^{\:0;\:(1:2J_{\:1}),\:\dots,\:(1:J_{\:K})}(z,\boldsymbol{J})\big).
\end{align*}
\end{proof}

Now consider a $p$-dimensional vector $\mathbf{x}\in(\mathbf{0},\mathbf{1})$, so that if $\mathbf{x}=\big(x_{\:1},\dots,x_{\:p}\big)$, then $x_{\:l}\in(0,1)$ for $1\leq l\leq p$. Let us define the $p$-dimensional function:
\begin{align*}
\boldsymbol{\mathsf{c}}_{\:(0:2J);\:p}(\mathbf{x})=\otimes_{l=1}^p\boldsymbol{\mathsf{c}}_{\:(0:2J)}(x_{\:l}).
\end{align*}
Note that $\boldsymbol{\mathsf{c}}_{\:(0:2J);\:p}(\mathbf{x})$ can be identified as a $p$-dimensional array with dimensions $(2J+1)\times\dots\times(2J+1)$ ($p$ times). This $p$-dimensional array is indexed by the index set
\begin{align*}
\mathbb{N}_{\:J;\:p}=\{0,\dots,2J\}\times\dots\times\{0,\dots,2J\}\:(p\text{ times}).
\end{align*}
For $\boldsymbol{j}=\big(j_{\:1},\dots,j_{\:p}\big)\in\mathbb{N}_{\:J;\:p}$, a general $\boldsymbol{j}$th element of $\boldsymbol{\mathsf{c}}_{\:(0:2J);\:p}(\mathbf{x})$ is the function:
\begin{align*}
\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x})=\prod_{l=1}^p\mathsf{c}_{\:j_{\:l}}(x_{\:l}).
\end{align*}

Let us also define:
\begin{align*}
\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}\big(\mathbf{x},\underline{\boldsymbol{J}}\big)=\otimes_{l=1}^p\Big(\tilde{\boldsymbol{\mathsf{c}}}^{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}\big(x_{\:l},\underline{\boldsymbol{J}}\big)\Big).
\end{align*}
This array-like function is indexed by the index set $\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$, defined as:
\begin{align*}
\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}=\mathbb{N}_{\:\underline{\boldsymbol{J}}}\times\dots\times\mathbb{N}_{\:\underline{\boldsymbol{J}}}\:(p\text{ times}).
\end{align*}
Let us denote a general index element of $\mathbb{N}_{\:\{\underline{\boldsymbol{J}},\:p\}}$ as $\underline{\underline{\boldsymbol{j}}}$, which is a $p$-tuple $\big(\underline{\boldsymbol{j}}_{\:1},\dots,\underline{\boldsymbol{j}}_{\:p}\big)$. For $1\leq l\leq p$, $\underline{\boldsymbol{j}}_{\:l}$ is either $0$ or a $K$-element-vector $\big(j_{\:l,\:1},\dots,j_{\:l,\:K}\big)$.

Now, the $\underline{\underline{\boldsymbol{j}}}$th element of $\tilde{\boldsymbol{\mathsf{c}}}^{{\:0,\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}\big(\mathbf{x},\underline{\boldsymbol{J}}\big)$ is:
\begin{align*}
\tilde{\mathsf{c}}^{\:\underline{\underline{\boldsymbol{j}}}}\big(\mathbf{x},\underline{\boldsymbol{J}}\big)=\prod_{l=1}^p\Big(\mathsf{c}^{\:j_{\:l,\:1}}(x_{\:l})\cdot \prod_{k=2}^K\dot{\mathsf{c}}^{\:j_{\:l,\:k}}(x_{\:l},L_{\:k-1})\Big)^{\mathsf{1}\big(\underline{\boldsymbol{j}}_{\:l}\neq 0\big)}.
\end{align*}

We have the following lemma:
\begin{lemma}\label{chev:lem:gen:pd}
Let $\mathbf{x}$ be an element of the $p$-dimensional open interval $(\mathbf{0},\mathbf{1})$. For $K\in\mathbb{N}^+$ and $\underline{\boldsymbol{J}}\in{\mathbb{N}^+}^K$, there exists a linear transformation $\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}$, such that:
\begin{align*}
\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x})=\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{x},\underline{\boldsymbol{J}})\big).
\end{align*}
\end{lemma}

\begin{proof}
From Lemma \ref{chev:lem:gen:1d}, we have for $1\leq l\leq p$:
\begin{align*}
\boldsymbol{\mathsf{c}}_{{\:(0:2J)}}(x_{\:l})=\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}(x_{\:l},\underline{\boldsymbol{J}})\big).
\end{align*}
If we take tensor product of both sides for $1\leq l\leq p$, we get:
\begin{align*}
&\otimes_{l=1}^p\boldsymbol{\mathsf{c}}_{\:(0:2J)}(x_{\:l})=\otimes_{l=1}^p\Big(\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}(x_{\:l},\underline{\boldsymbol{J}})\big)\Big) \\
&\Leftrightarrow\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x})=\big(\otimes_{l=1}^p\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}\big)\Big(\otimes_{l=1}^p\big(\tilde{\boldsymbol{\mathsf{c}}}^{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}(x_{\:l},\underline{\boldsymbol{J}})\big)\Big) \\
&\Leftrightarrow\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x})=\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{x},\underline{\boldsymbol{J}})\big).
\end{align*}
If we let $\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}:=\otimes_{l=1}^p\mathcal{T}^{(K)}_{\:\underline{\boldsymbol{J}}}$, we have:
\begin{align*}
\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x})=\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{x},\underline{\boldsymbol{J}})\big).
\end{align*}
\end{proof}

Now remember, we have the following for $\boldsymbol{j}\in\mathbb{N}_{\:J;\:p}$:
\begin{align*}
\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})=\sum_{i\in I}\boldsymbol{\mathsf{c}}_{\:\boldsymbol{j}}(\mathbf{x}_{\:i}),\quad\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})=\big(\nicefrac{1}{\mathbf{X}}\big)\cdot\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X}).
\end{align*}
Let us define the collections
\begin{align*}
\boldsymbol{\mathsf{C}}_{{\:(0:2J)}^{\:p}}(\mathbf{X})=\{\{\boldsymbol{\mathsf{C}}_{\:\boldsymbol{j}}(\mathbf{X})\}\}_{\:\boldsymbol{j}\in\mathbb{N}_{\:J;\:p}}, \quad
\bar{\boldsymbol{\mathsf{C}}}_{{\:(0:2J)}^{\:p}}(\mathbf{X})=\{\{\bar{\boldsymbol{\mathsf{C}}}_{\:\boldsymbol{j}}(\mathbf{X})\}\}_{\:\boldsymbol{j}\in\mathbb{N}_{\:J;\:p}},
\end{align*}
and note that
\begin{align*}
\boldsymbol{\mathsf{C}}_{{\:(0:2J)}^{\:p}}(\mathbf{X})=\sum_{i\in I}\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x}_{\:i}),\quad\bar{\boldsymbol{\mathsf{C}}}_{{\:(0:2J)}^{\:p}}(\mathbf{X})=\big(\nicefrac{1}{\mathbf{X}}\big)\cdot\boldsymbol{\mathsf{C}}_{{\:(0:2J)}^{\:p}}(\mathbf{X}).
\end{align*}

We then define the following for a general $\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}$:
\begin{align*}
\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\boldsymbol{J})=\sum_{i\in I}\tilde{\boldsymbol{\mathsf{c}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{x}_{\:i},\boldsymbol{J}),\quad\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\boldsymbol{J})=\big(\nicefrac{1}{\mathbf{X}}\big)\cdot\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\boldsymbol{J}).
\end{align*}
Again, we define the collections of statistics: 
\begin{align*}
&\tilde{\boldsymbol{\mathsf{C}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{X},\underline{\boldsymbol{J}})=\{\{\tilde{\boldsymbol{\mathsf{C}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\boldsymbol{J})\}\}_{\:\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}} \\
&\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{X},\underline{\boldsymbol{J}})=\{\{\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{\:\underline{\underline{\boldsymbol{j}}}}(\mathbf{X},\boldsymbol{J})\}\}_{\:\underline{\underline{\boldsymbol{j}}}\in\mathbb{N}_{\:\underline{\boldsymbol{J}};\:p}}.
\end{align*}
Furthermore, we have the identities
\begin{align*}
&\tilde{\boldsymbol{\mathsf{C}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{X},\underline{\boldsymbol{J}})=\sum_{i\in I}\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{x}_{\:i},\underline{\boldsymbol{J}}), \\
&\hspace{-1.2em}\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{X},\underline{\boldsymbol{J}})=\big(\nicefrac{1}{\mathbf{X}}\big)\cdot\tilde{\boldsymbol{\mathsf{C}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{X},\underline{\boldsymbol{J}}).
\end{align*}

Now we are ready to prove Theorem \ref{chev:thm:main}.

\begin{proof}
From Lemma \ref{chev:lem:gen:pd}, we have for $i\in I$:
\begin{align*}
\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x}_{\:i})=\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{x}_{\:i},\underline{\boldsymbol{J}})\big).
\end{align*}
Since $\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}$ is a linear transformation, if we take a sum over $i\in I$ and divide both sides by $|\mathbf{X}|$, we obtain the desired result:
\begin{align*}
&\hspace{-1em}\frac{\sum_{i\in I}\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x}_{\:i})}{|\mathbf{X}|}=\frac{\sum_{i\in I}\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\big(\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{x}_{\:i},\underline{\boldsymbol{J}})\big)}{|\mathbf{X}|}\\
&\Leftrightarrow\frac{\sum_{i\in I}\boldsymbol{\mathsf{c}}_{{\:(0:2J)}^{\:p}}(\mathbf{x}_{\:i})}{|\mathbf{X}|}=\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\bigg(\frac{\sum_{i\in I}\tilde{\boldsymbol{\mathsf{c}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(\mathbf{x}_{\:i},\underline{\boldsymbol{J}})}{|\mathbf{X}|}\bigg) \\
&\Leftrightarrow\bar{\boldsymbol{\mathsf{C}}}_{{\:(0:2J)}^{\:p}}(X)=\mathcal{T}^{(K,p)}_{\:\underline{\boldsymbol{J}}}\Big(\bar{\tilde{\boldsymbol{\mathsf{C}}}}^{{\:0;\:(1:2J_{\:1}),\:(1:J_{\:2}),\:\dots,\:(1:J_{\:K})}^{\:p}}(X,\underline{\boldsymbol{J}})\Big).
\end{align*}
\end{proof}

\end{document}";
			//Console.WriteLine("BibParser OnGet()");
			//(string tmp1, string tmp2) = TexService.CheckForCommandsInName(@"align}\label{kd:eq:a");
			
			TexService.ParseTex(testString);
			
			Dictionary<string, string> tmp = LineCountService.GetLineFromNodeName(testString, TexService.GetNodes());
			//Console.WriteLine("The string of line: " + tmp["fig1-20"]);
			//Console.WriteLine("Linestart: " + TexService.GetNodes()["fig1-20"].lineCount + " LineEnd: " + TexService.GetNodes()["fig1-20"].lineCountEnd);


			//PrintNodes(TexService.GetNodes());
			//PrintLinks(TexService.GetLinks());

			Console.WriteLine("LineCount of TexService: " + TexService.GetLineCount());
			Console.WriteLine("LineCount of LineCountService: " + LineCountService.GetLineCount());

			//(string typeNameWithoutRefs, string remainingString) = TexService.CountBrackets(testString);
			//Console.WriteLine("TypeName: " + typeNameWithoutRefs);
			//Console.WriteLine("Remaining: " + remainingString);
		}


		public void OnPostUpload(IFormFile uploadFile, string mainName)
		{
			//Console.WriteLine("Posted Someting in BibParser");
			string path = SaveFileToPath(uploadFile);

			//List<Node> nodes = await BBLParser.ParseBBLFile(path);
			TexService.ParseTexFromFile(path);
			Dictionary<string, Node> nodes = TexService.GetNodes();

			PrintNodes(nodes);
			//\subsection{\textit{State}}
			//List<DagNode> dNodes = makeDagNodes(TexService.GetNodes(), TexService.GetLinks());
			//string jsonPath = Path.Combine(environment.ContentRootPath + "/tester/", "some.json");
			//JsonService.CreateDagJson(dNodes, jsonPath);


		}

		public string SaveFileToPath(IFormFile file)
		{
			string path = environment.ContentRootPath + "\\tester\\";
			string filePath = Path.Combine(path, file.FileName);
			using (Stream fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write))
			{
				file.CopyTo(fileStream);
			}

			return filePath;
		}

		private void PrintPaperNodes(List<Node> paperNodes)
		{
			foreach (BBLNode node in paperNodes)
			{

				Console.WriteLine("============================");
				Console.WriteLine("Name: " + node.name);
				//Console.WriteLine("Information:");
				//foreach (string s in node.information)
				//    Console.WriteLine("item: " + s);
			}
		}

		private void PrintLinks(List<Link> links)
		{
			Console.WriteLine("=============Links==============");
			foreach (Link link in links)
			{
				Console.WriteLine("LinkSource: " + link.source + " | LinkTarget: " + link.target);


			}
		}

		private void PrintNodes(Dictionary<string, Node> nodes)
		{
			Console.WriteLine("=============Nodes==============");
			foreach (Node node in nodes.Values)
			{
				Console.WriteLine("NodeName: " + node.name + " | NodeLineCount: " + node.lineCount);


			}
		}

		public static string ReadAsList(IFormFile file)
		{
			var result = new StringBuilder();
			using (var reader = new StreamReader(file.OpenReadStream()))
			{
				while (reader.Peek() >= 0)
					result.AppendLine(reader.ReadLine());
			}
			return result.ToString();
		}

		private List<DagNode> makeDagNodes(Dictionary<string, Node> nodes, List<Link> links)
		{
			Dictionary<string, DagNode> dNodes = new Dictionary<string, DagNode>();
			Dictionary<string, string> toId = new Dictionary<string, string>();
			int idCounter = -1;
			foreach (Link link in links)
			{
				//TODO: Write better code
				if (!dNodes.ContainsKey(link.source))
				{
					idCounter++;
					toId[link.source] = idCounter + "";
					dNodes[link.source] = new DagNode(idCounter + "");
				}
				if (!dNodes.ContainsKey(link.target))
				{
					idCounter++;
					toId[link.target] = idCounter + "";
					dNodes[link.target] = new DagNode(idCounter + "");
				}
				if (!dNodes[link.target].parentIds.Contains(toId[link.source]))
					dNodes[link.target].addParent(toId[link.source]);

			}

			return dNodes.Values.ToList();
		}

	}

}


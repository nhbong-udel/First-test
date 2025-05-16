var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  This is a paragraph that has emphasized text. Really? I love pretext. Sine is written . .    A graph is bla bla bla     Consider the graph    Note that   Here is my list of animals:  Shark  Sloth  Slork    My favorite numbers, in no particular order, happen to be:  1  2  3     Integration by parts    Solve the following integrals          LIATE    lalala           LIATE    lalala         f(x)=2.5-x^2\/2  a = 1       (a,f(a))          graph={1:[3,4,5,5],2:[4,5],3:[4,5],6:[2,4]}             f(x)=2.5-x^2\/2  a = 1       (a,f(a))        lala     "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-section-name.html#def-",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A graph is bla bla bla   "
},
{
  "id": "sec-section-name-5",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-5",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " Consider the graph  "
},
{
  "id": "sec-section-name-6",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-6",
  "type": "Remark",
  "number": "1.1.3",
  "title": "",
  "body": " Note that  "
},
{
  "id": "ws-integral1-2",
  "level": "2",
  "url": "sec-section-name.html#ws-integral1-2",
  "type": "Worksheet Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Solve the following integrals          LIATE    lalala           LIATE    lalala    "
},
{
  "id": "sec-section-name-12",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-12",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "    f(x)=2.5-x^2\/2  a = 1       (a,f(a))       "
},
{
  "id": "sec-section-name-14",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-14",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "M315Ch1S2",
  "level": "1",
  "url": "M315Ch1S2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graph Isomorphism",
  "body": " Graph Isomorphism    Two graphs and are isomorphic if there is a bijective function such that . is called an isomorphism from to       Let and be two graphs. If and are isomorphic, then   The graphs and have the same degree sequence.   The graphs and have the same number of triangles.      "
},
{
  "id": "def-Isomorphism",
  "level": "2",
  "url": "M315Ch1S2.html#def-Isomorphism",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Two graphs and are isomorphic if there is a bijective function such that . is called an isomorphism from to    "
},
{
  "id": "prop-GraphIsomorphism",
  "level": "2",
  "url": "M315Ch1S2.html#prop-GraphIsomorphism",
  "type": "Proposition",
  "number": "1.2.2",
  "title": "",
  "body": "  Let and be two graphs. If and are isomorphic, then   The graphs and have the same degree sequence.   The graphs and have the same number of triangles.     "
},
{
  "id": "sec-try-latex",
  "level": "1",
  "url": "sec-try-latex.html",
  "type": "Section",
  "number": "1.3",
  "title": "Converting Latex to Pretext",
  "body": " Converting Latex to Pretext     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

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
  "body": " Section Title  Text of section.  This is a paragraph that has emphasized text. Really? I love pretext. Sine is written . .    A graph is bla bla bla     Consider the graph    Note that   Here is my list of animals:  Shark  Sloth  Slork    My favorite numbers, in no particular order, happen to be:  1  2  3    "
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

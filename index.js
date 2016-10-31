function theBeatlesPlay(musicians, instruments){
var emptyarray = []
for (var i = 0; musicians.length > i; i++)
  {emptyarray.push(musicians[i] + " plays " + instruments[i])}

return emptyarray
}

function johnLennonFacts(facts) {
var exclamationArray = []
var i = 0
while (i < facts.length){
exclamationArray.push(facts[i] + "!!!")
i++;
  }
  return exclamationArray
}

function iLoveTheBeatles (n) {
  var lonelyarray = []
do {lonelyarray.push("I love the Beatles!"); n++}
while (n<15);

return lonelyarray
}

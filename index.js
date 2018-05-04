function theBeatlesPlay(musicians, instruments) {
  var beatlesPhrases = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesPhrases.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesPhrases
}

function johnLennonFacts(facts) {
 var excitedFactsArray = [];
 var i = 0;
 while (i < facts.length) {
   excitedFactsArray.push(facts[i] + "!!!");
    i++;
  }
  return excitedFactsArray;
}


function iLoveTheBeatles(n) {
  var beatlesArray=[] ;
do {
  beatlesArray.push("I love the Beatles!"); n++}

while (n < 15); 
return beatlesArray
}


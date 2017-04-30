
 function theBeatlesPlay(musicians, instruments) {
   var allPlayers = [];
   for (var i = 0; i < musicians.length; i++) {allPlayers.push(musicians[i] + " plays " + instruments[i]);
 }
 return allPlayers;
 }

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0;
  while (i < facts.length){newFacts.push(facts[i] + "!!!"); i++
}
  return newFacts
}

function iLoveTheBeatles(number) {
  var love = []
  do {love.push("I love the Beatles!");
  number++}
  while (number < 15 )
return love
}

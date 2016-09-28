function theBeatlesPlay(musicians, instruments) {
  var thebeatlesplaymusic = [];
  for (let i = 0; i < musicians.length; i++) {
  thebeatlesplaymusic.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return thebeatlesplaymusic;
}

var johnLennonFacts = function(facts) {
  var newArray = [];
  let i = 0;
  while ( i < facts.length) {
    var string = facts[i] + "!!!";
    newArray.push(string);
    i++;
      }
  return newArray
}

function iLoveTheBeatles(n){
  var beatlelove = []
  do {
  beatlelove.unshift("I love the Beatles!")
  n += 1
}
 while (n < 15) {
  return beatlelove
}
}

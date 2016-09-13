function theBeatlesPlay(musicians, instruments) {
  var Beatles = [];

    for (var i = 0; i < musicians.length; i++) {
      Beatles[i] = musicians[i] + " plays " + instruments[i];
    }

   return Beatles
}


function iLoveTheBeatles(n) {
  var Beatles = [];

  do {
   Beatles.unshift("I love the Beatles!")
  n++;
} while (n < 15 );

 return Beatles
}

function johnLennonFacts(facts) {
var Beatles = [];

  let i = 0
  while (i < facts.length) {
    Beatles[i] = facts[i] + "!!!";
    i++
  }
  return Beatles
}

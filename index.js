
function theBeatlesPlay(musicians, instruments) {
  var theyPlay = Array();
  for (var i = 0; i < musicians.length; i++) {
    theyPlay[i] = (musicians[i] + " plays " + instruments[i])
  }
  return theyPlay
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts
}

function iLoveTheBeatles(num) {
  var loveThem = Array();
  var counter = 0;
  do {
    loveThem[counter] = "I love the Beatles!";
    num++
    counter++
  } while (num < 15);
  return loveThem
}

console.log(iLoveTheBeatles(7));

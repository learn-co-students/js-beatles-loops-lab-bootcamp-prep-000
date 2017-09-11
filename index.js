var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians, instruments) {

  var newArr = [];

  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i])
  }
  return newArr
}



function johnLennonFacts(facts) {

  var excla = [];

  var i = 0;

  while (i < facts.length) {
    excla.push(facts[i] + "!!!");
    i++
  }

return excla;

}

function iLoveTheBeatles(n) {

  var newVar = [];

  do {
    newVar.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return newVar;
}

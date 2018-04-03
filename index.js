const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  var i = 0;
  for (i; i < musicians.length; i = i+1) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  for (i; i < facts.length; i = i+1) {
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = new Array();
  do {
    array.push("I love the Beatles!");
    number = number+1;
  } while (number < 15);
  return array;
}
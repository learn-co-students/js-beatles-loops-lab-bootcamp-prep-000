var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
  var combinations = [];

  for (let i = 0; i < musicians.length; i++) {
    combinations.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return combinations;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArr = [];
  while (facts.length > i) {

    newArr.push(facts[i] + "!!!");
    i++;

  }
  return newArr;
}

function iLoveTheBeatles(num) {
var tempArr  = [];

do {
  tempArr.push("I love the Beatles!")

  num++;
}while (num < 15);
return tempArr;
}

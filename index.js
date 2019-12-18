
//const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (var i = 0; i < musicians.length || i < instruments.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
    //console.log(arr);
  }
  return arr;
}

//theBeatlesPlay(musicians, instruments);

/*const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];*/

function johnLennonFacts(facts) {
  //console.log(facts);
  var i = 0;
  var loudFacts = [];
  while (i < facts.length) {
    loudFacts.push(facts[i] + "!!!");
    i++;
  }
  return loudFacts;
}

//johnLennonFacts(facts);

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}

//iLoveTheBeatles(7);
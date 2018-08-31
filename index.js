function theBeatlesPlay(musicians, instruments ) {
  var array = [];
 musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 for (var i = 0; i < musicians.length; i++)
  array.push(musicians[i] + " plays " + instruments[i]);
  return array;
}


function johnLennonFacts(facts) {
  var array = [];
  [
   "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
];
 var i = 0;
    while (i < facts.length) {
      array.push(facts[i] + "!!!");
      i++;
    }
    return array;
}


function iLoveTheBeatles(i) {
  var array = [];
  do {array.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  return array;
}


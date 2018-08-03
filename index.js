
function theBeatlesPlay(musicians, instruments) {
  var nameInstru = [];
  for (let i = 0; i < musicians.length; i++) {
      nameInstru.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return nameInstru;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length); {
  array.push(facts[i] + "!!!");
  i++;
  }
  return array;
}


function iLoveTheBeatles(number) {
  var array = [];
  (number++);
  do {
    array.push("I love the Beatles!");
  } while (number < 15);
  return array;
}



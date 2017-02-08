function theBeatlesPlay(musicians, instruments){
  var musiciansArray = [];
  for (let i = 0; i < musicians.length; i++ ) {
    musiciansArray.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return musiciansArray;
};

const facts = [
  "He was the last Beatle to learn how to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return emptyArray;
}

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var arr = [];

  for(var i=0; i < musicians.length; i++){
    var string = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(string);
  }

  return arr;
}

// console.log(theBeatlesPlay(musicians, instruments));

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var factLength = facts.length;
  var init = 0;
  var arr = [];
  while (factLength > 0) {

    arr.push(`${facts[init]}!!!`);
    factLength--;
    init++;
  }

  return arr;
}

function iLoveTheBeatles(number){
  var arr = ['I love the Beatles!'];
  if (number < 15) {
    do {
      arr.push('I love the Beatles!');
      number--;
    } while (number > 0);
  }
  return arr;
}

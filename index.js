function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (let i = 0; i < musicians.length; i++){
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

function johnLennonFacts(facts){
  //var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian",
//"He was a choir boy and boy scout", "He hated the sound of his own voice"];
let i = 0
var newFacts = [];
while (i < facts.length){
  newFacts.push(facts[i] + "!!!");
  i++
}
return newFacts;
}

function iLoveTheBeatles(number){
  var strings = [];
    do {
    strings.push("I love the Beatles!");
    number++;
  } while (number<15)
  return strings;
}

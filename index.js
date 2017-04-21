
function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
   for (var i = 0; i < 4; i++) {
     phrases.push(musicians[i] + " plays " + instruments[i]);
   }
   return phrases;
 }

 function johnLennonFacts(facts){
    //var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
      newFacts.push(facts[i] + "!!!");
      i++;
    }
    return newFacts;
  }

function iLoveTheBeatles(number){
  var array= [];

  do {
    array.push("I love the Beatles!")
  number++}
  while (number<15);

  return array;
}

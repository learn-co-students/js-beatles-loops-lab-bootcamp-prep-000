// add solution here
function theBeatlesPlay(musicians, instruments){
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}
  
function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}
  
function iLoveTheBeatles(number){
  var newPhrase = [];
   do { 
     newPhrase.push("I love the Beatles!");
     number++;
   } while (number<15);
   return newPhrase;
}  


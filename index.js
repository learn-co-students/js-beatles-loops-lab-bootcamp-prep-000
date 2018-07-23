

function theBeatlesPlay(musicians, instruments) {
  var newStrings = [];
  for (var i=0; i < musicians.length; i++) {
    newStrings.push(`${musicians[i]} plays ${instruments[i]}`);
  } 
  return newStrings;
}
function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (facts.length > i){
  newFacts.push(`${facts[i]}!!!`); i++;
  } 
  return newFacts;
}
function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15); 
  return newArray
}
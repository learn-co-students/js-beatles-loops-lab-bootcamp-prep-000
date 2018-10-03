// add solution here
function theBeatlesPlay(musicians, instruments) {
 var array = []
  for ( var i = 0; i<4; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
}
return array
}
 function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) { 
      newFacts.push(`${facts[i]}!!!`); i++
  }
  return newFacts
}
 function iLoveTheBeatles(number) {
  var newArray = []
  do { 
    newArray.push("I love the Beatles!"), number++;
  } while (number < 15);
  return newArray
 }
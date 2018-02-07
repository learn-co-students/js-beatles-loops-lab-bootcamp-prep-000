function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}
function johnLennonFacts(facts) {
  var moreFacts = [];
  var i = 0
  while (i < facts.length) {
    moreFacts.push(facts[i] + "!!!")
    i++;
  }
  return moreFacts;
}
function iLoveTheBeatles(number) {
  var arr = [];
  do {
   arr.push("I love the Beatles!") 
   } while (number++ < 14)
return arr
}
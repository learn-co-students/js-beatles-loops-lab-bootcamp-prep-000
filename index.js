function theBeatlesPlay(musicians, instruments) {
  var array = []
  var i;
  for (i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(facts) {
  var array2 = []
  var i = -1;
  while(i < facts.length - 1) {
    i++
    array2.push(`${facts[i]}!!!`)
  }
  return array2
}
function iLoveTheBeatles(n) {
  var array3 = []
  var num = 0
do {
  array3.push("I love the Beatles!")
  n++
} while (n < 15);
return array3
}

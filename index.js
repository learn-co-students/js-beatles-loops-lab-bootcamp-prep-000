
  function theBeatlesPlay(musicians, instruments) {
  var sing = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    sing.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return sing
}
function johnLennonFacts(facts){
  var excite = []
  let i =0
  while(facts.length>i){
     excite.push(`${facts[i]}!!!`)
     i++
  }
  return excite
}
function iLoveTheBeatles(numeral) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
      numeral++
  } while (numeral<15);
  return empty
}

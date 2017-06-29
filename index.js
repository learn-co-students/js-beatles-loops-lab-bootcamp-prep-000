function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  for (let i = 0; i< musicians.length; i++) {
      sentences[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return sentences
}

function johnLennonFacts(facts) {
var i = 0;
 while (i < facts.length) {
   facts[i] = facts[i] + "!!!"
   i++
 }
 return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  var i = 0;
    do {
      if (n > 15) {
        array.push("I love the Beatles!")
        return array
      }
      else {
        array.push("I love the Beatles!")
        i++
      }
    }
      while (i < n+1)
    return array
}

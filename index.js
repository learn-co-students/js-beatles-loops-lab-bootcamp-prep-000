const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []

    for (var i=0; i<musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var n = 0
  while(n < facts.length) {
  facts[n] = facts[n] + '!!!'
  n++
}
return facts
}

function iLoveTheBeatles(t) {
  var emptyArray2 =[]
  do {
    emptyArray2.push('I love the Beatles!')
    t++
  } while (t<15);
return emptyArray2
}

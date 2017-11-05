function theBeatlesPlay (musicians, instruments) {
  var newArray = []
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

const facts = [
  "foo",
  "bar",

];
function johnLennonFacts(facts) {
  var newArray = []
  var i = 0
  while (i < 4) {
    newArray.push(`${facts[i]}!!!`)
    i++
  }
  return newArray
}

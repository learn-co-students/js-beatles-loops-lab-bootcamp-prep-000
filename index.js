function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (let i=0; i<musicians.length; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`
    array.push(newString)
  }
  return (array)
}

function johnLennonFacts(facts) {
  let i=0
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles (num) {
  var array = new Array();
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15)
  return array
}

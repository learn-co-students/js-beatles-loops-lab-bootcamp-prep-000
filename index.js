// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  let i = 0
  while(i < facts.length) {
    facts[i] = facts[i].concat("!!!")
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var arr = []
  var i = 0
  if(number < 15) {
    do {
    arr.push("I love the Beatles!")
    i++
    } while (i <= number)
  } else {
    arr.push("I love the Beatles!")
  }
  return arr
}
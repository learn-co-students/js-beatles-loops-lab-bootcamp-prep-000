function theBeatlesPlay (musicians, instruments) {
  var answer = []
  var time = musicians.length
  for (let i=0; i<time; i++) {
    answer.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return answer
}

function johnLennonFacts (facts){
  var i = 0
  while (i<facts.length) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}


function iLoveTheBeatles (n) {
  var answer = []
  do {
    answer.push("I love the Beatles!")
    n++
  } while (n<15)

  return answer
}

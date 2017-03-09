function theBeatlesPlay(musicians, instruments) {
  var place_holder = []
  for (var i =0; i < musicians.length; i++) {
    place_holder.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return place_holder
}

function johnLennonFacts(facts) {
  var answer = []
  for (var i = 0; i < facts.length; i ++) {
    answer.push(facts[i] + "!!!")
  }
  return answer

}

function iLoveTheBeatles(n) {
  var answer = []
  do{
    answer.push("I love the Beatles!")
  } while ((answer.length < (n+1) && n < 15) || (answer.length < 1 && n >= 15))
  return answer
}

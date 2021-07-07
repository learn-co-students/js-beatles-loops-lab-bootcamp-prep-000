// add solution here
function theBeatlesPlay(musicians, instruments){
  var result = []
  for (var i = 0; i < musicians.length; i++){
    result[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return result
}
function johnLennonFacts(facts){
  var count = 0
  while (count <= facts.length - 1){
    facts[count] += "!!!"
    count++
  }
  return facts
}
function iLoveTheBeatles(num){
  var output = []
  do{
    output.push("I love the Beatles!")
    num++
  } while (num < 15)
  return output
}

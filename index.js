// add solution here
var array = []

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians.slice(i,i+1)} plays ${instruments.slice(i,i+1)}`)
//    return array.push(`$musicians.length i} ${instruments.length i}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
  facts[i] = `${facts.slice(i,i+1)}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var love = []
  var i = number
  do {
    love.push("I love the Beatles!")
    number++
  } while (number < 15)
  return love
}

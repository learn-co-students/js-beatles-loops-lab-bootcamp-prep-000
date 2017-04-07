function theBeatlesPlay(musicians, instruments) {
  var array =[]
  var i = 0
  for (; i<musicians.length; i++) {
    var string = musicians[i] + ' plays ' + instruments[i]
    array.push(string)
  }
  return array
}
function johnLennonFacts(facts) {
var array =[]
var  i = 0
while (facts.length > i) {
var string = facts[i] + '!!!'
array.push(string)
++ i
  }
return array
}
function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push('I love the Beatles!')
    ++ n
  }
  while (n < 15)
  return array
}

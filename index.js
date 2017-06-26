var theBeatlesPlay = function(musician, instruments) {
  var foo = []
  for(var i = 0; i < musician.length; i++) {
    foo[i] = `${musician[i]} plays ${instruments[i]}`
  }
  return foo
}

var johnLennonFacts = function(facts) {
var i = 0
  while(i<=facts.length-1) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

var iLoveTheBeatles = function(number) {
  var foo = []
  do {
    foo.push('I love the Beatles!')
number++
  }
  while(number < 15)
  return foo
}

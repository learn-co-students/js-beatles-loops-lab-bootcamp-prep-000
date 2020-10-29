function theBeatlesPlay(musicians, instruments) {
      var result = []
  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] +' plays ' + instruments[i])
  }
  return result
}

function johnLennonFacts(facts) {
var newArr = []
let i = 0
while (i < facts.length) {
  newArr.push(facts[i] + '!!!')
  i++
}
return newArr
}

function iLoveTheBeatles(number) {
var result = []
do {
result.push('I love the Beatles!')
number++
}
while (number < 15)
return result
}

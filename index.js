function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; (i < musicians.length) && (i < instruments.length); i++) {
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  var newArray = []
  while (i < facts.length) {
  newArray[i] = facts[i] + "!!!"
  i++
  }
  return newArray
  }

function iLoveTheBeatles(number) {
  if (number < 15) {
    var i = 0
    var newArray = []
    do {newArray[i] = 'I love the Beatles!';
    i++
  } while (i <= number)
  return newArray
  } else return 'I love the Beatles!'
 }

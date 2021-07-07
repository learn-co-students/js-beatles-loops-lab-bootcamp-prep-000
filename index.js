// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0, l = musicians.length; i < l; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
 var shoutedFacts = [];
 var i = 0
  while (i < facts.length) {
    shoutedFacts.push(facts[i]+"!!!")
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(number){
  var iLoveTheBeatlesArray = []

  do {
    iLoveTheBeatlesArray.push('I love the Beatles!')
    number++
  } while (number < 15);

  return iLoveTheBeatlesArray
}

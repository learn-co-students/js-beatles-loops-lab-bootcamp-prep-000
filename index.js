function theBeatlesPlay(musicians, instruments) {
  var theArray = [];
  for (var index = 0; index < 4; index++) {
    theArray.push(musicians[index] + ' plays ' + instruments[index])
  }
  return theArray
}

function johnLennonFacts(facts) {
  var theArray = [];
  let countdown = 0
  while (countdown <= facts.length - 1 ) {
    theArray.push(facts[countdown] + '!!!')
    countdown += 1
  }
  return theArray
}

function iLoveTheBeatles(number) {
  var theArray = [];
  do {
    theArray.push('I love the Beatles!')
    number++
  } while (number < 15);
  return theArray
}

// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var x = []
  for(var counter = 0; counter < arrayMusicians.length; counter++ ) {
    x.push(arrayMusicians[counter] + ' plays ' + arrayInstruments[counter])
  }
  return x
}

function johnLennonFacts(arrayFacts) {
  var counter = 0
  var x = []
  while(counter < arrayFacts.length) {
    x.push(arrayFacts[counter] + '!!!')
    counter++
  }
    return x
}

function iLoveTheBeatles(n) {
  var x = []
  do {
    x.push('I love the Beatles!')
    n++
  } while (n < 15)
  return x
}

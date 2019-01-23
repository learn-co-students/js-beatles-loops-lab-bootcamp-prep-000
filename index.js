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
  while(arrayFacts.length > counter) {
    console.log(--counter)
    x.push(arrayFacts[counter] + '!!!')
  }
    return x
}

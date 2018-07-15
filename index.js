// add solution here
function theBeatlesPlay(arrayMusician,arrayInstrument) {
  
  var array = []

  for (var i = 0; i < arrayMusician.length && i < arrayInstrument.length; i++) {
    array.push(`${arrayMusician[i]} plays ${arrayInstrument[i]}`)
  }
  
  return array
}

function johnLennonFacts(arrayFact) {
  for (var i = 0; i < arrayFact.length; i++) {
    arrayFact[i] = arrayFact[i] + '!!!'
  }
  return arrayFact
}

function iLoveTheBeatles(n) {
  
  var array = []
  
  do {
    array.push('I love the Beatles!')
    n++
  } while(n < 15)
  
  return array
}


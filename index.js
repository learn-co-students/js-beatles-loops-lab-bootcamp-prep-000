function theBeatlesPlay(arrayMusician, arrayInstrument) {
  var arrayBeatles = []
  for(var i = 0; i < arrayMusician.length; i++){
    var stringBeatles = `${arrayMusician[i]} plays ${arrayInstrument[i]}`
    arrayBeatles.push(stringBeatles)
  }
  return arrayBeatles
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while(i < facts.length){
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}

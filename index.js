function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var array = []
  
  for (var i = 0; i < arrayMusicians.length; i++) {
    array.push(arrayMusicians[i] + ' plays ' + arrayInstruments[i])
  }
  return array
}

function johnLennonFacts (arrayFacts) {
  var array = []
  var i = 0
  while(i < arrayFacts.length) {
    var newArray = arrayFacts[i] + '!!!'
    array.push(newArray)
    i++
  }
  return array
}

function iLoveTheBeatles (number) {
  var array = []
  
 do {
   number ++
   array.push('I love the Beatles!')
 } 
 while (number < 15)

return array
}
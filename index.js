function theBeatlesPlay (arrayMusicians, arrayInstruments){
  var array = [];
  for (let i=0; i < arrayMusicians.length; i++){
    array.push (`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
      }
  return array
}

function johnLennonFacts (arrayFacts) {
    var i = 0
    while (arrayFacts.length > i) {
    arrayFacts[i] += '!!!';
    i++;
  }
  return arrayFacts
}

function iLoveTheBeatles (number){ // 7
  var array = []
  do { // will do this no matter what
    array.push(`I love the Beatles!`)
    number++
  }
  while ( number < 15) // 7 < 15
  return array
}

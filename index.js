function theBeatlesPlay (musicians, instruments) {
  var musiciansWithIstruments = []
  
  for (let i = 0; i < musicians.length; i++) {
    let statement = musicians[i] + ' plays ' + instruments[i]
    musiciansWithIstruments.push(statement)
  }
  
  return musiciansWithIstruments
}

function johnLennonFacts (array) {
  var newArray = []
  let i = 0
  
  while (newArray.length < array.length) {
    newArray[i] = array[i] + '!!!'
    i++
  }
  
  return newArray
}

function iLoveTheBeatles (number) {
  var array = []
  
  do {
    array.push('I love the Beatles!')
    number++
  } while (number < 15)
  
  return array
}
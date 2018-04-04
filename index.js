var i=0

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (array) {
  for (i=0; i<array.length; i++){
   array[i] = `${array[i]}!!!` 
  }
  return array
}

function iLoveTheBeatles (number) {
  var array = []
  do {
  array.push ('I love the Beatles!')
  number++
  } while (number<15)
  return array
}
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var array = []
  for (let i=0; i<arrMusicians.length; i++){
    array.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var i=0
  while (i<array.length) {
    array.push(`${array[i]}!!!`)
    i++;
  }
}

function iLoveTheBeatles(num) {
  var array=[]
  var i=0;
  do {
    array.push("I love the Beatles!")
    i++
  } while (i<15)
  return array
}
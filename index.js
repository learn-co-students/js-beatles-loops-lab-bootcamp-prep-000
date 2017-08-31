function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var newArray = []
  for (let i = 0; arrayMusicians.length > i; i++) {
    newArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(array) {
  var i = 0
  while (array.length > i) {
    array[i] = `${array[i]}!!!`
    i++
  }
  return array
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15);
  return arr
}

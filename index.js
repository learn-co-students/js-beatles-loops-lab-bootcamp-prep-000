// add solution here
var bands = []
var muscians = ['John', 'Ringo', 'Jimmy']
var instruments = ['guitar', 'drums', 'bass']

function theBeatlesPlay (muscians, instruments) {
  for (let m = 0; m < muscians.length; m++) {
    bands.push(`${muscians[m]} plays ${instruments[m]}`)
  }
  return bands
}


function johnLennonFacts(arr) {
  let i = 0
  while (i < arr.length) {
    arr[i] = `${arr[i]}!!!`
    i++
  }
  return arr
}

function iLoveTheBeatles(num) {
  var empty = []
  do {
    empty.push("I love the Beatles!") 
    num++
  } while (num < 15)
  return empty
}


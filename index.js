function theBeatlesPlay(musician, instrument) {
  var randomarray = []
  
  for (var i = 0; i < musician.length; i++) {
    randomarray.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return randomarray
}

function johnLennonFacts(array) {
  var newarray = [] 
  var i = 0
  while (array[i]) {
    newarray.push(array[i] + "!!!")
    i++
  }
  return newarray
}

function iLoveTheBeatles(num) {
  var newarray = []

  do {
    newarray.push("I love the Beatles!")
    num++
  } while (num < 15);
  
  return newarray
}
function theBeatlesPlay(arraym, arrayi) {
  var empty = []
  for (let i=0; i < arraym.length; i++) {
    empty.push(arraym[i]+' plays '+arrayi[i])
  }
  return empty
}

function johnLennonFacts(array) {
  let i = 0
  var newArray = []
  while (i < array.length) {
    newArray.push(array[i]+'!!!')
    i++
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newerArray = []
  do {
    newerArray.push("I love the Beatles!")
    n++
  } while(n < 15);
  return newerArray
}

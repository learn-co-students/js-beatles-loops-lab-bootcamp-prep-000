function theBeatlesPlay(arrMusicians, arrInstruments) {
  const arr = []
  for (let i = 0, l = arrMusicians.length; i < l; i++) {
    arr.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`)
  }
  return arr
}

function johnLennonFacts(array) {
  const newArr = []
  let i = 0
  while(i < array.length) {
    newArr.push(`${array[i]}!!!`)
    i++
  }
  return newArr
}

function iLoveTheBeatles(n) {
  const arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while(n<15)
  return arr
}

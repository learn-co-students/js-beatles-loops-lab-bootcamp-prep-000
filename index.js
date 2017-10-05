function theBeatlesPlay(m, ins) {
  let newArr = []
  let i = 0
  for(let player in m) {
    newArr.push(`${m[player]} plays ${ins[i]}`)
    i++;
  }
  return newArr
}

function johnLennonFacts(arr) {
  let i = 0
  let newArr = []
  while(i < arr.length) {
    newArr.push(arr[i] + `!!!`)
    i++
  }
  return newArr
}

function iLoveTheBeatles(n) {
  let arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while(n < 15)
  return arr
}

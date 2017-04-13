function theBeatlesPlay(arr1, arr2) {
  var result = []
  for (let i = 0; i < arr1.length; i++) {
    result.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return result
}

function johnLennonFacts(arr) {
  let i = 0
  while (i < arr.length) {
    arr[i] += "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles(num) {
  var result = []
  do {
    result.push("I love the Beatles!")
    num++
  } while (num < 15)
  return result
}

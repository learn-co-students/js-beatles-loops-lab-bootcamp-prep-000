// add solution here
function johnLennonFacts(arr) {
  let n = arr.length - 1
  while (n >= 0) {
    arr[n] = arr[n] + '!!!'
    n--
  }

  return arr
}

function theBeatlesPlay(musicians, instruments) {
  let newArr = []
  for (let i = 0; i < musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return newArr
}

function iLoveTheBeatles(n) {
  let newArr = []
  let addStr = 'I love the Beatles!'
  if (n > 15) {
      newArr.push(addStr)
      return newArr
  }

  do {
    newArr.push(addStr)
    n--
  } while (n >= 0)

  return newArr

}

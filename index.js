function theBeatlesPlay(arrMus, arrInst) {
  var arr = new Array()
  for (var i = 0; i < arrMus.length; i++) {
    arr.push(`${arrMus[i]} plays ${arrInst[i]}`)
  }
  return arr
}

function johnLennonFacts(arr) {
  var x = arr.length

  while(x > 0) {
    x--
    arr[x] += "!!!"
  }

  return arr
}

function iLoveTheBeatles(num) {
  var arr = new Array()
  do {
    arr.push("I love the Beatles!")
    num++
  } while(num < 15)

  return arr
}

function theBeatlesPlay (ar1,ar2) {
  var ar3 = []
  for (var i = 0; i < ar1.length; i++) {
     ar3.push(`${ar1[i]}` + ' plays ' + `${ar2[i]}`)
  }
  return ar3
}

function johnLennonFacts (ar1) {
  var i = 0
  while (i < ar1.length) {
    ar1[i] = `${ar1[i]}` + '!!!'
    i++
  }
  return ar1
}

function iLoveTheBeatles (n) {
  var ar1 = []
  do {
    ar1.push('I love the Beatles!')
    n++
  } while (n < 15)
  return ar1
}
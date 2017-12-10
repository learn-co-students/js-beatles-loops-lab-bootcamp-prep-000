function theBeatlesPlay(musicians, instruments) {
  var newArr = []
  for (var i = 0; i < `${musicians.length}`; i++) {
    var arr = (`${musicians[i]}` + " plays " + `${instruments[i]}`)
    newArr.push(arr)
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var arr = []
  let i = facts.length
  let j = 0
  while (i != 0) {
    arr.push(`${facts[j]}` + "!!!")
    --i
    ++j
  }
  return arr
}

function iLoveTheBeatles(number) {
  let arr = []
  do {
    arr.push("I love the Beatles!")
    ++number
  } while (number < 15)
  return arr
}

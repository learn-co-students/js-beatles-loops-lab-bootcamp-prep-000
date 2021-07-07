// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for(var i=0;i<musicians.length;i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr;
}

function johnLennonFacts(facts) {
  var idx = 0
  var retArr = []
  while(idx < facts.length) {
    retArr.push(facts[idx] + '!!!')
    idx++
  }

  return retArr
}

function iLoveTheBeatles(num) {
  var retArr = []

  do {
    retArr.push('I love the Beatles!')
    num++
  } while(num < 15)

  return retArr
}

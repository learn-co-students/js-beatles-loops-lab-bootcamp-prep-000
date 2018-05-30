function theBeatlesPlay(musiciansAry, instrumentsAry) {
  var ary = []
  for (let i = 0; i < musiciansAry.length; i++) {
    ary.push(`${musiciansAry[i]} plays ${instrumentsAry[i]}`)
  }
  return ary
}

function johnLennonFacts(facts) {
  let ary = []
  while (facts.length > 0) {
    ary.push(`${facts.shift()}!!!`)
  }
  return ary
}

function iLoveTheBeatles(num) {
  let ary = []
  do {
    ary.push('I love the Beatles!')
  } while(++num < 15 );
  return ary
}
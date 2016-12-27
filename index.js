function theBeatlesPlay (musicians, instruments) {
  var arr = []
  for (var i=0 ; i<musicians.length ; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr
}

function johnLennonFacts(facts) {
  var arrr = []
  var f = 0
  while ( f < facts.length) {
    arrr.push(facts[f] + "!!!");
    f++ }
    return arrr
  }

function iLoveTheBeatles(num) {
  var ar = []
  do {
    ar.push("I love the Beatles!");
    num++
  } while (num < 15);
  return ar
}
  
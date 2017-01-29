function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`
    arr.push(str)
  }
  return arr
}

function johnLennonFacts(facts){
  var i = 0
  var arrr = []
  while(i < facts.length){
    arrr.push(facts[i] + "!!!")
    i ++
  }
  return arrr
}

function iLoveTheBeatles(num){
  var ar = []
  do {
    ar.push("I love the Beatles!")
    num += 1
  } while (num < 15);
  return ar
  }

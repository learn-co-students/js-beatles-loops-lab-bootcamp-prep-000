function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (let i = 0; i < 4; i++ ){
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  } return emptyArray
}


function johnLennonFacts(facts){
  var i = 0
  let emptyArray = []
  while (i < facts.length) {
  emptyArray.push(facts[i] + "!!!")
    i = i + 1
} return emptyArray
}

function iLoveTheBeatles(n){
  let emptyArray = []
  do { emptyArray.push('I love the Beatles!')
n = n + 1
} while (n < 15)
 return emptyArray
}
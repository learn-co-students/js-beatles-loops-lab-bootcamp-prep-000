function theBeatlesPlay(musicians, instruments){
  var newarr =[]
  for (var i = 0; i < musicians.length; i ++){
    newarr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newarr
}

function johnLennonFacts(facts){
  let factsArr = []
  let i = 0
  while(i<facts.length){
    factsArr.push(`${facts[i]}!!!`)
    i ++
  }
  return factsArr
}

function iLoveTheBeatles(num){
  let loveArr = []
  do {
    loveArr.push("I love the Beatles!")
    num ++
  } while(num <15)
  return loveArr
}

function theBeatlesPlay(musicians, instruments){
  const array = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array
}

function johnLennonFacts(facts){
  const yelling = []
  let i = 0
  while (i < facts.length){
    yelling.push(`${facts[i]}!!!`)
    i++
  }
  return yelling
}

function iLoveTheBeatles(n){
  var heart = []
  do {
    heart.push("I love the Beatles!")
    n++
  }while (n < 15)
  return heart
}

function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0;  i<musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}


function johnLennonFacts(facts) {
  const shoutedFacts = []

  for (let i = 0;i < facts.length;i++){
    shoutedFacts.push(`${facts[i]}!!!`)
  }

  return shoutedFacts
}

function iLoveTheBeatles(n){
  const number=[]

  do {number.push("I love the Beatles!")
  n++
}while (n < 15)
  return number
}

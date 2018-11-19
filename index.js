function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for (let i = 0, l = musicians.length; i < l; i++ ){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array;
}

function johnLennonFacts(facts){
  const johnFacts = []

  let i = 0
  while(i < facts.length){
  johnFacts.push(`${facts[i]}!!!`)
  i++
  }

  return johnFacts;
}

function iLoveTheBeatles(n){
  const howMuchLove = []
  do {

  howMuchLove.push("I love the Beatles!")
  n++
  }
  while (n < 15)

  return howMuchLove
}

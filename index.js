function theBeatlesPlay(musician,song){
  var fact = []
  for (let i = 0; i < musician.length; i++){
    fact = [...fact, `${musician[i]} plays ${song[i]}`]
  }
  return fact
}

function johnLennonFacts(facts){
  var index = 0;
  while(index < facts.length){
    facts[index] = facts[index] + '!!!'
    index++
  }
  return facts
}

function iLoveTheBeatles(number){
  var love = []
  do {
    love = [...love, 'I love the Beatles!']
    number++
  } while(number < 15)
  return love
}

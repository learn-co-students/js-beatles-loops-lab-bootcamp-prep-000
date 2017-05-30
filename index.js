function theBeatlesPlay(musicians, instruments){
  let temp =[]
  for(let i=0; i<musicians.length; i++){
    temp.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temp
}

function johnLennonFacts(facts){
  let temp =[]
  let i=0
  while(i<facts.length){
    temp.push(`${facts[i]}!!!`)
    i++
  }
  return temp
}

function iLoveTheBeatles(n){
  let temp =[]
  do{
    temp.push("I love the Beatles!")
    n++
  }while(n<15)
  return temp
}

function theBeatlesPlay(musicians, instruments){
  let facts = []
  for(let i = 0; i < musicians.length; i++){
    facts.push(musicians[i] + " plays " + instruments[i])
  }
  return facts
}// add solution here

function johnLennonFacts(facts){
  let i = 0;
  while (i<facts.length) {
    facts[i]+= "!!!"
    i++
  }

  return facts
}

function iLoveTheBeatles(num){
  let love = []

  do{
    love.push("I love the Beatles!")
    num++
  }while(num < 15)
  return love
}

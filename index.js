
//part one
function theBeatlesPlay(musicians, instruments){
  var band = new Array()
  for (let i = 0; i < musicians.length; i++){
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

//part two
function johnLennonFacts(facts){
  var exciting = new Array()
  while(exciting.length != facts.length){
    exciting.push(`${facts[exciting.length]}!!!`)
  }
  return exciting
}

//part three
function iLoveTheBeatles(n){
  var fans = []
  do{
    fans.push("I love the Beatles!")
    n++
  } while(n < 15)

  return fans
}

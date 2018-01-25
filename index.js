function theBeatlesPlay(musicians, instruments){
  var play = []
  for (let i=0; i < 4; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  } return play
}

function johnLennonFacts(facts){
  var shout = []
  let i = 0
  while(i < facts.length){
    shout.push(`${facts[i]}!!!`)
    i++
  }return shout
}

function iLoveTheBeatles(n){
  var love = []
  do {love.push("I love the Beatles!")
  n++
  } while (n < 15)
  return love
} 
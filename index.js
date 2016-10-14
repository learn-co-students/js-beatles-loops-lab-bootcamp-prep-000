function theBeatlesPlay(musicians, instruments){
  var beatlesPlay = []
  for (let i = 0; i < 4; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesPlay
}

function johnLennonFacts(info) {
  var excitedFacts = []
  var i = 0
  while (i < info.length){
    excitedFacts.push(`${info[i]}!!!`);
    (i++)
  }
  return excitedFacts
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n<15);
  return love
}

function theBeatlesPlay(musicians, instruments) {
  var music = []
  for (var i = 0; i < musicians.length; i++) {
    music.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return music
}

function johnLennonFacts(facts){
  var i = 0
  var array = []
  while (i < facts.length) {
    console.log(array.push(facts[i] + '!!!'))
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push('I love the Beatles!')
    n++
  } while (n < 15);
  return love
}

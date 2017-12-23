function theBeatlesPlay(musicians, instruments) {
  var musicPlayers = []
  for (var i = 0; i < musicians.length; i++) {
    musicPlayers.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicPlayers
}

function johnLennonFacts(array) {
  var musicPlayers = []
  var i = 0;
  while (i < array.length) {
    musicPlayers.push(`${array[i]}` + '!!!')
    i++
  }
  return musicPlayers
}

function iLoveTheBeatles(n) {
  var musicPlayers = []
  do {
    musicPlayers.push('I love the Beatles!')
    n++
  } while (n < 15)
  return musicPlayers
}
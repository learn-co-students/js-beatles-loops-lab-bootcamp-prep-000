function theBeatlesPlay(musicians, instruments) {
  var music = new Array();

  for (var i = 0; i < musicians.length; i++) {
    music.push(musicians[i] + ' plays ' + instruments[i])
  }

  return music
}

function johnLennonFacts(array) {
  var facts = new Array();
  var i = 0

  while (i < array.length){
    facts.push(array[i] + '!!!')
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var statement = new Array();

  do {
    statement.push("I love the Beatles!")
    n++
  } while (n < 15)

  return statement
}

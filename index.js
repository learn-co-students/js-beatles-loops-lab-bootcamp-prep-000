function theBeatlesPlay(musicians,instruments){
  var music =[]
  for ( var i=0; i< musicians.length; i++ ){
    music.push (musicians[i]+ " " + "plays" + " "+ instruments[i])
  }
  return music
}

function johnLennonFacts(facts){
  var newFacts =[]
  var i = 0
  while (i < facts.length) {
    newFacts.push (facts[i] + "!!!")
    i++
  }
  return newFacts
}

function iLoveTheBeatles(n){
  var Myarray = []
  var i = 0
  do {
    Myarray.push("I love the Beatles!")
    n++
  } while (n < 15)
  return Myarray
}

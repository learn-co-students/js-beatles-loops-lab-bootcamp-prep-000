function theBeatlesPlay(musicians, instruments){

  var beatles = []

  for (let i=0; i<4; i = i + 1){
    var musician = musicians[i]
    var instrument = instruments[i]
    var plays = musician + " plays " + instrument
    console.log("musician " + i + " is " + musician)
    beatles.push(plays)
  }
  return beatles
}

function johnLennonFacts(facts){

  var coolFacts = []

  while(facts.length > 0) {
    var fact = facts.shift();
    var coolfact = fact + "!!!"
    coolFacts.push(coolfact)
  }
  return coolFacts
}

function iLoveTheBeatles(number){
  var beatlesLove = []

  do {
    beatlesLove.push("I love the Beatles!")
    number = number + 1
  } while (number < 15) ;
  return beatlesLove
}

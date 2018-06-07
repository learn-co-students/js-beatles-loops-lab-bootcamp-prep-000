//Beatles Loops returns an array of strings 
//containing what instruments eachmusician plays

function theBeatlesPlay(theMusician, theInstrument) {
  var musiciansInstrument = []
  for(var i = 0; i < theMusician.length; i++) {
    musiciansInstrument = [...musiciansInstrument, `${theMusician[i]} plays ${theInstrument[i]}`]
  }
  return musiciansInstrument
}

function johnLennonFacts(theFacts) {
  var counter = 0
  var confirmedFacts = []
    //var theFacts = `${theFacts[counter]}!!!`
  while(counter < theFacts.length) {
    //console.log(theFacts[counter] + '!!!')
    var confirmedFacts = [...confirmedFacts, `${theFacts[counter]}!!!`]
    counter++
  }
return confirmedFacts
}

function iLoveTheBeatles(aNumber) {
  var allLove = new Array()
  var aNumber
  do {
    var allLove = [...allLove, `I love the Beatles!`]
    aNumber++
  } while (aNumber < 15)
  return allLove
}
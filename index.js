function theBeatlesPlay(musicians, instruments) {
  var musicAndInstruments = []

  for(let i = 0; i < musicians.length; i++)
  {
    var musiciansString = musicians[i] + ' plays ' + instruments[i]
    musicAndInstruments.push(musiciansString)

  }

return musicAndInstruments

}


function johnLennonFacts(facts) {
  let x = 0
  while  (x < facts.length){
    facts[x] = facts[x] + '!!!'
    x++
  }
  return facts
}

function iLoveTheBeatles(number){
  var loveForTheBeatles = []
  //var n = number
  do {
    loveForTheBeatles.push("I love the Beatles!");
    number++
  } while (number < 15)

  return loveForTheBeatles;

}

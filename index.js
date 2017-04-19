var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (var i = 0, l = musicians.length; i < l; i++) {
      empty.push(musicians[i] + " plays " + instruments[i])
    }
    return empty
}

function johnLennonFacts(facts) {
  var shoutedFacts = []
  var i = 0 
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
    return shoutedFacts    
}

function iLoveTheBeatles(number) {
  var beatles = []
  do {
    beatles.push("I love the Beatles!")
    number++
  } while (number < 15) 
  return beatles
}
// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i=0; i<4; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}
var facts = []
function johnLennonFacts(facts) {
  var array = []
  var i = 0
  /*for (var i=0; i<facts.length; i++) */ while (i<facts.length) {
    array.push(facts[i] + '!!!')
    i++
  }
  return array
}
function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push('I love the Beatles!')
    n++
  }
  while (n<15)
  return array
}
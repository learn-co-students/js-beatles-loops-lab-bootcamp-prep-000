var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Star']

var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = []
  for (var i = 0; i < musicians.length ; i++) {
  theBeatlesPlay.push(musicians[i] + ' plays ' + instruments[i])
   }
  return theBeatlesPlay
}

function johnLennonFacts(facts) {
  var i = 0;
  var johnLennonFacts = []
  while (facts.length > i) {
  johnLennonFacts.push(facts[i] + "!!!")
  i++
}
   return johnLennonFacts
}
 

 function iLoveTheBeatles (n) {
   var iLoveTheBeatles = []
   do {
     iLoveTheBeatles.push("I love the Beatles!");
     n++;
   } while (n < 15)
   return iLoveTheBeatles
 }
 


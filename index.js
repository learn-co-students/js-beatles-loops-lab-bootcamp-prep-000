

function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

function johnLennonFacts(facts) {
  var addto = [];
  for (var i = 0; i < facts.length; i++) {
    addto.push(facts[i] + "!!!")
    }
    return addto
}

function iLoveTheBeatles(number) {
  var times = [];
   do {
     times.push("I love the Beatles!"); number++
   } while (number < 15);
   return times
}
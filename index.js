const musicians = ["John Lennon", "Paul McCartny"];
const instruments = ["guitar", "sax"];
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
  var array = [];
  for (var i = 0; i < facts.length; i++){
    array[i] = facts[i] + "!!!"
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  let i = number;
  do { i++
    array.push("I love the Beatles!");
  } while (i < 15)
  return array
}
console.log(theBeatlesPlay(musicians, instruments))
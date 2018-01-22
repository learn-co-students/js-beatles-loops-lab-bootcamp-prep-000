
function theBeatlesPlay(musicians, instruments){
      var array = [];
      for (var i = 0; i < musicians.length; i++) {
        array.push(``+ musicians[i] +` plays `+ instruments[i] +``)
      }
      return array
}


function johnLennonFacts(facts) {
  var i = facts.length - 1
  while (i >= 0)  {
    facts[i] = ``+facts[i]+`!!!`;
    i--                            // you don't need i = i-- here, just i-- enough
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  do {array.push("I love the Beatles!");
      n++
  } while (n < 15)
  return array
}

function theBeatlesPlay(musicians, instruments){
  var array = []
    for (var i = 0; i < musicians.length; i++) {
      var string = musicians[i] + " plays " + instruments[i];
      array.push(string)
    }
      return array
}

function johnLennonFacts(facts) {
  var i = 0
    while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  var text = ''
    do {
      num += 1;
      text = 'I love the Beatles!'
    array.push(text)
  } while (num < 15)
    return array
}

function theBeatlesPlay(musicians, instruments) {
  var arr = []

  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i]
    arr.push(str)
  }

  return arr
}

function johnLennonFacts(facts) {
  var arr = []
  var counter = 0;
  while(counter < facts.length) {
    arr.push(facts[counter] + "!!!")
    counter++
  }
  return arr
}

function iLoveTheBeatles(number) {
  var arr = []

  do {
    arr.push("I love the Beatles!")
    number++
  }while(number < 15)

  return arr
}

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length;  i++) {
    var musician = musicians[i]
    var instrument = instruments[i]
    array.push(musician + " plays " + instrument)
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  var l = array.length
  //var array = []
  while (i < l) {
    var fact = array[i]
    //array.slice(0,1)
    //array.push(fact + "!!!")
    array[i] = fact + "!!!"
    //array.splice(0,1)
    i++
  }
  array.slice(0,4)
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}
function theBeatlesPlay(musicians,instruments){
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}


function johnLennonFacts(array) {
  var n = 0
  var dum = []
  while(n<array.length) {
    dum[n] = array[n] + "!!!"
    ++n;
  }
  return dum
}


function iLoveTheBeatles(n) {
  var array = []
  var i = 0
  do {
    array[i] = "I love the Beatles!"
    ++i;
    ++n;
    }
        while (n<15)
  return array
  }

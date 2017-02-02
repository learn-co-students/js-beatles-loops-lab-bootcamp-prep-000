function theBeatlesPlay(musicians, instruments) {
  var temp = new Array()
  for (var i = 0; i < musicians.length; i++) {
    temp[i] = musicians[i] +" "+ "plays"+ " " + instruments[i]
  }
  return temp
}
function johnLennonFacts(array) {
  var i = 0
  var newfact = new Array()
  while (i<array.length) {
    newfact[i] = array[i] + "!!!"
    i++
  }
  return newfact;
}

function iLoveTheBeatles(n) {
  var temp = new Array()
  var i=0
  do {
    temp[i]="I love the Beatles!"
    i++
    n++
  } while (n<15)
  return temp;
}

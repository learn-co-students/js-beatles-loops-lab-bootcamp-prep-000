function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i <= 3; i++) {
    array[i] = ( musicians[i] + " plays " + instruments[i] );
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  while(i < array.length){
    array[i] = array[i] + "!!!"
    i = i + 1
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = [];
  var i = 0
  do {
    array[i]="I love the Beatles!";
    n++
    i++
  } while (n < 15);
  return array;
}

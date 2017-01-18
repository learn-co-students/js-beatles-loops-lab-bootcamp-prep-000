function theBeatlesPlay(musicians, instruments){
  var ar = [];
  for (var i = 0; i < musicians.length; i++) {
    ar[i] = musicians[i] + " plays " +instruments[i];
  }
  return ar;
}
function johnLennonFacts(arr){
  var i = 0;
  while (i < arr.length) {
    arr[i]=arr[i]+"!!!";
    ++i;
  }
  return arr;
}
function iLoveTheBeatles(n){
  var arr = [];
  var i = 0;
  do {
    arr[i] = "I love the Beatles!"
    ++i;
    ++n;
  } while (n<15);
  return arr;
}


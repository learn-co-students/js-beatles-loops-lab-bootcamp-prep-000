function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i <= musicians.length - 1; i++){
    var str = musicians[i] + " plays " + instruments[i];
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(arr){
  var i = arr.length - 1;
  while (i >= 0){
    arr[i] = arr[i] + "!!!";
    i--
  }
  return arr;
}

function iLoveTheBeatles(n){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return arr;
}

function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length){
    arr[i] += "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return arr;
}
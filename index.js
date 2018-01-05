function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    var m = musicians[i];
    var inst = instruments[i];
    array.push(`${m} plays ${inst}`)
  }
  return array;
}

function johnLennonFacts(array){
  var i = 0;
  while(i < array.length){
    array[i] = array[i] + "!!!";
    i++
  }
  return array;
}

function iLoveTheBeatles(n){
  var arry = [];
  do {
    arry.push("I love the Beatles!");
    n++
  } while(n < 15);
  return arry;
}
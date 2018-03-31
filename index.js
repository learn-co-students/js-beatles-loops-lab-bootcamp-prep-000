function theBeatlesPlay(muscians, instruments){
  var array = [];
  for (var i = 0; i < muscians.length; i++){
    array.push(muscians[i] + ' plays ' + instruments[i])
  }
  return array;
}

function johnLennonFacts(array){
  var i   = 0;
  var val = [];
      
  while(i < array.length){
    val.push(array[i] + "!!!");
    i++;
  }
  return val;
}

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++
  } while(num < 15 )
  return array;
}
function theBeatlesPlay(arr_musicians, arr_instruments){
  var results = [];
  for(var i = 0; i < (arr_musicians.length); i ++){
    results.push(arr_musicians[i] + ' plays ' + arr_instruments[i]);
  }
  return results;
}

function johnLennonFacts(array){
  var results = [];
  var index = 0;
  while(index < array.length){
    results.push(array[index] + '!!!');
    index ++;
  }
  return results;
}

function iLoveTheBeatles(n){
  var results = [];
  do{
    results.push('I love the Beatles!');
    n ++;
  }
  while(n < 15);
  return results;
}

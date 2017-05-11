function theBeatlesPlay(musicians, instruments){
  var array = new Array;
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
};

function johnLennonFacts(array){
  for (var i = 0; i < array.length; i++){
    array[i] += '!!!'
  }
  return array
}

function iLoveTheBeatles(number){
  var array = new Array;
  do{
    array.push("I love the Beatles!");
    number += 1
  } while(number < 15);
  return array;
}

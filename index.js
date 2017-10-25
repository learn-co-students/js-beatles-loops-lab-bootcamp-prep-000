function theBeatlesPlay(musician, instrument){
  var array = [];
  for (var i = 0; i < musician.length; i += 1){
    array.push(musician[i] + ' plays ' + instrument[i]);
  }
  return array;
}

function johnLennonFacts(array){
  var i = 0;
  var arr = [];
  while (i < array.length){
    arr.push(array[i]+'!!!');
    i += 1;
  }
  return arr;
}

function iLoveTheBeatles(number){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return arr;
}

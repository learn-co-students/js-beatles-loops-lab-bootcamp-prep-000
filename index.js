function theBeatlesPlay(arr_musicians, arr_instruments) {
  var array = [];
  for (var i = 0; i < arr_musicians.length; i++) {
    array.push(`${arr_musicians[i]} plays ${arr_instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts_array) {
  var array = [];
  for(var i = 0; i < facts_array.length; i++) {
    array.push(`${facts_array[i]}!!!`)
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number ++;
  } while (number < 15);
  return array;
}

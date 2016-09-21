function theBeatlesPlay(arr_musicians, arr_instruments) {
  var array = [];
  for (var i = 0; i < arr_musicians; i++) {
    array.push(`${arr_musicians[0]} plays ${arr_instruments[0]}`)
  }
  return array;
}

function johnLennonFacts(facts_array) {
  var array = [];
  var i = 0;
  while (i < facts_array.length) {
    array.push(`${facts_array[i]}!!!`);
    i++;
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

function theBeatlesPlay(musicians, instruments) {
  var new_array = [];

  for (let i = 0; i < musicians.length; i++) {
    new_array.push(musicians[i] + " plays " + instruments[i]);
  }

  return new_array;
}

function johnLennonFacts(array) {
  var new_array = [];
  while (array.length > 0) {
    new_array.push(array.shift() + "!!!");
  }
  return new_array;
}

function iLoveTheBeatles(number) {
  var new_array = [];
  do {
    new_array.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return new_array;
}

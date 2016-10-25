function theBeatlesPlay(musicians, instruments) {
  var endArray = [];

  for (var i = 0; i < musicians.length; i++) {
    endArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return endArray;
}

function johnLennonFacts(array) {
  var endArray = [];

  var i = 0;
  while (i < array.length) {
    endArray.push(array[i] + "!!!");
    i++;
  }
  return endArray;
}

function iLoveTheBeatles(num) {
  var endArray = [];

  var i = 0;
   if (num < 15) {
  do {
    endArray.push("I love the Beatles!");
    i ++;
  } while (i <= num);
} else {
  endArray.push("I love the Beatles!");
}
  return endArray;
}

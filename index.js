function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var i;
  for (i=0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(array) {
  var i=0;
  while (i<array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  if (number>15) {
    array.push("I love the Beatles!")
  }
  else {
    do {
      array.push("I love the Beatles!")
      i++;
    } while (i<number+1 && 16);
  }
  return array;
}

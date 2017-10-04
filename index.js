function theBeatlesPlay (musicians,  instruments) {
  var array = [];
  for (var i = 0 ;  i < musicians.length;  i++) {
    array.push (musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(array) {
  var newarray = [];
  var n = 0;
  while (n < array.length) {
    newarray.push (array[n] + "!!!");
    ++n
  }
  return newarray;
}

function iLoveTheBeatles(n) {
  var newarray = [];
  do {
    newarray.push ("I love the Beatles!")
    ++n
  } while (n < 15);
  return newarray;
}

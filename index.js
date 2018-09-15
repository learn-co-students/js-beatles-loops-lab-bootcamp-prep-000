function theBeatlesPlay(a, b) {
  var c = [];
    for (var i = 0; i < a.length; i++) {
      c.push(a[i] + " plays " + b[i]);
    }
  return c;
}

function johnLennonFacts(array) {
  var omg = [];
  for (var i = 0; i < array.length; i++) {
    omg.push(array[i] + "!!!");
  }
  return omg;
}

function iLoveTheBeatles(num) {
  var array = [];
  
  do {
        array.push('I love the Beatles!');
        num++;
  }
    while (num < 15);
    return array;
}
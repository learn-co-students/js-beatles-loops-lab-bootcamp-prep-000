function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var l = musicians.length;
  // var l = (musicians.length >= instruments.length ) ? musicians.length: instruments.length;
  for(var i=0;i < l; i++) {
    arr.push(musicians[i] +" plays "+instruments[i]);
  }
  return arr;
}

function johnLennonFacts(array) {
  var i=0;
  for (;i < array.length; i++) {
    array[i] += '!!!';
  }
  return array;
}

function iLoveTheBeatles(n) {
  var times;
  var a = new Array();
  if (n >= 17) {
    times = 1;
  } else if (n >= 7) {
    times = 8;
  }
  for (var i = 0; i < times; i++) {
    a[i] = "I love the Beatles!";

  }
  return a;
}

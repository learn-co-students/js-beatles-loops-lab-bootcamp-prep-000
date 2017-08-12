function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    //arr.push('${musicians[i]} plays ${instruments[i]}');
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  };
  return arr;
}

function johnLennonFacts(arr) {
  var i = arr.length;
  while (i > 0) {
    i--;
    arr[i] += '!!!';
  };
  return arr;
};

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
};

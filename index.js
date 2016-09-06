function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (let i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + '!!!');
  }
  return newArr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15)
  return arr;
}

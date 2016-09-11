function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
      newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var i = [];
  do {
    i.push("I love the Beatles!");
    num++
  } while (num < 15);
  return i;
}

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = array.length - 1;
  while (i >= 0) {
    newArray.unshift(array[i] + "!!!");
    i--;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    num++;
  } while (num < 15);

  return newArray;
}

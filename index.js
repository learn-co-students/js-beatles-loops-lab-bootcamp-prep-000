function theBeatlesPlay(musicians, instruments) {
  // empty array stored in a variable
  var tmpArray = [];
  for (let x = 0; x < musicians.length; x++) {
    tmpArray.push(musicians[x] + ' plays ' + instruments[x]);
  }
  return tmpArray;
}

function johnLennonFacts(array) {
  var count = 0;
  var tmpArray = [];
  while (count < array.length) {
    tmpArray.push(`${array[count]}!!!`);
    count++;
  }
  return tmpArray;
}

function iLoveTheBeatles(num) {
  var tmpArray = [];
  var count = num;
  do {
    tmpArray.push('I love the Beatles!');
    count++;
  } while (count < 15);
  return tmpArray;
}

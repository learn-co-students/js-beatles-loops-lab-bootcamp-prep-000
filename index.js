function theBeatlesPlay(musicians,instruments) {
  var newStrings = [];
  for (var i = 0; i < musicians.length; i++) {
    newStrings.push(musicians[i] +' plays '+ instruments[i]);
  }
  return newStrings;
}


function johnLennonFacts(array) {
  var newArray = [];
  var happyEnding = '!!!';
  var count = 0
  var i;
  while (count < array.length) {
    newArray.push(array[count] + happyEnding);
    count++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  do {
    num++;
    loveArray.push('I love the Beatles!');
  } while (num < 15);
  return loveArray;
}

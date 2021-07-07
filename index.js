function theBeatlesPlay(musicians, instruments) {
  var anArray = [];
  var i;
  for (i = 0; i < musicians.length; i++) {
    anArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return anArray;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++
  } while (num < 15);
  return love;
}
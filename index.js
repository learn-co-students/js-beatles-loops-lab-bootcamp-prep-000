function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for ( var i = 0; i < musicians.length; ++i ) {
    newArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = -1;
  while (++i < array.length ) {
    newArray.push(array[i]+'!!!');
  }
  return newArray;
}

function iLoveTheBeatles (counter) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    ++counter;
  } while (counter < 15);
  return newArray;
}

function theBeatlesPlay(array1, array2) {
  var array3 = [];
  for (var i = 0; i < array1.length; i++) {
    array3.push(array1[i] + ' plays ' + array2[i]);
  }
  return array3;
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  while(newArray.length < array.length) {
    newArray.push(array[i] + '!!!');
    i++;
  }
  return newArray;
}
function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return array;
}

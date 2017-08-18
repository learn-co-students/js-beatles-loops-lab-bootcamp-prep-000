function theBeatlesPlay(array1, array2) {
  var strings = [];
  for (var i = 0; i < array1.length; i++) {
    var string1 = array1[i];
    var string2 = array2[i];
    strings.push('' + string1 + ' plays ' + string2);
  }
  return strings;
}

function johnLennonFacts(array) {
  var newArray = [];
  while (array.length > 0) {
    newArray.push('' + array[0] + '!!!');
    array.shift();
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return array;
}

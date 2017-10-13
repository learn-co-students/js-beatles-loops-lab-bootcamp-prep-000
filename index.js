
function theBeatlesPlay (musicians, instruments) {
  var newArray = [];

  for (var i = 0; i < 4; i++) {
    if (i < 4) {
      var result = (musicians[i] + " plays " + instruments[i]);
        newArray.push(result);
    }
  }
  return newArray;
}


function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;

  while (i < array.length) {
      var result = (array[i] + "!!!");
      newArray.push(result);
      i++ ;
    }
    return newArray;
}




function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    n++ ;
  } while (n < 15)

  return array;
}

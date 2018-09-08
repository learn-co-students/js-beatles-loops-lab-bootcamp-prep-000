// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i];
    array.push(str);
  }
  
  return array;
}

function johnLennonFacts(array) {
  var newArr = [];
  var i = 0;
  
  while (i < array.length) {
    newArr.push(array[i] + "!!!");
    i++;
  }
  
  return newArr;
}


function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num ++;
  } while (num < 15);
  
  return array;
}

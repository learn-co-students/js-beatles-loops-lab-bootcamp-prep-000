function theBeatlesPlay(arr, arr1) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    var result = arr[i] + " plays " + arr1[i];
    newArr.push(result);
  }
  return newArr;
}

var johnLennonFacts = function(arr) {
  var n = 0;
  var newArr = [];
  while(n < arr.length) {
    newArr[n] = arr[n] + "!!!";
    n++;
  }
  return newArr;
}

var iLoveTheBeatles = function(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return arr;
}

function theBeatlesPlay(arr1, arr2) {
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    arr3.push(${arr1[i]} + "plays" + ${arr2[i]});
  }
  return arr3;
}

function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i = i + 1;
  }
  return arr;
}
 function iLoveTheBeatles(num) {
   var arr = [];
   do {arr.push("I love the Beatles!");
        num = num + 1}
  while(num < 15)
  return arr;
 }

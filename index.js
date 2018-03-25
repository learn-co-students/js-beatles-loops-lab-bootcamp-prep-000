function theBeatlesPlay(arr1, arr2) {
  var newarray = [];
  for (var i=0; i < arr1.length; i++) {
    newarray.push(arr1[i] + " plays " + arr2[i]);
  }
  return newarray
}

function johnLennonFacts(arr) {
  var newarray = [];
  let i = 0
  while (i < arr.length) {
    newarray.push(arr[i] + "!!!")
    i++
  }
  return newarray
}

function iLoveTheBeatles(n) {
  var newarray = [];
  do {
    newarray.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return newarray
}
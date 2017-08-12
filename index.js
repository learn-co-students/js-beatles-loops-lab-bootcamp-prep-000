function theBeatlesPlay(name, thing) {
  var newArray = [];
  for (var i = 0; i<name.length; i++) {
    newArray.push(name[i] + ' plays ' + thing[i])
  }
  return newArray
}

function johnLennonFacts(arr) {
  var i = arr.length-1;
  while(i>=0) {
    arr[i]= arr[i]+'!!!'
    i--
  }
  return arr
}

function iLoveTheBeatles (num) {
  var myArray = [];
  do {
  myArray.unshift("I love the Beatles!")
  num++

} while (num <15);
 return myArray
}

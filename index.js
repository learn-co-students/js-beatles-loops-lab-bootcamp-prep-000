function theBeatlesPlay(musicians, instruments) {
  var tempArr = [];

  for(var i = 0; i < musicians.length; i++) {
    tempArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return tempArr;
}

function johnLennonFacts(arr) {
  var i = 0;
  while(i < arr.length) {
    arr[i] += "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var tempArr = [];

  do{
    tempArr.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return tempArr;
}

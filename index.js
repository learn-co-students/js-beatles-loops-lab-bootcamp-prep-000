function theBeatlesPlay(musicians, instruments) {
  var tmpArr = [];
  for(let i=0; i<musicians.length; i++) {
    tmpArr.push(musicians[i] + " plays " + instruments[i] )
  }
  return tmpArr;
}

function johnLennonFacts(array) {
  var i = 0;
  while(i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var tmpArr = [];
  do {
    tmpArr.push("I love the Beatles!")
    n++;
  } while(n <= 15)
  return tmpArr;
}

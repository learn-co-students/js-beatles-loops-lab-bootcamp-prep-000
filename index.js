function theBeatlesPlay(musicians, instruments){
  var resultArray = [];
  for (var i = 0; i < musicians.length; i++){
    resultArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return resultArray;
}

function johnLennonFacts(array){
  var resultArray = [];
  for (var i = 0; i < array.length; i++){
    resultArray.push(array[i] + "!!!");
  }
  return resultArray;
}

function iLoveTheBeatles(num){
  var resultArray = [];
  do {
    num++;
    resultArray.push("I love the Beatles!")
  } while (num < 15)
  return resultArray;
}

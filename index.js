function theBeatlesPlay(arrayOne, arrayTwo){
  var newArray = [];
  for (var i = 0; i < arrayOne.length; i++){
    newArray.push(arrayOne[i] + " plays " + arrayTwo[i]);
  }
  return newArray;
}

function johnLennonFacts(arrayFacts){
    var i = 0;
    var newArrayFacts = new Array();
    while (i < arrayFacts.length){
      newArrayFacts.push(arrayFacts[i] + "!!!");
      i ++;
    }
    return newArrayFacts;
}

function iLoveTheBeatles (num){
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    num ++;
  }while(num < 15)
  return newArray;
}

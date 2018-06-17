function theBeatlesPlay(musiciansArray, instrumentArray){
  //Creates an empty array stored in a variable
  var newArray = [];
  var arrayLength = musiciansArray.length;
  
  for (var i =0; i < arrayLength ; ++i){
    var string1 = musiciansArray[i];
    var string2 = instrumentArray[i];
    var newString = string1 + " plays " + string2;
    newArray.push(newString);
  }
  return newArray;
}

function johnLennonFacts(factsArray){
  var i = 0;
  var arrayLength = factsArray.length;
  var string2 = "!!!";
  var updateFacts = [];
  
  while (i < arrayLength){
    var string1 = factsArray[i];
    var newString = string1 + string2;
    updateFacts.push(newString);
    i++;
  }
  return updateFacts;
}

function iLoveTheBeatles(number){
  var NewArray = [];
  var string1 = "I love the Beatles!";
  do{
    NewArray.push(string1);
    number++;
  } while (number < 15);
  return NewArray;
}
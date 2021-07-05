// add solution here

function theBeatlesPlay (arrayMusicians, arrayInstruments){
  var newArray = [];
 
 for (var i= 0; i < arrayMusicians.length; i++){
   newArray.push (arrayMusicians[i] + " plays " + arrayInstruments[i]);
 }
 return newArray;
}

function johnLennonFacts(arrFacts){
  var newFacts = [];
  var i = 0
  
  while (i < arrFacts.length){
  newFacts.push (arrFacts[i] + "!!!");
  i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var newArray = [];
  
  do{
    newArray.push("I love the Beatles!");
    num++;
  }while (num < 15);
  
  return newArray;
}


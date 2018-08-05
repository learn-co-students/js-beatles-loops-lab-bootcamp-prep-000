// add solution here

function theBeatlesPlay (arrayMusicians, arrayInstruments){
  var newArray = [];
 
 for (var i= 0; i < arrayMusicians.length; i++){
   newArray.push (arrayMusicians[i] + " plays  " + arrayInstruments[i]);
 }
 return newArray;
}



function johnLennonFacts(arrFacts){
  let newFacts = [];
  var i = 0
  
  while (i < arrFacts){
  newFacts.push (arrFacts[i] + "!!!");
  i++;
  }
  return newFacts;
}
// add solution here

function theBeatlesPlay (arrayMusicians, arrayInstruments){
  let newArray = '';
 
 for (var i= 0; i < arrayMusicians.length; i++){
   newArray.push( arrayMusicians[i] + " plays  " + arrayInstruments[i]);
 }
 return newArray;
}
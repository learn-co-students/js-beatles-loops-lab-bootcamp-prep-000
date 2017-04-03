function theBeatlesPlay(musicians, instruments){
 var emptyArray = new Array();
 var artists = musicians.length;
 for(var i = 0; i < artists; i++){
   var arrayString = musicians[i] + " plays " + instruments[i]
   emptyArray.push(arrayString);
 }
 return emptyArray;
}

function johnLennonFacts(facts){
 var arraySize = facts.length;
 var counter = 0;
 var procArray = new Array();
 while(counter < arraySize){
   procArray.push(facts[counter] + "!!!");
   counter++;
 }
 return procArray;
}

function iLoveTheBeatles(numb){
  var procArray = new Array();
  do{
    procArray.push("I love the Beatles!");
    numb++;
  }while(numb < 15)

 return procArray; 
}

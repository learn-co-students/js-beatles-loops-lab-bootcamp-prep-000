// add solution here
function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
   newArray.push(musicians[i] + " plays " + instruments[i]);
    
  }
    return newArray;
  }
  
  function johnLennonFacts (arrayOfFacts) {
    var i = 0;
    while (i < arrayOfFacts.length) {
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!";
    i++;
  }
    return arrayOfFacts;
  }
  
 function iLoveTheBeatles (number) {
   var array = [];
   
   do {array.push("I love the Beatles!");
   number++;}
   while  (number < 15);
   return array;
 }
   
   
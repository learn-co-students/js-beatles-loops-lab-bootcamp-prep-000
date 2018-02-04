function theBeatlesPlay (musician, instruments) {
  var array = [];  
  var strings = array;
  for (var i = 0; i < musician.length; i++) {
    array[i] = (musician[i] + " plays " + instruments[i]);
  }
   return array;
}

function johnLennonFacts (jlArray) {
   var i = 0;
   //console.log(jlArray.length);
   while (i < jlArray.length) {
    jlArray[i] = (jlArray[i] + "!!!");
    i++;
    }
   return jlArray;
  }
  
function iLoveTheBeatles (n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n--;
    } 
  while (n < 15 && n > -1);
  return array;
  }
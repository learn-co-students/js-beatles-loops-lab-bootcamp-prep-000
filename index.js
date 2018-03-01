
function theBeatlesPlay(array1, array2) {
  var output = [];
  var i = 0;
  for (; i<array1.length; i++){
      output.push(array1[i] + " plays " + array2[i]);
    } return output; 
  } 
  
  function johnLennonFacts(facts) {
    var i=0;
    var output = [];
    while (i<facts.length){
      output.push(facts[i] + "!!!"); 
      i++;
    } return output;
  }
  
  
  function iLoveTheBeatles(number){
    var i = number;
    var output = []; 

    do {
      i++;
      output.push("I love the Beatles!");
    } while (i < 15);
    return output;
  }
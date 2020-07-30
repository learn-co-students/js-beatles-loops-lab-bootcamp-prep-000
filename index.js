// add solution here
//Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.
function theBeatlesPlay(arrMusicians, arrInstruments){
  
  var emptyArr =  [];
  
  for (var i = 0; i < arrMusicians.length; i++) {
    
//Use backtick loop body

 emptyArr.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
 
} 

  return emptyArr;
  
}

  //returns an array of strings with exclamation points
  //takes in any array of strings and returns a new array with exclamation points added to each element 
  
 function johnLennonFacts(array) {
   
   var i = 0;
   
   while (i < array.length) {array[i] += "!!!"; i++;}
   
   return array;
   
 }
 
 function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}
 
 
 
 
 
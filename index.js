// add solution here
// note the in effect, these parameters are creating they're own arrays[]
function theBeatlesPlay(musicianArray,instrumentArray){
  // define the empty array
  var array = [];
  // for each 'i' that is less than 'musicianArray', increase 'i' by 1
  for(var i = 0; i<musicianArray.length; i++){
    // combine the two parameters and push them to the array[]
    array.push(musicianArray[i] + " plays " + instrumentArray[i] );
    // return the new array
  }
  // NOTE: pay attention to placement of actions. The only problem here was that "return(array); was inside the curly brace above... smh"
  return(array); 
}

function johnLennonFacts(facts) {
  var result= []; 
  var i = 0; 
  while(i < facts.length) {
    result.push(facts[i] + '!!!')
    i++; 
  }
  return result; 
}

function iLoveTheBeatles(num) { 
  
  let array = []; 
  do {
    array.push(`I love the Beatles!`); 
    num++; 
  } while (num < 15); 

  return array; 
}
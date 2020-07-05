// add solution here


function theBeatlesPlay(musician, instrument) {
 var art = [];
 for (let i = 0; i < musician.length; i++){
    
     art.push(`${musician[i]} plays ${instrument[i]}`);
     
  }
  return art;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1;
    
  } while(number < 15)
  return array;
}
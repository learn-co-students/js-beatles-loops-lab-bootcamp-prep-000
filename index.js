// add solution here

function theBeatlesPlay(musicians,instruments) {
  var emptyArray = [];
  for (let i = 0; i<musicians.length; i++){
      emptyArray.push( musicians[i] + ' plays ' + instruments[i])
  }
  return emptyArray
 }  
 
function johnLennonFacts(facts){
  let factsArray = [];
  let counter = 0;
  while (counter < facts.length) {
    factsArray.push (facts[counter] + "!!!");
    counter ++;
  }
 return factsArray
}


function iLoveTheBeatles(num){
  var numArray = [];
  var i = 0;
  var x = 15;
  do {
    numArray.push ("I love the Beatles!");
    i++;
  } while (i <= num && num < x);
return numArray;
}

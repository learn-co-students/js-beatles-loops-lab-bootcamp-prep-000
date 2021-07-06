


function theBeatlesPlay (musicians, instruments){
 var emptyArray = []; 
 for (let i = 0; i <= 3; i++){
   emptyArray.push(musicians[i] + " plays " + instruments[i]);
 } return emptyArray
}



function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0; 
  while (i < facts.length){
    var random = facts[i] + "!!!";
    newFacts.push(random) 
    i++
  } 
  return newFacts
}







function iLoveTheBeatles (x){
  var newArray = []; 
  do {newArray.push("I love the Beatles!"); x++}
    while (x < 15 )
  
  return newArray
} 









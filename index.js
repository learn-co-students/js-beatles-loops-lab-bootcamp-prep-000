// add solution here
function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat = [];
    for(let i = 0; i < musicians.length; i++){
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat
}


function johnLennonFacts(array){
  var addExclamations = [];
  let i = 0;
while (i < array.length){
  addExclamations.push(array[i] + "!!!"); i++
}
return addExclamations
}

function iLoveTheBeatles(n){
var emptyVariable = [];
do{
  emptyVariable.push("I love the Beatles!"); n++
} while (n < 15)
return emptyVariable
}

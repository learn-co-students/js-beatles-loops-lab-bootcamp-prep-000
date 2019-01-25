function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  
  for(var index = 0; index<musicians.length; index++){
   var endIndex = index +1;
   var musician = musicians.slice(index, endIndex);
   var instrument = instruments.slice(index, endIndex);
   var x = `${musician} plays ${instrument}`;
 
  emptyArray.push(x);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var index = 0;
  var newEmptyArray = [];
  
  while(index<facts.length){
  var endIndex = index + 1;
  var pullOutElement = facts.slice(index, endIndex);
  var addEx = `${pullOutElement}!!!`;
  newEmptyArray.push(addEx);
  
  index = index + 1;
  }
  return newEmptyArray;
}
function iLoveTheBeatles(number){

var array = [];
var newNum = number ;

do {
  newNum = newNum + 1;
  array.push('I love the Beatles!');
} while(newNum < 15);
  return array;
}





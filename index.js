// add solution here
function theBeatlesPlay(musicians, inst){
  var array = [];
  for(let i = 0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${inst[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var i = 0;
  
  while (i < array.length) {
    array[i] = array[i]+"!!!";
    ++i;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!");
    ++number;
  } while(number < 15);
  
  return array;
}
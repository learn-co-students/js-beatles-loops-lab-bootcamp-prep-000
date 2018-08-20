// add solution here
function theBeatlesPlay(musician, instrument){
  var array = [];
  for(let i=0; i<musician.length; i++){
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array;
} 

function johnLennonFacts(array){
  var arr = [];
  for(let i=0; i<array.length; i++){
    arr.push(`${array[i]}!!!`)
  }
  return arr;
}





function iLoveTheBeatles(num){
  function incrementVariable() {
    num = num + 1;
  } 
  var emp = [];
  do {
    emp.push("I love the Beatles!")
    incrementVariable();
  } while (num < 15)
  return emp;
}
// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0 ; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}` ); 
  }
  return array;
}

function johnLennonFacts(arrayFacts){
  let array = [];
  let i = 0;
  while(i < arrayFacts.length){
    array.push(`${arrayFacts[i]}!!!`)
    i++;
  }
  return array;
}

function iLoveTheBeatles(n){
  let array = [];
  do {
    array.push("I love the Beatles!")
    n++;
  }while(n < 15);
  
  return array;
}
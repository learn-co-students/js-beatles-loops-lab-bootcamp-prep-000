// add solution here

function theBeatlesPlay(musicians, instruments){
  const array=[];
  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  let i = 0;
  const newArray=[];
  while(i<facts.length){
    newArray.push(`${facts[i]}` + "!!!");
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(number){
  const array=[];
function incrementVariable(){
  
}do{
  array.push("I love the Beatles!");
  number++
}while(number<15);
  
  return array;
}



// add solution here
function theBeatlesPlay(musicians, instruments){
  let newArray = [];
  for (let i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  let i = 0;
  let newArray = [];
  while (i < facts.length){
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(num){
  let newArray = [];
  do{
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return newArray;
}
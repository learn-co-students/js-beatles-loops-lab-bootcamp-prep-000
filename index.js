function theBeatlesPlay(musicians, instruments){
  let arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  let arr = [];
  let counter = facts.length;
  while(counter > 0){
    counter--;  
    arr.unshift(`${facts[counter]}!!!`);
  }
  return arr;
}

function iLoveTheBeatles(n){
  let acc =[];
  let counter = 15 - n;
  do{
    acc.push("I love the Beatles!");
    counter--;
  }
  while(counter > 0)
  return acc;
}
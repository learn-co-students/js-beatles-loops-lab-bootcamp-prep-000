function theBeatlesPlay(musicians, instruments){
  let band = [];
  for(let i = 0; i < musicians.length ; i++){
    band [i] = `${musicians[i]} plays ${instruments[i]}`
  }
  
  return band;
}

function johnLennonFacts(facts){
  
  let i = 0;
  
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(num){
  let arr =[];
  let i = 0;
  do{
    arr.push("I love the Beatles!")
    i++;
  }while(i<=num && num<15)
  
  return arr;
}
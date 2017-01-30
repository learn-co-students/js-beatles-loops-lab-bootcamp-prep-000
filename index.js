function theBeatlesPlay(musicians,instruments){
  let arr1 = [];
  for(let i=0; i<musicians.length; i++){
    arr1.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr1;
}

function johnLennonFacts(facts){
  let arr1 =[];
  let i=0;
  while(i<facts.length){
    arr1.push(`${facts[i]}!!!`);
    i++;
  }
  return arr1;
}

function iLoveTheBeatles(number){
  let arr1 = [];
  do{
    arr1.push("I love the Beatles!");
    number++;
  }while(number<15);
  return arr1;
}

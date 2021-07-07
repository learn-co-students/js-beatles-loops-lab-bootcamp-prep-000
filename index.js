// add solution here

function theBeatlesPlay(musicians, instruments){
  let myArray= []
  for(let i=0;i<musicians.length;i++){
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArray;
}

function johnLennonFacts(info){
  for(let i=0; i<info.length;i++){
    info[i]=`${info[i]}!!!`
  }
  return info;
}


function iLoveTheBeatles(number){
  
  let myArray= []
  do{
    myArray.push("I love the Beatles!")
    number++;
  }while(number<15);
  return myArray;
}
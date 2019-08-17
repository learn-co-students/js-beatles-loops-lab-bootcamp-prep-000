// add solution here
function theBeatlesPlay(musArr, instArr) {
  
  let emptyArr = [];
  let stringHolder = "";
  for(let i = 0; i < musArr.length; i++)
  {
    stringHolder = musArr[i] + ' plays ' +instArr[i];
    emptyArr[i] =stringHolder;
  }
  
  return emptyArr;
}

function johnLennonFacts(factsArr){
  
let newFacts = [];
let i = 0;
 while(i < factsArr.length)
 {
   newFacts[i] = factsArr[i] + "!!!";
   i++;
 
 }
 
 return newFacts;
}

function iLoveTheBeatles(num){
  
  let emptyArr = [];
  let i = 0;
  let check = 15 - num;
  do{
    emptyArr[i] = "I love the Beatles!";
    i++;
    
  }while(i < check);
  
  return emptyArr;
}
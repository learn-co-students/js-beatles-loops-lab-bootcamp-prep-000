//add solution here
function theBeatlesPlay(musician,instruments){
  let array=[];
  for(let i=0; i < musician.length; i++){
      array.push(musician[i] +" plays "+instruments[i])
  }
  return array
}
function johnLennonFacts(array){
  let n=0;
  let newArray=[];  
  while(n < array.length){
    newArray.push(array[n]+'!!!')
    n++
  }
  return newArray;
}

function iLoveTheBeatles(n){
  
  let array =[];
  do{
    
    array.push('I love the Beatles!')
    n++
  }
   while(n < 15)
  return array
}








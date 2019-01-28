function theBeatlesPlay(musicians,instruments){
  var array=[];
  for(let i=0;i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}
function johnLennonFacts(array){
  let i=0;
  while(i<array.length){
    array[i]= array[i] + '!!!';
    i++;
    
  }
  return array;
}
function iLoveTheBeatles(number){
  let array2= [];
   do{array2.push("I love the Beatles!");
    number++ }
while( number<15);
return array2;
}
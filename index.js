function theBeatlesPlay(musicians,instruments){
  var array=[];
  for (let i=0;i<musicians.length;i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}
function johnLennonFacts(facts){
  let i=0;
  while (i<facts.length){
    facts[i]=facts[i]+"!!!";
    i=i+1;
  }
  return facts;
}
function iLoveTheBeatles(number){
  var array=[];
  let i=-1;
  if(number<15){
  do{
    array.push('I love the Beatles!');
    i=i+1;
  }while(i<number);
  }else{
    array.push('I love the Beatles!');
  }
  return array;
}

function theBeatlesPlay(musicians,instruments){
 var array=[];
 for(var i=0;i<musicians.length;i++){
   array.push(musicians[i] + " plays " + instruments[i]);
 }
  return array;
}

function johnLennonFacts(facts){
  for(var i=0;i<facts.length;i++){
    facts[i]=facts[i]+"!!!";
  }
  return facts;
}

function iLoveTheBeatles(number){
  var result=[];
  result.push("I love the Beatles!");
  while(number>0 && number < 15){
    result.push("I love the Beatles!");
    number--;
 }
  return result;
}

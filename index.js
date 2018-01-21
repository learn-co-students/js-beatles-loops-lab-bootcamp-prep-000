function theBeatlesPlay(musician, instruments){
  var array = []; 
  for (var i=0; i<musician.length; i++){
    array.push(musician[i] + " plays "+ instruments[i]);
  }
  return array;
}
function johnLennonFacts(facts){
  var array = [];
  let i=0; 
  while(i<facts.length){
    array.push(facts[i]+"!!!");
    i++;
  }
  return array;
}
function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
    n++;
  }while(n<15); 
  return array;
}
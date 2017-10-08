
function theBeatlesPlay(musician,instrument){
  var array = [];
  for(let i=0;i < musician.length;i++){
    array.push(musician[i]+" plays "+instrument[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var array=[];
var i=0;
  while(i<facts.length){
    array.push(facts[i]+"!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
  var array=[];

  do{
    array.push("I love the Beatles!");
    num++;
  }while(num<15);
  return array;
}

// add solution here
function theBeatlesPlay(musicians, instruments){
  var array =[];
  
  for(var i = 0; i < musicians.length; i++){
    array.push(musicians[i]+' plays '+instruments[i])
  }
  
  return array;
}

function johnLennonFacts(facts){
  var temp =[];
  
  for (let i = 0; i < facts.length; i++){
    temp[i] = facts[i] + "!!!"
  }
  
  return temp
}

function iLoveTheBeatles(num){
  var temp = [];
  var x = 0;
  do {
    
  temp[x]="I love the Beatles!"
  num++;
  x++;
} while (num<15);

return temp
}
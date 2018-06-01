function theBeatlesPlay(musicans,instruments){
  
  var array = [];
  
  for (let i = 0; i < 4; i++) {
  
  array.push(musicans[i] + ' plays ' + instruments[i])
  
}
  
  return array
  
  
}

function johnLennonFacts (facts){
  
  var array = [];
  
  let i = 0;
  
while (i < facts.length) {
  
  
 array.push(facts[i] + '!!!');
  
i++;
}
  return array;
  
}


function iLoveTheBeatles(n) {

 
var beats = [];
  
do{
    
    beats.push("I love the Beatles!");
    
    n++;
    
  }while (n < 15);
  
return beats;
  
}
var musicans = Beatles.musicians
var instruments = Beatles.insturments

function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  for(var i = 0; i<4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
    
  }
  return newArray
  
}

function johnLennonFacts(facts){
  var i = facts.length
  var newArray = [];
  while(i>0){
    --i
    newArray.unshift(`${facts[i]}!!!`);
  }
  return newArray
}

function iLoveTheBeatles(Number){
  var i = Number;
  var newArray = [];
  do { newArray.push("I love the Beatles!");
    i++
  }
  while(i < 15);
  
  return newArray
}

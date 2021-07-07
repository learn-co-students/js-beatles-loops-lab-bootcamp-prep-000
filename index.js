function theBeatlesPlay (musicians,instruments){
  var newArray = [];
  for (var i = 0; i < 4; i++){
  
  newArray[i] = `${musicians[i]} plays ${instruments[i]}`; 
  }
  return newArray;
}
function johnLennonFacts (facts){
  var countdown = facts.length - 1;
  while (countdown >= 0){
    facts[countdown] = `${facts[countdown]}!!!`;
    --countdown
  }
  return facts
}
function iLoveTheBeatles (number){
  var newArrayTwo = [];
  var i = 0;
  do {
    newArrayTwo[i] = `I love the Beatles!`;
    ++i
    ++number
  } while ( number < 15)
  return newArrayTwo
}
// add solution here
function theBeatlesPlay(musicians,instruments){
  var combination = [];
  for(let i=0; i<musicians.length; i++){
    combination[i]=musicians[i].concat(" plays ").concat(instruments[i]);
  }
  return combination
}

function johnLennonFacts(facts){
  var output = facts;
  for(let i=0; i<facts.length; i++){
    output[i]=facts[i].concat("!!!");
  }
  return output
}

function iLoveTheBeatles(number){
  var output = [];
  do {
    output.push("I love the Beatles!");
    number = number + 1;
  } while(number < 15);
  return output
}
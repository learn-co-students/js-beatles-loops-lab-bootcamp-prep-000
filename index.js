// add solution here
function theBeatlesPlay(musicians, instruments){
  var play = []
  
  for(let i = 0; i < musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return play;
}

function johnLennonFacts(facts){
  var new_facts = []
  
  while(facts.length > 0){
    new_facts.push(facts.shift() + '!!!')
  }
  return new_facts;
}

function iLoveTheBeatles(number){
  var message = [];
  let count = 0;
  
  do{
    message.push("I love the Beatles!");
  } while(++number < 15)
  
  return message;
}
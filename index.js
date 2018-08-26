// add solution here

function theBeatlesPlay(musicians,instruments){
  var play = [];
  for(let i=0; i<musicians.length; i++){
    play.push(musicians[i] +' plays '+ instruments[i]);   
  }
  return play;
}

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var cause = [];
  do {
    cause = ['I love the Beatles!'];
  } while (cause.length<num);
  return cause;
}
function theBeatlesPlay(musicians,instruments){
  var array=[];
  for(let i = musicians.length;i>0;i--){
    array.push(musicians[musicians.length-i]+ ' plays ' +instruments[instruments.length-i]);
  }
  return array
}

function johnLennonFacts(facts){
  var i = facts.length
  while(i>0){
    facts[facts.length-i]+="!!!";
    i--;
  }
  return facts
}

function iLoveTheBeatles(number){
  var array=[];
  do{

      array.push("I love the Beatles!");
      number++;

  }
  while(number<15);
  return array
}

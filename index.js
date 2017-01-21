function theBeatlesPlay(mus, inst) {
  var newArray = [];
  
  for(let i=0; i<mus.length; i++)
  {
    var sent = mus[i] + ' plays ' + inst[i];
    newArray.push(sent);
  }
  return newArray
}

function johnLennonFacts(facts){
  var factsLen = facts.length;
  
  while(factsLen > 0)
  {
    facts[factsLen-1] = facts[factsLen-1] + '!!!';
    factsLen--;
  }
  
  return facts
}

function iLoveTheBeatles(num) {
  var array = [];

  do{
    array.push("I love the Beatles!");
    num++
  }while(num<15)
  return array;
}
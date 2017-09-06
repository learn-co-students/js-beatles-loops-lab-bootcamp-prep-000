function theBeatlesPlay(musicians,instruments){
  var emptyarray=[];
  for (let i=0;i<musicians.length;i++){
    emptyarray.push(musicians[i]+` plays `+instruments[i])
  }
return emptyarray
}
function johnLennonFacts(facts){
  var i=0
  while (i<facts.length){
    facts[i]=facts[i]+"!!!";i++;
  }
  return facts
}
function iLoveTheBeatles(n){
  var newarray=[];
  do {

    newarray.push('I love the Beatles!');n--;
  }
  while (n<15&&n>=0);
return newarray
}

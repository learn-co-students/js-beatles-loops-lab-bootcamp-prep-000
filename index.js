function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat=[];
  for (var i=0; i<musicians.length; i++){
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat;
}
function johnLennonFacts(facts){
  var johnFacts=[];
  for(var i=0; i<facts.length; i++){
    johnFacts.push(`${facts[i]}!!!`)
  }
  return johnFacts;
}
function iLoveTheBeatles(num){
  var iLoves=[];
  do{
    iLoves.push('I love the Beatles!')
  } while (++num < 15)
  return iLoves;
}

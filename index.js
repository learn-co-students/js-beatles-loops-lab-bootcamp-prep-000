function theBeatlesPlay(musicians, instruments){
  var strings = [];
  for(let i=0;i<musicians.length; i++){
    strings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return strings;
}

function johnLennonFacts(facts){
  var count = 0;
  while(count <facts.length){
    facts[count] += '!!!';
    count++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var toReturn = [];
  do{
    toReturn.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return toReturn;
}

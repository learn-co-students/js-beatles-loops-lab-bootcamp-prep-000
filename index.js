function theBeatlesPlay(musicians, instruments) {
  var result = [];

  while(musicians.length > 0 && instruments.length > 0) {
    result.push(`${musicians.shift()} plays ${instruments.shift()}`);
  }
  return result;
}

function johnLennonFacts(johnFacts) {
  var counter = 0;
  var result = [];
  while(counter < johnFacts.length){
    result.push(johnFacts[counter]+'!!!');
    counter++;
  }
  return result;
}

function iLoveTheBeatles(num){
  var result = [];
  do{
    result.push(`I love the Beatles!`);
    num++;
  }while(num < 15)
  return result;
}

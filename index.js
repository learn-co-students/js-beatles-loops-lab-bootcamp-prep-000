function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i< musicians.length; i++){
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(facts){
  var counter = 0;
  while(counter < facts.length){
    facts[counter] += '!!!';
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var arr = [];
  var counter = 0;
  do{
    arr.push('I love the Beatles!');
    counter++;
  } while(counter <= n && n <= 15);
  return arr;
}

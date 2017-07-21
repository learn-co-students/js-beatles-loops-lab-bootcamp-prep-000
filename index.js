function theBeatlesPlay(musicians, instruments){
  var a = [];
  for (var i=0;i<musicians.length;i++){
    a.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return a;
}

function johnLennonFacts(facts){
var a =[];
  for(var i = 0;i<facts.length;i++){
    a.push(facts[i] + '!!!');
  }
  return a;
}


function iLoveTheBeatles(n){
  var a =[];
  do{
    a.push('I love the Beatles!');
  } while(++n<15);
  return a;
}

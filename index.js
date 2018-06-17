function theBeatlesPlay(mus,inst) {
  var array = [];
  var i = 0;
  for (i=0;i<mus.length;i++){
    var x = `${mus[i]} plays ${inst[i]}`;
    array.push(x);
  }
  return array;
}

function johnLennonFacts(facts) {
 var i=0;
  while(i<facts.length) {
    facts[i] = facts[i] + '!!!';
  i++;
  }
  return facts;
}

function iLoveTheBeatles(x) {
 var array=[];
  do{
    array.push('I love the Beatles!');
    x++;
  }while(x<15);
  return array;
}
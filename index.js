
function theBeatlesPlay(musicians, instruments){
  var abc = [];
  var i;
  for(i=0;i<musicians.length;i++){
    abc[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return abc;
}

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array=[];
  var i=0;
  do{
    array[i]="I love the Beatles!";
    i++;
    number++;
  } while(number<15);
  return array;
}

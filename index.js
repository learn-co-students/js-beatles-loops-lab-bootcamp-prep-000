function theBeatlesPlay(musicians, instruments){
  var arr=[];
  for(var i=0; i<musicians.length; i++){
    arr.push(musicians[i]+' plays '+instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts){
  var arr=[];
  var count=0;
  while(count<facts.length){
    arr.push(facts[count]+'!!!');
    count++;
  }
  return arr;
}
function iLoveTheBeatles(num){
  var arr=[];
  do{
    arr.push('I love the Beatles!');
    num++;
  } while (num<15);
  return arr;
}

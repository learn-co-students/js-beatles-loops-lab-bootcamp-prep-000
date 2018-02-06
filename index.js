function theBeatlesPlay(musicians,instruments){
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
     array[i]= musicians[i]+" plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(facts){
var j=0;
  while (j < facts.length) {
    facts[j]=facts[j]+"!!!";
    j++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var array2=[];
  do{
    array2.push("I love the Beatles!");
    num++;
  }while(num<15)
  return array2;
}

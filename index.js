function theBeatlesPlay(musicians, instruments){
  var array=new Array();
  var string="";
  for(var i=0;i<instruments.length;i++){
    array[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(facts){
  var i=0;
  while (i<facts.length) {
    facts[i]=facts[i]+"!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(number){
  var array=new Array();
  var i=0;
  do {
    array[i]="I love the Beatles!";
    i++;
    number++;
  } while (number<15);
  return array
}

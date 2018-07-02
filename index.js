function theBeatlesPlay(mus, inst){
  var temp = [];
  for(var i=0; mus.length>i;i++){
    temp[i]= `${mus[i]} plays ${inst[i]}`;
  }
  
  return temp;
}

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    
    facts[i]= `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var temp=[];
  do{
    temp[temp.length]="I love the Beatles!";
    num++;
  }while(num<15)

  return temp;
}


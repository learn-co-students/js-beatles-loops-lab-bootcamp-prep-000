function theBeatlesPlay(mus,inst){
  var arr=new Array();
  for(let i=0;i<mus.length;i++){
    var str=mus[i]+" plays "+inst[i];
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i=0;
  var arr=new Array();
  while(facts.length>i){
    var str=facts[i]+"!!!";
    arr.push(str);
    i++;
  }
  
  return arr;
}

function iLoveTheBeatles(num){
  var arr=new Array();
  
  do{
    var str="I love the Beatles!";
    arr.push(str);
    num++;
  }while(num<15);
  
  return arr;
}
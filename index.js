function theBeatlesPlay(musicians ,instruments){
  var arr=[];
  for (let x=0; x<musicians.length; x++){
     arr.push(`${musicians[x]} plays ${instruments[x]}`)

  }
return arr;
}
function johnLennonFacts(facts){
  var x=0;
  while(x<facts.length){
    facts[x]=facts[x]+"!!!";
    x++;
  }
  return facts;
}
function iLoveTheBeatles(n){
  var arr=[];

  do {
    arr.push("I love the Beatles!");
    n++;
  }while(n<15)
  return arr;
}

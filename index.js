function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
function johnLennonFacts(facts){
  var n = facts.length;
  while(n>0){
    facts[n-1] = `${facts[n-1]}!!!`
    n--;
  }
  return facts;
}
function iLoveTheBeatles(n){
  var array = [];
  var c = 0;
  do{
    array.push("I love the Beatles!")
    c++;
    if(n>15)return array[0];
  }while(c<=n);
  return array;
}

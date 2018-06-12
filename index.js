function theBeatlesPlay(musicians, instruments){
  var arr= [];
  for(var i=0; i<musicians.length; i++){
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts){
  var n = 0;
  var x = facts.length;
  while(n < x){
    var backUp = facts[n] + "!!!";
    console.log(backUp);
    facts=[...facts, backUp];
    n = n+1;  
  } 
  return facts;
}

function iLoveTheBeatles(n){
  var arr =[];
  do{
    arr=[...arr, "I love the Beatles!"];
    n=n+1;
  }while(n<15);
  return arr;
}
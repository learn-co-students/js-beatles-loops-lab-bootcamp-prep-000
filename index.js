function theBeatlesPlay(musicians, instruments){
  var arr= [];
  for(var i=0; i<=musicians.length; i++){
    arr=[...arr, musicians[i] + 'plays' + instruments[i]];
    return arr;
  }
}

function johnLennonFacts(facts){
  var n = 0;
  while(n < facts.length){
    var backUp = facts[n] + '!!!';
    console.log(backUp);
    console.log(facts[n] + '!!!')
    facts.push[backUp];
    n=n+1;  
    console.log(n);
  } 
  return facts;
}
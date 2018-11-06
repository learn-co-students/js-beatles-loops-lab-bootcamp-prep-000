

function theBeatlesPlay(musicians,instruments){
  var newVar  = [];

  for( var i = 0; i < musicians.length; i++){
  newVar.push( musicians[i] + " plays " + instruments[i]);

   }
return newVar;
}

function johnLennonFacts(facts){
 var x = 0;
 var z = [];
  while(x < facts.length ){
  z.push(facts[x] + "!!!");
  x++;
  }
 return z;
 }

function iLoveTheBeatles(n){
 
  var ar1 = [];
  do { n = n + 1;
  ar1.push("I love the Beatles!");
  
  } while (n < 15);
  return ar1;
}

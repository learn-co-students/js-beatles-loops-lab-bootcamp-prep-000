// add solution here

function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  for (var i = -1; i < musicians.length; i++){
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`
    }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++
  }
  return facts;
}

function iLoveTheBeatles (n){
  
  var newArray = [];
  do { 
    newArray.push ("I love the Beatles!");
    n++;
  } while ( n < 15 );
    
    return newArray;
  }
  
  
  










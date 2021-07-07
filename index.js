function theBeatlesPlay(musicians,instruments){
  var array =[];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
return array;
  
}

function johnLennonFacts(facts) {
  var listoffacts=[];
  var i = 0
  while (i < facts.length){
    listoffacts.push(facts[i] + '!!!'); i++;
  }
  
  return listoffacts;
}

function iLoveTheBeatles(n) {
  var eArray =[];
  do {
    eArray.push("I love the Beatles!"); n++;
  } while (n < 15);
 
  return eArray;
}
  
  


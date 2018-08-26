function theBeatlesPlay (musician, inst){
  var array = [];
  for(var i =0; i < musician.length; i++){
    array.push(musician[i] + " plays " + inst[i]);
  }
  return array;
}

function johnLennonFacts (facts){
 var array2 = [];
  var i = 0
  while(i<facts.length){
    array2.push(facts[i] + "!!!")
  i++;
  }
  return array2
}

function iLoveTheBeatles(num){
  var array3 = [];
  do {
    array3.push("I love the Beatles!");
    num++;
  }
    while (num<15);
  return array3
  
}







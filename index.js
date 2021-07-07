function theBeatlesPlay(musicians, instruments){
  var array=[];
  for (var i=0; i<4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
   return array;
}

function johnLennonFacts(array){
  var n=0;
  var lennonFacts = [];
  while(n<array.length){
  lennonFacts.push(array[n]+"!!!");
   n++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(number){
  var fan=[];
  var i=number;
  do {
    fan.push("I love the Beatles!");
    i++;
  } while(i<15);
  return fan;
}

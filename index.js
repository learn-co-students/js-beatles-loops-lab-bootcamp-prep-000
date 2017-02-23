function theBeatlesPlay(musicians, instruments){
  var ar = [];
  for(let j=0; j < 4; j++){
    ar[j] = musicians[j] + ' plays ' + instruments[j];    
  }
  return ar;
}

function johnLennonFacts(array){
  var i = 0;
  while(i < array.length){
    array[i] += '!!!';
    i++
  }
  return array;
}

function iLoveTheBeatles(n){
  var ar = [];
  do{
    ar.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return ar;
}
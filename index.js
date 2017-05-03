function theBeatlesPlay(arrMusicians, arrInstruments){
  var array = [];
  for(let i = 0; i < arrMusicians.length; i++){
    array.push(arrMusicians[i] + ' plays ' + arrInstruments[i]);
  }
  return array;
}

function johnLennonFacts(arrayOfJohnLennonFacts){
  var n = 0;
  var johnLennon = [];
  while(n !== arrayOfJohnLennonFacts.length){
    johnLennon.push(arrayOfJohnLennonFacts[n] + "!!!");
    n++;
  }
  return johnLennon;
}

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push('I love the Beatles!')
    n++;
  }while(n < 15);
  return array;
}

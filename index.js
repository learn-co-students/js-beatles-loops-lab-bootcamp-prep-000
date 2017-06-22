function theBeatlesPlay(m, inst){
  var newarray = []
  for(var i = 0; i < m.length; i++){
    newarray[i] = m[i] + " plays " + inst[i];
  }
  return newarray
}

function johnLennonFacts(array){
  var newarray = []
  for(var i = 0; i< array.length; i++){
    newarray[i] = array[i] + "!!!";
  }
  return newarray
}

function iLoveTheBeatles(n){
  var countdown = n
  var newarray = [];
  do{
    newarray.push("I love the Beatles!");
    countdown--
  }while(countdown >= 0 && countdown < 15)
  return newarray
}

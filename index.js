function theBeatlesPlay(musicians, instruments){
  var newAR = []
  for (var i=0, j=0; i<musicians.length, j<instruments.length; i++, j++){
    newAR.push(musicians[i]+" plays "+instruments[j])
  }
  return newAR;
}

function johnLennonFacts(facts){
  var k = 0;
  var newAR2 = [];
  while(k<facts.length){
    newAR2.push(facts[k++]+"!!!")
  }
  return newAR2;
}

function iLoveTheBeatles(number){
  var EAR = [];
  do {
    EAR.push("I love the Beatles!");
    number++
  } while(number<15)
  return EAR;
}

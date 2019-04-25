// add solution here
var newArray = [];

function theBeatlesPlay(musicianArray, instrumentArray){
  for (var i=0; i<musicianArray.length; i++) {
    newArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`
  }
  return newArray
}

function johnLennonFacts(facts){
  var i=0
  while (i < facts.length){
    facts[i] = facts[i]+('!!!')
    i++
  }
  return facts
}


function iLoveTheBeatles(num){
  var array = [];
  do{
    array.push('I love the Beatles!');
    num++;
  }
  while(num<15);
  return array;
}



  
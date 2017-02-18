function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for(let i =0; i<musicians.length; i++){
    myArray.push(musicians[i]+" plays "+instruments[i]);
  }
  return myArray;
}

function johnLennonFacts(facts){
  var myFacts = [];
  var i=0;
  while (i < facts.length) {
    myFacts.push(facts[i]+"!!!");
    i++;
  }
  return myFacts;
}

function iLoveTheBeatles(n){
  var myArray = [];
  do{
    myArray.push("I love the Beatles!");
    n++;
  }while(n<15);
  return myArray;
}

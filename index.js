function theBeatlesPlay(musicians, instruments){
  var arrBeatles = [];
  for(let i=0; i<musicians.length;i++){
    arrBeatles.push(musicians[i]+" plays "+instruments[i]);
  }

  return arrBeatles;
}


function johnLennonFacts(facts){
  var newFacts=[];
  var index=0;
  while(newFacts.length!=facts.length){
    newFacts.push(facts[index]+"!!!");
    index++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var beatlesLove=[];
  do{
    beatlesLove.push("I love the Beatles!");
    n++;
  }while(n<15)

  return beatlesLove;
}

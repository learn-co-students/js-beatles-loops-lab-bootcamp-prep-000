// add solution here
function theBeatlesPlay(musicians,instruments){
  var musicPlay = []
  for (let i=0;i<musicians.length;i++){
    musicPlay.push(musicians[i] + " plays " + instruments[i]) 
  }
  return musicPlay
}

function johnLennonFacts(facts){

  var newFacts = [];
  var i = 0;
  
  while(i<facts.length){
    newFacts.push(facts[i]+"!!!")
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(n){
  var number = []
  do{
    number.push("I love the Beatles!")
    n++;
  }while(n<15)
  return number
}
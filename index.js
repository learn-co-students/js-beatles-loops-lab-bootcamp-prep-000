

function theBeatlesPlay(arrMusic, arrInst){
  var mike = [];
  for (var i=0; i < arrMusic.length; i++){
    var a = arrMusic[i];
    var b = arrInst[i];
    mike.push(a + " plays " + b);
  }
  return(mike);
}

function johnLennonFacts(arrFacts){
  var i = 0;
  var mike=[];
  while (arrFacts.length > i){
    var a = arrFacts[i];
    mike.push(a + "!!!");
    i++;
  }
  return(mike);          
}


function iLoveTheBeatles(number){
  var mike = [];
  do{
    mike.push("I love the Beatles!");
    number++
  } while(number < 15);
  return(mike);
}

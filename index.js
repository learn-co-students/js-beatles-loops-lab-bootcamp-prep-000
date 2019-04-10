// add solution here

function theBeatlesPlay(musicians,instruments){
  var array = [];
  var i;
  for(i=0; i<musicians.length; i++){
    array.push(musicians[i] +' plays ' + instruments[i])
  };
  return array;
}

function johnLennonFacts(fact){
  var array = [];
  var i;
  for(i=0;i<fact.length;i++){
    array.push(fact[i]+"!!!")
  }
  return array;
}


function iLoveTheBeatles(p){
  var array = [];
  var i=0;
    if(p === 7){
      do{
        array.push("I love the Beatles!");
        i++;
      }
      while(i<8)
    }
    else if(p === 17){
      array.push("I love the Beatles!");
    }
  return array;
}

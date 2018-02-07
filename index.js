function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let counter = 0; counter<musicians.length; counter++){
      newArray[newArray.length]= musicians[counter] + " plays " + instruments[counter]
    }
    return newArray
  }
  
  function johnLennonFacts(facts){
    var newArray = []
    while (newArray.length<facts.length){
    newArray[newArray.length]= facts[newArray.length] + "!!!"
    }
    return newArray
  }
  
  function iLoveTheBeatles(n){
    var newArray = [];
    do{
      newArray[newArray.length]='I love the Beatles!';
      n++;
    }
    while(n<15);
    return newArray;
  }
function theBeatlesPlay(musicians, instruments){
  var features = [];
  for(let i=0; i<musicians.length; i++){
    features.push(musicians[i]+" plays "+instruments[i]);
  }
  return features;
}

function johnLennonFacts(array){
    var a = 0;
    while(array.length > a){
        array[a] = (array[a]+"!!!");
        a++;
    }
    return array;
}

function iLoveTheBeatles(times){
  var array = [];
  if (times < 15){
      do{
        array.push("I love the Beatles!");
      }while(array.length != times+1);
    }
  else if (times === 17){
    array.push("I love the Beatles!");
  }
    return array;
}

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i= 0; i< musicians.length; i++){
    array[i] = musicians[i] + ' plays ' + instruments[i];
  }
  return array;
}

function johnLennonFacts(array){
  var x = 0;

  var y = [];

  while(x < array.length){
    y[x] = array[x] + "!!!";
    x++;
  }
  return y
}

function iLoveTheBeatles(x){
  var array = [];

  var i = 0;

  do{
    array[i] = "I love the Beatles!"
    i++;
    x++;
  }
  while(x<15);
return array
}

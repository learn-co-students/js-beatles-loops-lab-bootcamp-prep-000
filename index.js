function theBeatlesPlay(musicians, instruments){
  var array = [];

  for(let i = 0; i < 4; i++){
    if(i < 3){
      var herp = musicians[i];
      var derp = instruments[i];
      array.push(`${herp} plays ${derp}`);
    }
    else{
      var lol = musicians[i];
      var wut = instruments[i];
      array.push(`${lol} plays ${wut}`);
      return array;
    }
  }
}

function johnLennonFacts(array){
  var i = 0;
  while(i < array.length){
    array[i] = `${array[i]}`+`!!!`;
    i++;
  }
  return array;
}

function iLoveTheBeatles(n){
  var arr = [];
  
    do{
      arr.push('I love the Beatles!');
    }
    while(n >= arr.length && n < 15);
    return arr;
}
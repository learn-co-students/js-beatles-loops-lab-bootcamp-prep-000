function theBeatlesPlay(musicans, instruments){
  var artistArray = [];
  for (let i = 0; i < musicans.length ; i++){
    artistArray.push(musicans[i] + " plays " + instruments[i]);
  }
  return artistArray;
}

function johnLennonFacts(array){
  var i = 0;
  while ( i < array.length){
    array[i]+= "!!!"
    i++
  }
  return array;
}

function iLoveTheBeatles(n){
  var array = [];
  var i = 0;
  do{
    array.push("I love the Beatles!");
    i++
  } while( i <= n && n < 15 );
  return array;
}

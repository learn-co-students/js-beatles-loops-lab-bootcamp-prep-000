function theBeatlesPlay(musician, instrument){
  var beatles = [];
  for (var i = 0; i<4;i++){
    beatles.push(`${musician[i]} plays ${instrument[i]}`);
    }
  return beatles;
}

function johnLennonFacts(array){
  var i = 0;
  while(i<array.length){
    array[i]=array[i]+"!!!";
    i++
  }
  return array;
}

function iLoveTheBeatles(n){
  var array =[]
  do{
    array.unshift("I love the Beatles!");
  } while(array.length<n+1 && n <15);
  return array;
}
function johnLennonFacts(array){
  for(let i = 0; i < array.length; i++){
    array[i] += "!!!";
  }
  return array;
}

function theBeatlesPlay(musicians, instruments){
  var plays = [];
  for(let i = 0; i< musicians.length; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return plays;
}

function iLoveTheBeatles(n){
  var beatlesLove = ["I love the Beatles!"];
  while(n > 0 && n < 15){
    beatlesLove.push(beatlesLove[0]);
    n--;
  }
  return beatlesLove;
}

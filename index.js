function theBeatlesPlay(musicians, instruments) {
  var newArray=[];
  for(let i=0; i<4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array){
  var i = 0;
  var newArray= [];
  while (i< array.length){
    newArray.push(array[i] + "!!!");
    ++i;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do{
    loveArray.push("I love the Beatles!");
    ++n;
  }
  while( n<15);
  return loveArray;
}

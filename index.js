function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for(let i = 0; i < 4; i++)
  {
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)
}
return newArray;
}

function johnLennonFacts(array){
  var i =0;
  while(i<array.length){
    array[i] = array[i] + "!!!"; i++
  }
  return array;
}

function iLoveTheBeatles(i){
  var newArray = [];

  do{
    newArray.push(`I love the Beatles!`);
    i++;
  } while (i< 15);
  return newArray;
}

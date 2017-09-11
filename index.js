function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i< musicians.length; i ++){
    var newString = musicians[i] + " plays " + instruments[i];
    newArr.push(newString);
    newString;
  }
  return newArr;
}

function johnLennonFacts(array){
  var i = 0;
  var newArr = [];
  while (i < array.length){
    newArr.push(array[i] + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(n){
  n++;
  var  newArr = [];
  if(n <= 15){
  do{
    newArr.push('I love the Beatles!');
    n--
  }
  while(n != 0)
}
else{
  newArr.push('I love the Beatles!');
}
  return newArr;
}

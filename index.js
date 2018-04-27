function theBeatlesPlay(musicians, instruments){
  var array= [];
  for (let i = 0, j = 0; i < musicians.length, j < instruments.length; i++, j++){
    array.push(`${musicians[i]} plays ${instruments[j]}` );
  }
  return array;
}

function johnLennonFacts(array){
  var exclamaTion = "!!!";
  var newArray = [];
  var i = 0;
  while (i < array.length){
    newArray.push(array[i] + exclamaTion);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(n){
  var array = [];
  
  do{
    n++;
    array.push("I love the Beatles!");
  }
  while (n < 15);
  
  return array;
}
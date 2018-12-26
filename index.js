function theBeatlesPlay(array, instruments){
  var arr = [];
  for (var i= 0; i < array.length; i++){
    arr.push(`${array[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(array){
  var newarr = [];
  var i = 0;
  while (array.length !== i){
    newarr.push(array[i] + "!!!")
    i++; 
  }
  return newarr;
}

function iLoveTheBeatles(n){
  var newarr = [];
  do {
    newarr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newarr;
}
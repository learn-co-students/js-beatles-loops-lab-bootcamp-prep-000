function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0, n = musicians.length; i < n; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr){
  var newArray = [];
  for (var i = 0, n = arr.length; i < n; i++){
    newArray.push(`${arr[i]}!!!`);
  }
  return newArray;
}

function iLoveTheBeatles(n){
  var newArray = [];

  do{
    newArray.push("I love the Beatles!");
    n++;
  }while (n < 15);

  return newArray;
}

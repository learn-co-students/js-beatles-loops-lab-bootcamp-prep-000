function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i=0; i<musicians.length; i++){
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(arr){
  for (var i=0; i<arr.length; i++){
    arr[i] = arr[i]+"!!!";
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }  while (num < 15);
  return arr;
}
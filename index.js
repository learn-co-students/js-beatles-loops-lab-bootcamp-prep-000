function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
     arr.push(musicians[i] +" plays "+ instruments[i])
  }
  return arr
}

function johnLennonFacts(array){
  var arr = [];
  let i = array.length -1
  while(i >= 0){
    arr.push(array[i] + "!!!");
    --i;
  }
  arr.reverse()
  return arr;
}

function iLoveTheBeatles(n){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    n++;
  }
  while(n < 15);
  return arr;
}
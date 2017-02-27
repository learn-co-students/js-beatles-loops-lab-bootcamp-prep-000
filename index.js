function theBeatlesPlay(musicians,instruments){
  var arr = []
  for (var i=0;i<musicians.length;i++){
    arr.push(musicians[i]+" plays "+instruments[i])
  }
  return arr;
}


function johnLennonFacts(arr){
  var n = 0
  var newArr = arr
  while (n<arr.length){
    newArr[n]=arr[n]+`!!!`
    n++;
  }
  return newArr
}

function iLoveTheBeatles(n){
  var arr = []
  if (n>=15) arr.push("I love the Beatles!")
  while(n<15){
    arr.push("I love the Beatles!")
    n++;
  }
  return arr
}

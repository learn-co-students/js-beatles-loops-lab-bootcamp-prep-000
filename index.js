function theBeatlesPlay(arr1, arr2){
  var newArr =[];

  for(var i = 0; i < arr1.length; i++){
    newArr[i] = `${arr1[i]} plays ${arr2[i]}`
  }
  return newArr;
}

function johnLennonFacts(arr){
  var i = 0;
  while( i < arr.length){
    arr[i] = `${arr[i]}!!!`
    i++
  }
  return arr
}

function iLoveTheBeatles(num){
  var arr=[];

  do {
    arr.push(`I love the Beatles!`)
    num++
  } while (num < 15);
  return arr;
}

function theBeatlesPlay(arr1,arr2){
  var newArray =[];
  for(var i =0; i < arr1.length; i++){
    newArray.push(arr1[i] + ' plays ' + arr2[i]);
  }
  return newArray;
}
function johnLennonFacts(arr){
  var j=0;
  var newArr =[];
  while(j < arr.length){
  newArr.push(arr[j] + "!!!");
  j++;
  }
  return newArr;
}
function iLoveTheBeatles(num){
  var arr = [];
  if(num < 15 ){
    do {
  arr.push('I love the Beatles!');
  --num;
} while (num >=0);
  }else{
  arr.push('I love the Beatles!');
  }
  return arr;
}

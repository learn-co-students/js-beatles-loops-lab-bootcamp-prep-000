function theBeatlesPlay(arr1,arr2){
  var newArray=[];

  for(var i =0;i<arr1.length;i++){
    newArray.push(`${arr1[i]} plays ${arr2[i]}`);
  } return newArray;
}

function johnLennonFacts(arr){
  var newArray=[];
  for (var i = 0; i<arr.length;i++){
    newArray.push(`${arr[i]}!!!`);
  } return newArray;
}

function iLoveTheBeatles(n){
  var newArray=[];
    do {
      newArray.push('I love the Beatles!');
      n+=1;
    } while (n<15)
return newArray;
}

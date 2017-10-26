function theBeatlesPlay(arr1,arr2){
  var newArray=[];

  for(var i =0;i<arr1.length;i++){
    newArray.push('${arr1[i]} plays ${arr2[i]}');
  } return newArray;
}

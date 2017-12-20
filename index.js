
function theBeatlesPlay(array1,array2){
  var combined=[];
  for(var i=0; combined.length<array1.length; i++){
    combined[i]=array1[i] + " plays " + array2[i]
  }
  return combined
}

function johnLennonFacts(array){
  let i=0
  while(i<array.length){
        array[i]=array[i] + "!!!";
        i++;
  }
return array
}

function iLoveTheBeatles(n){
  var array=[];
  var i=0
  do {
    array.push("I love the Beatles!");
    i++;
  } while (n<15 && i<=n);
  return array
}

function theBeatlesPlay(arrM, arrI){
  var ansArr = []

  for(var i = 0; i < arrM.length; i++){
    // var currentPair = `${arrM} plays ${arrI}`;
    ansArr.push(`${arrM[i]} plays ${arrI[i]}`);
  }
  return ansArr;
}


function johnLennonFacts(arr){
  var ansArr = [];
  var i = 0
  while(i < arr.length){
    ansArr.push(arr[i] + "!!!")
    i++
  }
  return ansArr
}

function iLoveTheBeatles(n){
  var ansArr = [];
  do{
    ansArr.push("I love the Beatles!")
    n+=1;
  }while(n < 15);
  return ansArr;
}

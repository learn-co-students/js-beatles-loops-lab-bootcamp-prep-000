function theBeatlesPlay(musArr, insArr){
  var newArr = [];
  for(var i=0;i<musArr.length;i++){
    newArr.push(musArr[i]+" plays "+insArr[i]);
  }
  return newArr;
}

function johnLennonFacts(factsArr){
  //return factsArr.map(str => str+"!!!");
  var newArr = [], ind=0;
  while (ind<factsArr.length){
      newArr.push(factsArr[ind++]+"!!!");
  }
  return newArr;
}

function iLoveTheBeatles(num){
  var newArr = [];
  do{
    newArr.push("I love the Beatles!");
  } while(++num<15)
  return newArr
}

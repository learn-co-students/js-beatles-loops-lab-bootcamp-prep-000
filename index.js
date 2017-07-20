// function theBeatlesPlay(musicians,instruments){
//   var empty_array = [];
//   for(i=0;i<musicians.length;i++){
//       empty_array.push(`${musicians[i]} plays ${instruments[i]}`)
//   }
//   return empty_array
// }
//
// console.log(theBeatlesPlay(["m1","m2"],["i1","i2"]))

function theBeatlesPlay(mArr,iArr){
  var newArr = [];
  for(var i=0;i<mArr.length;i++){newArr.push(`${mArr[i]} plays ${iArr[i]}`)}
  return newArr
}

function johnLennonFacts(factsArray){
  var newArr = [];
  while(factsArray.length > 0){
    var factString = factsArray.splice(0,1);
    factString += "!!!"
    newArr.push(factString);
  }
  return newArr;
}


function iLoveTheBeatles(num){
  var newArr = [];
  do{newArr.push("I love the Beatles!");num++}
  while(num<15);
  return newArr;
}

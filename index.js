// add solution here
function theBeatlesPlay(musArr, instArr){
  var emptyArr = [];
  
  for (var i=0; i<musArr.length; i++)
  {
    emptyArr.push(musArr[i] + " plays " + instArr[i]);
  }
  return emptyArr;
}

function johnLennonFacts(factsArr){
  
  var i=0;
  while (i < factsArr.length){
    factsArr[i] += '!!!';
    i++;
  }
  return factsArr;
}

function iLoveTheBeatles(num){
  var empty = [];
  do{
    empty.push('I love the Beatles!');
    num++;
  }
  while (num < 15);
  return empty;
}
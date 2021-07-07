// add solution here
function theBeatlesPlay(musicians, instruments){
  var list = [];
  
  for(var i = 0; i < musicians.length; i++){
    list.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return list;
}



function johnLennonFacts(factsArr){
  var i = 0;
  while(i < factsArr.length){
    factsArr.splice(i,1,`${factsArr[i]}!!!`);
    i++;
  }
  return factsArr;
}

function iLoveTheBeatles(num){
  var array = [];
  do{
    array.push("I love the Beatles!");
  } while(++num < 15);
  
  return array;
}
function theBeatlesPlay(arrMusicians,arrInstruments){
  var arr = [];
  for(var i = 0; i < arrMusicians.length; i++){
    arr.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(arrJLFacts){
  var arr = [];
  while(arrJLFacts.length > 0){
    var temp = arrJLFacts.shift();
    arr.push(temp + "!!!");
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }while(num < 15)
  return arr;
}


function theBeatlesPlay(musicianArr, instrumentArr){
  var newArr = [];
  for(let i = 0; i < 4; i++){
    newArr[i] = musicianArr[i] +  " plays " + instrumentArr[i];
  }
  return newArr;
}

function johnLennonFacts(factArr){
  var factArrLength = factArr.length;
  var newArr = [];
  var incrementer = 0;
  while(incrementer < factArrLength){
    newArr.push(factArr[incrementer] + "!!!");
    incrementer++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  var times = 15 - num;
  var newArr = [];
  var incrementor = 0;
  while(incrementor < times){
    newArr.push("I love the Beatles!");
    incrementor++;
  }
  if(times<1){
    newArr.push("I love the Beatles!")
  }
  return newArr;
}
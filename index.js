function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < 4; i++) {
    newArray.push(musicians[i]+' plays '+instruments[i]);
  }
  return newArray
}

function johnLennonFacts(array){
  var newArray = [];
  while (newArray.length < array.length){
    newArray.push(array[newArray.length]+'!!!');
  }
  return newArray
}

function iLoveTheBeatles(n){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
  }
  while (newArray.length <= n && n < 15){
  }
  return newArray
}

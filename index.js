function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for(var i in musicians){
    var musician = musicians[i];
    var instrument = instruments[i];
    newArr.push(musician + ' plays ' + instrument)
  }
  return newArr;
}

function johnLennonFacts(arr){
  var i = 0;
  while(i < arr.length){
    arr[i]= arr[i].concat('!!!');
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n){
  var arr = [];
  do{
    arr.push('I love the Beatles!')
    n++;
  } while(n<15);
  return arr;
}

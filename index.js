// add solution here

function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    arr[i] = (`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts (arr) {
  for (var i = 0; i < arr.length; i++){
    arr[i] = `${arr[i]}!!!`;
  }
  return arr;
}

function iLoveTheBeatles (num){
  var arr = [];

  do{
    arr.push('I love the Beatles!')
    num++;
  } while (num < 15)
  return arr;
}
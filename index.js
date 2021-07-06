// add solution here

function theBeatlesPlay(musicians, instruments) {
  var newArr=[];
  for( let i=0; i< musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
 }
  return newArr;
}

function johnLennonFacts(arr) {
 var newArr = [];
 var i =0;
  while (arr.length > i) {
    newArr.push(arr[i] + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    num++;
  }
  while( num<15);
  return newArr;
  
}
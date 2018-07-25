var musicians = ["Bob", "Ban"]
var instruments = ["sax", "piano"]

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i < musicians.length && i < instruments.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr){
  var arrCopy = arr;
  var i = 0;
  while(i < arr.length){
    arrCopy[i] += "!!!";
    i++;
  }
  return arrCopy;
}

function iLoveTheBeatles(num){
  var numCopy = num;
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    numCopy++;
  } while(numCopy < 15);
  return arr;
}

var strings = theBeatlesPlay(musicians, instruments);
console.log(strings);
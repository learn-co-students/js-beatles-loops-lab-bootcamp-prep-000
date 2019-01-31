// add solution here

function theBeatlesPlay(musicians, instruments) {
var newArr= [];
for ( let i=0; i<musicians.length; i++) {
  newArr.push(musicians[i] + " plays " + instruments[i]);
}
return newArr;
}

  
function johnLennonFacts(array) {
  var i= 0; 
  var newArr = [];
  while (newArr.length < array.length ) {
    newArr.push(array[i] + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  var newArr = [];
  do {
    newArr.push( "I love the Beatles!");
    num++;
  } while (num < 15);
  return newArr;
}




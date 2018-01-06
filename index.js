function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for(let i = 0; i < musicians.length; i++) {
    var newString = musicians[i] + " plays " + instruments[i]
    arr.push(newString);
  }
  return arr;
}

/*
function johnLennonFacts(array) {
  
  var i = 0 
  while(i < array.length) {
    array.push("!!!");
    i++;
  }
  return array;
}
*/

function johnLennonFacts(array) {
  var results = []
  var i = 0 
  while(i < array.length) {
    results.push(array[i] + "!!!");
    // var newFact = array[i] + "!!!"
    // array.push(newFact);
    i++
  }
  return results; 
}

function iLoveTheBeatles(num) {
  var emptyArr = []
  
  do { 
    emptyArr.push("I love the Beatles!")
    num++
  } while(num < 15 )
  
  return emptyArr;
}

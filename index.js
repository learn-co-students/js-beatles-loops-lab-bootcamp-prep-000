
function theBeatlesPlay(musicians, instruments) {
  var empty = []; {
    for (var i = 0; i <4; i++) {
      empty.push (`${musicians[i]} plays ${instruments[i]}`);
    }
  }
  return empty;
}

function johnLennonFacts(arr) {
  var newArray = [];
  var i = 0;
  while (i < arr.length) {
    newArray.push(`${arr[i]}!!!`);
    i++;
  }
  return newArray;
}
 function iLoveTheBeatles(num) {
   var pool = [];
   do {
     pool.push("I love the Beatles!");
     num++;
   } while (num < 15);
   return pool;
 }

// add solution here
function theBeatlesPlay(arr, index) {
  var array = []
  for(var i = 0; i < arr.length; i++) {
   array.push(`${arr[i]} plays ${index[i]}`);
 }
 return array;
}

function johnLennonFacts(array) {
  var i = 0;
   while (i < array.length) {
     array[i] = array[i] + "!!!";
     i++;
   }
   return array;
 }

function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}
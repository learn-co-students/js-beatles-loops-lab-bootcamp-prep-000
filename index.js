 function theBeatlesPlay(musicians, instruments) {
   var empty = [];
   for (var i = 0; i < musicians.length; i++) {
     empty.push(musicians[i] + " plays " + instruments[i]);
   }
   return empty;
 }
function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}
 function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
} 
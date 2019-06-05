function theBeatlesPlay(musicians, instrument) {
  var empty = []
    for(let m = 0; m < musicians.length; m++) {
      empty.push(`${musicians[m]} plays ${instrument[m]}`)
      }
  return empty
   
}
  
function johnLennonFacts(array) {
var array = array;
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
return(array)

}


function iLoveTheBeatles(number)
{
  var num = number
  var fault = 'out of range'
  var x = 0;
  var qoute = "I love the Beatles!"
  var empty = [];
 
  do {
  //
  empty.push(qoute);
  num++
  
 
} while (num < 15);
return empty

}




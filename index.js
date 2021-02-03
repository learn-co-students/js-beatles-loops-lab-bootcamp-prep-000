// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
for(var n = 0; n < musicians.length; n++) {
array.push(`${musicians[n]} plays ${instruments[n]}`);
}
return array;
}

  
function johnLennonFacts(array) {
  var n = [0];
  while (n < array.length) {
    array[n] = array[n] + "!!!";n++;
}
return array;}

function iLoveTheBeatles (number){
  var n = []
  var i = 0 
  do {n.push('I love the Beatles!');i++;}
 while (i <= number && number < 15);
  return n;
}
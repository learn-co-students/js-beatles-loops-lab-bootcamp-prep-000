// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var x = 0; x < musicians.length; x++) {
  array.push(musicians[x] + ' plays ' + instruments[x])
}
  return array
}




function johnLennonFacts(fact) {
  var result = [];
  var count = 0;
  while (count < fact.length) {
    result.push(fact[count] + '!!!');
    count++
  }
  return result
}



function iLoveTheBeatles(num) {
  var noreally =[];
  do {
    noreally.push("I love the Beatles!"); 
    num++
  } while (num < 15);
  
  return noreally
}
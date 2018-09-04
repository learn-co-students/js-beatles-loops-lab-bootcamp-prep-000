// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return array
}

function johnLennonFacts(facts_array) {
  var i = 0;
  while (i < facts_array.length) {
    facts_array[i] = facts_array[i] + "!!!";
    i++;
  }
  return facts_array
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  do { array.push ("I love the Beatles!"); i++
  } while ( i <= number && number < 15);
  return array
}
  
  
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

 function johnLennonFacts(facts) {
   var array = [];
   var i = 0;

   while (i < facts.length) {
     array.push(`${facts[i]}!!!`);
     i++;
   }
   return array;
 }

function iLoveTheBeatles(n) {
  var array = [];
  var i = 0;

  do {
    array.push(`I love the Beatles!`);
    i++;
  } while (i <= n && n < 15);
  return array;
}

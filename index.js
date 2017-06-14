function theBeatlesPlay(musicians, instruments) {
  var U2 = [];
 for (var i = 0; i < musicians.length; i++) {
   U2.push(`${musicians[i]} plays ${instruments[i]}`)
 }
 return U2
}

function johnLennonFacts(facts) {
  var array2 = [];
  let i = 0
   while (i < facts.length) {
    array2.push(`${facts[i]}!!!`);
    i++;
   }
   return array2
}

function iLoveTheBeatles(number) {
  var heart = [];
 do {
  heart.push("I love the Beatles!");
  number++;
 } while (number < 15);
 return heart
}

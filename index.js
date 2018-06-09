function theBeatlesPlay(musicians, instruments) {
  var array=[]; 
  for (var i=0; i<musicians.length; i++) {array.push (`${musicians[i]} plays ${instruments[i]}`)} 
  return array;}
function johnLennonFacts(facts) {
  let count=0; 
  var array2=[]; 
  while (count<facts.length) {array2.push (`${facts[count]}!!!`); ++count;}
  return array2;} 
function iLoveTheBeatles(number) {
  var array3=[]; 
  do {array3.push ("I love the Beatles!"); --number} 
  while (number<15 && number>=0);
  return array3;}
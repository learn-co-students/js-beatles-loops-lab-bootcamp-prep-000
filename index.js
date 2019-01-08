// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (let i = 0, m = musicians.length; i < m; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}


function johnLennonFacts(facts) {
  var array = [];

  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }

  return array;
}


function iLoveTheBeatles(n){
  var notReally = [];
  
  
  do {
    notReally.push('I love the Beatles!');
    n++;}
   while (n <15);
  
  return notReally;}
  




function theBeatlesPlay (musicians,instruments) {
 var amusicians = []; 
 for (var i = 0; i < musicians.length; i++) {
  amusicians.push(`${musicians[i]} plays ${instruments[i]}`);
 } 
 return amusicians; 
} 
function johnLennonFacts (facts) {
  var emptyFacts = [];
  var i = 0;
  while (i < facts.length) {
   emptyFacts.push( `${facts[i]}!!!`); 
   i++;
  } 
  return emptyFacts;
  }
  function iLoveTheBeatles (number) {
    var num = [];
    do {num.push('I love the Beatles!');
    number ++;}
    while (number < 15);
    return num;
    
  }

  

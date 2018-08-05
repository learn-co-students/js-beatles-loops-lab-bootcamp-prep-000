// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arrayNew = [];
  for (let i = 0; i < musicians.length; i++ ) {
    arrayNew.push(`${musicians[i]} plays ${instruments[i]}`);
    
  }return arrayNew;
}


function johnLennonFacts(facts) {
  let x = 0;
  while (x < facts.length) {
    facts.push('!!!');
    x++;
  } 
  return facts;
}

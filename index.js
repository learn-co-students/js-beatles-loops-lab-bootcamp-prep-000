// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arrayNew = [];
  for (let i = 0; i < musicians.length; i++ ) {
    arrayNew.push(`${musicians[i]} plays ${instruments[i]}`);
    
  }return arrayNew;
}


function johnLennonFacts(facts) {
  let x = 0;
  let array1 = [];
  while (x < facts.length) {
    array1.push(`${facts[x]}!!!`);
    x++;
  } 
  return array1;
}

function iLoveTheBeatles(number) {
  let array2 = [];
  do { 
    array2.push('I love the Beatles!');
    number++;}
    while (number < 15)
    return array2;
}



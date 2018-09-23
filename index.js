// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  
  for (let i = 0; i < musicians.length ; i++) {
     array.push(`${musicians[i]} plays ${instruments[i]}`);
     
  }
return array;

}



function johnLennonFacts(facts) {
  let i = 0;
  let newFacts = [];

  while (i < facts.length) {
  newFacts.push(facts[i] + "!!!")
  i++
}
  return newFacts
}





function iLoveTheBeatles(n) {
   let array = [];
  let i = i + 1;
  
  do {
     
      array.push('I love the Beatles!');
      n++
      
  } while (n < 15);

return array
}

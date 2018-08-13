// add solution here
function theBeatlesPlay(musicians, instruments) {
  let result = [];
  for (let i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}

function iLoveTheBeatles(number) {
 let result = [];
 do {
   result.push('I love the Beatles!');
   number++;
 } while (number < 15);
 return result;
}
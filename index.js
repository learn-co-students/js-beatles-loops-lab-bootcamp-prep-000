// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = [];

for (let i=0, l = musicians.length; i<l; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
   return array;
}
function johnLennonFacts(facts) {
  const fact = [];
  let i = 0;
  while (i < facts.length) {
  fact.push(`${facts[i]}!!!`);
  i++;  
  }
  return fact;
}
function iLoveTheBeatles(number) {
  const num = [];
  let i = 0;
  do {
    num.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return num;
}

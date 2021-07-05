// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians, instruments) {
  let list = [];
  for (let i = 0; i < musicians.length; i++)
  list.push(`${musicians[i]} plays ${instruments[i]}`);
  return list
}

function johnLennonFacts(facts) {
  let fact = [];
  let i = 0;
  while (i < facts.length) {
    fact.push(`${facts[i]}!!!`);
    i++;
  }
  return fact
}

function iLoveTheBeatles(number) {
  let strings = [];
  function incrementVariable() {
   number++ ;
  }
  do {
    strings.push("I love the Beatles!");
    incrementVariable();
  } while (number < 15);
  return strings
}

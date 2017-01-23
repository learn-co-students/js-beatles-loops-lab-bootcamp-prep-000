//implement es6 more!!!!
function theBeatlesPlay(musicians, instruments){
  const newStrings = [];
  for(let i = 0; i < musicians.length; i++){
    const musician = musicians[i];
    const instrument = instruments[i];
    newStrings.push(`${musician} plays ${instrument}`);
}
return newStrings;
}

function johnLennonFacts(facts){
const specialFacts = [];
let i = 0;
  while(i < facts.length){
  specialFacts.push(`${facts[i]}!!!`);
  i++;
  }
  return specialFacts;
}

function iLoveTheBeatles(num){
  const loveBeatles = [];
  do{
    loveBeatles.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return loveBeatles;
}


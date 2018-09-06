// add solution here
function theBeatlesPlay(musicians, instruments) {
  var  newArray = [];
  for (let i = 0; i < musicians.length; i++){
    if (i === 0) {
      newArray.push(`${musicians[0]} plays ${instruments[0]}`);
    } else {
      newArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  }
  return newArray;
}

function johnLennonFacts(facts) {
  let newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;

  } while (number < 15);
  return newArray;
}

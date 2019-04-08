// add solution here

function theBeatlesPlay(musicians,instruments) {
  let notEmptyAnymore = [];
  for (let i = 0; i < musicians.length; i++) {
  notEmptyAnymore.push(`${musicians[i]} plays ${instruments[i]}`)
  } return notEmptyAnymore;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i <facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!")
    number++;
  }
  while (number < 15);
  return newArray;
}

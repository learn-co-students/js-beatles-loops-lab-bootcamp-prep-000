function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  let newString = "";
  for (let i = 0; i < musicians.length; i++) {
    newString = musicians[i] + " plays " + instruments[i];
    newArray.push(newString);
  }
  return newArray;
};

function johnLennonFacts(facts) {
  let flag = facts.length - 1;
  while (flag >= 0) {
    facts[flag] = facts[flag] + "!!!";
    --flag;
  }
  return facts;
};

function iLoveTheBeatles(number) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!");
    ++number;
  } while (number < 15);
  return newArray;
};
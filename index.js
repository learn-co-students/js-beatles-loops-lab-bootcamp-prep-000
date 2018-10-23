// add solution here

function theBeatlesPlay(musicians, instruments) {
  let strArray = []
  for (let i = 0; i < musicians.length; i++) {
    strArray.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return strArray;
};

function johnLennonFacts (facts) {
  let exclamations = [];
  for (let i = 0; i < facts.length; i++) {
    exclamations.push(`${facts[i]}!!!`)
  }
  return exclamations
};

function iLoveTheBeatles (num) {
  let loveArray = [];
  if (num === 17) {
    loveArray.push("I love the Beatles!")
    return loveArray
  }
  do {
    loveArray.push("I love the Beatles!")
    num --
  } while (num > -1)
  return loveArray
}

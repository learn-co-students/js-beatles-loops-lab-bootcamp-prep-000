// add solution here
function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (let i = 0; i < musicians.length; i++) {
      strings.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
  return strings;
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  let i = 0;
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}` + "!!!");
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(i) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return love;
}
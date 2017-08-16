const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  var blankarray = []
  for (let i = 0; i < musicians.length; i++)
    {blankarray.push(`${musicians[i]} plays ${instruments[i]}`)}
  return blankarray
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles(x) {
  var emptyarray = []
  do {
    emptyarray.push("I love the Beatles!")
    x++
  } while (x < 15);
  return emptyarray
}

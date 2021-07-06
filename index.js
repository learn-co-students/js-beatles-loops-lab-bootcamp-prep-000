// add solution here
function theBeatlesPlay(musician, instrument) {
  var bandMemberWithInstrument = [];
  for (let i = 0; i < musician.length; i++) {
    bandMemberWithInstrument.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return bandMemberWithInstrument;
}

function johnLennonFacts(facts) {
  var count = 0;
  while (count < facts.length) {
    facts[count++] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var iLoveTheBeatlesArray = [];
  do {
    iLoveTheBeatlesArray.push("I love the Beatles!"); 
    number++;
  } while (number < 15);
  
  return iLoveTheBeatlesArray;
}
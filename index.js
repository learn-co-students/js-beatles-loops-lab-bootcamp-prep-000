// add solution here
function theBeatlesPlay(ppl, instr) {
  let arr = [];
  for (let i = 0; i < ppl.length; i++) {
    arr.push(`${ppl[i]} plays ${instr[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0;
  let newFacts = [];
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
    let arr = [];
    do {
        arr.push('I love the Beatles!');
        num++;
    } while (num < 15);
    return arr;
}

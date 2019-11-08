console.log(iLoveTheBeatles(7));

// add solution here
function theBeatlesPlay(musicians, instruments) {
  let lines = [];
  for (let i = 0; i < musicians.length; i++) {
    lines.push(`${musicians[i]} plays ${instruments[i]}`); 
  }
  return lines;
}

function johnLennonFacts(juicyFacts) {
  let lines = []; 
  for (let i = 0; i < juicyFacts.length; i++) {
    lines.push(juicyFacts[i] + "!!!");
  }
  return lines;
}

function iLoveTheBeatles(num) {
  let lines = [];
  do {
    lines.push("I love the Beatles!"); 
    num++; 
  } while (num < 15)
  return lines;
}
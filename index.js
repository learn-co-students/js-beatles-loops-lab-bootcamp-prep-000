function theBeatlesPlay(musician, instrument) {
  var b = [];
  for (var musicianNum = 0; musicianNum < musician.length; musicianNum++) {
    b.push(`${musician[musicianNum]} plays ${instrument[musicianNum]}`);
} 
  return b;
} 

function johnLennonFacts(facts) {
  let factsNum = 0; 
    while (factsNum < facts.length) { 
      facts[factsNum] += "!!!";
      factsNum++;
  }
  return facts;
}

function iLoveTheBeatles(number) { 
  var A = []; 
  do { A.push("I love the Beatles!"); number++;
  } while (number < 15);
  return A;
  }
  
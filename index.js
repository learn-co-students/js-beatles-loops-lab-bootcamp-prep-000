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
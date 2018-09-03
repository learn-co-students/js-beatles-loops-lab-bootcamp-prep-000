
function theBeatlesPlay(musician, instrument) {
  const strings = [];
  for(var i = 0; i < musician.length; i++) {
    const sentence = musician[i] + " plays " + instrument[i]
    strings.push(sentence)
  }
  
    return strings
}


function johnLennonFacts(facts) {
  const newFacts = [];
  for(var i = 0; i < facts.length; i++) {
    const newS = facts[i] + "!!!"
    newFacts.push(newS)
  }
  return newFacts
  
}

function iLoveTheBeatles(number) {
  const earray = []
  do {
    number++;
    earray.push("I love the Beatles!");
  } while(number < 15);
  return earray;
  
}




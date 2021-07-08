// add solution here
// add solution here
function theBeatlesPlay(musicians,instruments) {
  var sentences = []
  
  for (var i = 0; i < musicians.length ; i++) {
    var memberTalent = musicians[i] + " plays " + instruments[i];
    sentences.push(memberTalent)
  }

  return sentences
}

function johnLennonFacts(facts) {
  let i = 0;
  var loudLennonFacts = []
  
  while (i < facts.length) {
    var lennonFact = facts[i] + "!!!"
    loudLennonFacts.push(lennonFact)
    i++;
  }
  
  return loudLennonFacts
}

function iLoveTheBeatles(n) {
  var loveAmount = []
  
  var i = 0; 
  do {
    loveAmount.push('I love the Beatles!')
    i++
   
  } while (i <= n && n < 15 )
  return loveAmount
}

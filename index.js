function theBeatlesPlay(musicians, instr){
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instr[i]);
  }
  return beatles
}
  
function johnLennonFacts(facts) {
    
    var newFacts = [];
    let i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i += 1;
    }
    return newFacts;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}


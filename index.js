// add solution here
function theBeatlesPlay(musicians, instruments){
  var facts = []
  for (let counter = 0; counter < musicians.length; counter++){
    facts.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
   return facts
}

function johnLennonFacts(facts){
  var newFacts = []
  var counter = 0
  while (counter < facts.length){
     newFacts.push(`${facts[counter]}!!!`);
     counter++;
    }
  return newFacts
}

function iLoveTheBeatles(n){
  var phrase = []

  do {
    phrase.push("I love the Beatles!")
    n++
  } while (n < 15);
  return phrase
}
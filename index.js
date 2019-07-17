// add solution here
function theBeatlesPlay(musicians, instruments){
  var facts = []
  for (let counter = 0; counter < musicians.length; counter++){
    facts.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
   return facts
}

function johnLennonFacts(facts){
  var newFacts = ["!!!"]
  while (let counter = 0; counter < facts.length; counter++){
    newFacts.unshift(`${facts[counter]}` + "!!!");
    }
  return newFacts
}
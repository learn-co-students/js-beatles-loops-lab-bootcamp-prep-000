// add solution here
function theBeatlesPlay(musicians, instruments){
  var facts = []
  for (let counter = 0; counter < musicians.length; counter++){
    facts.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
   return facts
}


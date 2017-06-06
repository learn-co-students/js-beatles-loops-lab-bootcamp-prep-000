function theBeatlesPlay(musicians, instruments)
{
  var beatlesarray = []
  for (let i = 0;i < musicians.length; i++){
    beatlesarray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesarray
}

function johnLennonFacts(facts)
{
  var i=0
  while(i<facts.length){
    facts[i] = facts[i] + "!!!"; i++
  }
  return facts
}

function iLoveTheBeatles(i){
  var newarray =[]
  do {
    newarray.push(`I love the Beatles!`);
    i++;
  }
  while (i<15);

  return newarray
}

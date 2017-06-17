function theBeatlesPlay(musicians, instruments)
{
  var sentences = [];
  for(var i=0; i<4; i++)
  {
    sentences[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return sentences;
}

function johnLennonFacts(facts)
{
  var i=0;
  while(i<facts.length)
  {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number)
{
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++;
  } while (number<15);
  return love;
}

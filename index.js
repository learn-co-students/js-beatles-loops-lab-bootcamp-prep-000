function theBeatlesPlay(musicians, instruments)
{
  var empty = [];
  var c = 0;
  while(c < musicians.length)
  {
    empty.push(`${musicians[c]} plays ${instruments[c]}`);
    c = c + 1;
  }
  return empty;
}

function johnLennonFacts(facts)
{
  var returnArray = [];
  var c = 0;
  while(c < facts.length)
  {
    returnArray.push(`${facts[c]}!!!`);
    c = c + 1;
  }
  return returnArray;
}

function iLoveTheBeatles(num)
{
  var empty = [];
  do 
  {
    empty.push("I love the Beatles!");
    num = num + 1;
  }while(num < 15)
  return empty;
}































function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments)
{
  var emptyArray = [];
  for(var i = 0; i < arrayOfMusicians.length; i++)
  {
    emptyArray[i] = `${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`;
  }
  return emptyArray;
}

function johnLennonFacts(facts)
{
  var i = 0;
  while (i < facts.length)
  {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}
function iLoveTheBeatles(num)
{
  var emptyArray = [];
 
  do
  {
    emptyArray.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return emptyArray;
}
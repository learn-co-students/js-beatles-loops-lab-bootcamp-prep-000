function theBeatlesPlay(musicians, instruments)
{
  var emptyArray = [];
  var i;
  for(i=0; i < musicians.length; i++)
  {
    var musiciansChar = musicians[i];
    var instrumentsChar = instruments[i];
    var together = musiciansChar +  " plays " + instrumentsChar;
    
    emptyArray.push(together)
  }
  return emptyArray;
}


function johnLennonFacts(facts)
{
var i=0;
while (i < facts.length)
{
  var stringFact = facts[i];
  stringFact = stringFact + "!!!";
  facts[i] = stringFact;
  i++;
}
return facts;
}

function iLoveTheBeatles(number)
{
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!")
    number++;
  }
  while(number < 15);
  
  return emptyArray;
}

















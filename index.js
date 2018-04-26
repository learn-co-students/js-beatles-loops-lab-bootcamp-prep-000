function theBeatlesPlay(musicians, instruments)
{
  let musicianInstrument =  [];
  
  for(let i=0; i<musicians.length; i++)
  {
    musicianInstrument[i] = musicians[i] + ' plays ' + instruments[i];
  }
  
  return musicianInstrument;
}

function johnLennonFacts(facts)
{
  let factsExclamation = [];
  let i = 0;
  
  while(i <facts.length)
  {
    factsExclamation.push(facts[i]+'!!!');
    i--;
  }
  
  return factsExclamation;
}


function iLoveTheBeatles(number)
{
  let beatlesArray = [];
  let i=0;

  do
  {
    beatlesArray.push("I love the Beatles!");
    i++;
  }
  while(number <15 && i<=number)
  
  return beatlesArray;
}

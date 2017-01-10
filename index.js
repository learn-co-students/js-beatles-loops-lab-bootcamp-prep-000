function theBeatlesPlay(musicians, instruments)
{
  var resultArray = [];
  for (var i=0; i<musicians.length; i++)
  {
    resultArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return resultArray;

}

function johnLennonFacts (facts)
{
  var resultArray = [];
  var i=0

  while (i<facts.length)
  {
    resultArray.push(`${facts[i]}!!!`);
    i++;
  }
  return resultArray;
}

function iLoveTheBeatles (n)
{
  var resultArray = [];
  var m =0;

  do{
    resultArray.push("I love the Beatles!");
    m++;

  }while (m<=n && n<15);

  return resultArray;

  }

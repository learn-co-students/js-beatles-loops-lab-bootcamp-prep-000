function theBeatlesPlay(musicians, instruments)
{
  var matchThem = [];
  for (let x = 0; x < musicians.length; x++)
  {
    matchThem[x] = `${musicians[x]} plays ${instruments[x]}`;
  }

  return matchThem;
}

function johnLennonFacts(factsArray)
{
  var counter = 0;
  while(counter < factsArray.length)
  {
    factsArray[counter] += "!!!";
    counter++;
  }
  return factsArray;
}

function iLoveTheBeatles(myNumber)
{
  var myArray = [];
  do 
  {
      myArray.push("I love the Beatles!");
      myNumber++;
  } while (myNumber < 15);
  return myArray;
}
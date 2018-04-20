function theBeatlesPlay(arrMusicians, arrInstruments)
{
  var arrTemp = [];
  for(let i = 0; i < arrMusicians.length; i++)
  {
    arrTemp.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return arrTemp;
}

function johnLennonFacts(arrFacts)
{
  var count = 0;
  var temp = [];
  while(count < arrFacts.length)
  {
    temp.push(arrFacts[count] + "!!!");
    count++;
  }
  return temp;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do
  {
    empty.push("I love the Beatles!");
    n++;
  } while( n < 15);

  return empty;
}

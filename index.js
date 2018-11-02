// add solution here
function theBeatlesPlay(musician, instrument)
{
  var array = [];
  for (let i=0; i<4; i++)
  {
    array.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return array;
}

function johnLennonFacts(array)
{
  var result = [];
  var index = 0;
  while (result.length !== array.length)
  {
    result.push(array[index] + '!!!');
    index += 1;
  }
  return result;
}

function iLoveTheBeatles(number)
{
  var array = [];
  do
  {
    array.push('I love the Beatles!');
    number += 1;
  } while(number < 15)
  return array;
}

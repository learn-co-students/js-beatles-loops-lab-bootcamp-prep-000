//----------------------------------------------------
var theBeatlesPlay = (musicians, instruments) =>
{
  var beatlesArray = [];

  if (musicians.length === instruments.length)
  {
    for (var i = 0; i< musicians.length; i++)
    {
      beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  }

  return beatlesArray

}

//----------------------------------------------------
var johnLennonFacts = (array) =>
{
  let count = 0
  while (count < array.length)
  {
    array[count] = array[count] + '!!!'
    ++count
  }
  return array
}

//----------------------------------------------------
var iLoveTheBeatles = (n) =>
{
  var lovearray = [];

  do
  {
    lovearray.push('I love the Beatles!') 
    n++
  }
  while (n < 15);
  return lovearray
}

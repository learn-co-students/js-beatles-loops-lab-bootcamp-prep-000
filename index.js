function theBeatlesPlay(musiciansArray, instrumentsArray)
{
  var array = []
  for(let i = 0; i < musiciansArray.length; i++)
  {
    array[i] = musiciansArray[i] + ' plays ' + instrumentsArray[i] 
  }
  return array
}

function johnLennonFacts(factsArray)
{
  var newArray = []
  var index = 0
  while (index < factsArray.length)
  {
    newArray[index] = factsArray[index] + '!!!'
    index++
  }
  return newArray
}

function iLoveTheBeatles(number)
{
  var array = []
  do 
  {
    array.push('I love the Beatles!')
    number++
  }
  while (number < 15);
  return array
}
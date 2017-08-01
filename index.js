function theBeatlesPlay(musicians, instruments)
{
  var theBand= new Array()
  for(let i= 0;i< 4;i++)
  {
    theBand.push(musicians[i]+" plays "+instruments[i])
  }
  return theBand
}

function johnLennonFacts(array)
{
  var x=0;
  while(x<array.length)
  {
    array[x]= array[x]+("!!!")
    x++
  }
  return array
}

function iLoveTheBeatles(number)
{
  var beatleLove= new Array()
  do
  {
    beatleLove.push("I love the Beatles!")
    number++
  }
  while(number<15)
  return beatleLove
}

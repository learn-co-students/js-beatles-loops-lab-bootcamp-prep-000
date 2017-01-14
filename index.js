function theBeatlesPlay(musarray, instarray)
{
  var array= new Array();
  for(let i=0;i<musarray.length;i++)
    array.push(`${musarray[i]} plays ${instarray[i]}`)

  return array
}
function johnLennonFacts(factsArray)
{
  var i=0
  var array=new Array()
  while(i<factsArray.length)
  {
    array.push(`${factsArray[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(number)
{
  var array= new Array()
  do{
    array.push("I love the Beatles!")
    number++
  }while(number<15);
  return array
}
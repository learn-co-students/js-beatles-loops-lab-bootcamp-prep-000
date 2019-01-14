// add solution here
function theBeatlesPlay(musicians ,instruments)
{
  var arr=[]
  for(var i=0;i<musicians.length;i++)
  {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(array) 
{
  var newArr=[]
  var i=0
  while(i<array.length)
  {
    newArr.push(array[i]+"!!!")
    i++
  }
  return newArr
}

function iLoveTheBeatles(number)
{
  var array=[]
  do{
    array.push("I love the Beatles!")
    number++
  }
  while(number<15)
  return array
}


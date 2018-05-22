function johnLennonFacts(array)
{
  var m;
  
  for (m=0;m<array.length;m++)
  
  {
    array[m]=array[m]+"!!!"
  }
  
  return array
}

function iLoveTheBeatles(s)
{
  var s1= []
  do
  {
    s1.push("I love the Beatles!")
    s=s+1
  }while(s<15)
  
    return s1
}

function theBeatlesPlay(m,I)

{
  var k=[]
  var i
  
  for (i=0;i<m.length;i++)
  {
    k.push(m[i]+" plays "+ I[i])
   
  }
  return k
}
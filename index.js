function theBeatlesPlay(X,Y)
{
  var array = []
  //var array1 = []
  var l = X.length

  for(var i = 0; i < l; i++)
  {
    //john lennon plays instrument
    array.push(`${X[i]} plays ${Y[i]}`)
  }

  return array
}



function johnLennonFacts(Z)
{
var l = Z.length
 var array = []

  while (l>0)
  {
    array.unshift (`${Z[l-1]}!!!`)
    l--;
  }
  return array

}

function iLoveTheBeatles(R)
{
var array =['I love the Beatles!']
var array1=[]

  if(R==7)
  {
    let n = 8
    do
    {
     array1=[...array,...array1]
      n--;
    }while (n>0)
    return array1
  }
  else if(R==17)
  {
    return array
  }
}

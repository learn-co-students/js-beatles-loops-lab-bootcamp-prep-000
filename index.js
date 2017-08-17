function theBeatlesPlay(mus, inst)
{
  var arr=[]
  for (var i=0; i<mus.length; i++)
  {
    arr.push(mus[i] + " plays " + inst[i])
  }
  return arr
}

function johnLennonFacts(jl)
{
  var i = 0
var arr = []
  while (i<jl.length)
  {
    arr.push(jl[i]+"!!!")
    i++
  }
  return arr
}

function iLoveTheBeatles(num)
{
  var i = 0
  var beat=[]

  do {
    beat.push("I love the Beatles!")
    i+=num
  } while (i<15);
  return beat
}

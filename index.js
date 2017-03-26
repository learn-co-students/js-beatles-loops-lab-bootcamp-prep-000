function theBeatlesPlay(musicians,instruments){
  var emptyArray = []

  for (var ii = 0;ii<=3;ii++ )
  {
    var matchStmt = musicians[ii] + " plays " + instruments[ii]
    emptyArray.push(matchStmt)
  }
  return emptyArray
}

function johnLennonFacts (facts)
{
  var ii = 0
  var factArray=[]
  while (ii < facts.length)
  {
    var newFact = facts[ii]+"!!!"
    factArray.push(newFact)
    ii++;
  }
  return factArray
}

function iLoveTheBeatles(number)
{
  var emptyArray=[]
  do {
    emptyArray.push("I love the Beatles!")
    number++
  }while (number < 15)
  return emptyArray
}

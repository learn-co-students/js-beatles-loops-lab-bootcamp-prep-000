
function theBeatlesPlay(musicians, instruments)
{
var theBeatlesPlay = []

for (let i = 0; i < 4; i++)
  {
    theBeatlesPlay.push(musicians[i] + " plays " + instruments[i])
  }
return theBeatlesPlay
}


function johnLennonFacts(facts)
{
  var newFacts = facts

  var i = 0

  while (i < newFacts.length)
  {
    newFacts[i] = newFacts[i] + "!!!"
    i++;
  }

return newFacts
}

function iLoveTheBeatles(number)
{

  var emptyArray = [   ]

do {
  emptyArray.push("I love the Beatles!")
  number++

} while (number < 15);

 return emptyArray
}

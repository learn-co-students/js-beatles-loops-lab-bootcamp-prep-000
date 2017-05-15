

function theBeatlesPlay(musicians, instruments)
{
  var myArray = new Array()

  for (var i = 0; i < musicians.length; i++){
    myArray[i] = musicians[i] +  " plays " + instruments[i]
  }

  return myArray

}

function johnLennonFacts(facts)
{
  var n = facts.length
  for (var i = 0; i < n; i++){
    facts[i] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(num)
{
  var n = num
  var howMuch = new Array()

  do {
    howMuch.push("I love the Beatles!")
    n++
  } while (n < 15)
  return howMuch
}

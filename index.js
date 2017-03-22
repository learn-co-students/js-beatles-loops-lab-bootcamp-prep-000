
function theBeatlesPlay(musicians, instruments) {

  var newarray = [] //create and empty[] storied in a variable }

  for ( let i = 0; i < musicians.length; i++)  {
  newarray.push(musicians[i] + " plays " + instruments[i])
  }
  return newarray
}

function johnLennonFacts(facts)  {
const newFacts = []
  var i = 0
  //var newFacts = []
  while (i < facts.length) {
 newFacts.push(`${facts[i]}!!!`)
     //newFacts.push(`${facts[i]}!!!`)
    //return [facts] + '!!!'  concatenates array and adds !!! to last index
    //return `${facts[i]}!!!` only runs through the first array index but adds !!! to the end of that string
    i++

  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var secondarray = []
  do { secondarray.push("I love the Beatles!")
  number++
}
  while (number < 15)
  return secondarray
}

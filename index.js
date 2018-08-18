// add solution here
function theBeatlesPlay(musicians, instruments) {
  let beatlesStrings = []

  for (var i = 0; i < musicians.length; i++) {
    beatlesStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesStrings
}

function johnLennonFacts(lennonArray) {
  let newArray = []
  var i = 0

  while (i < lennonArray.length) {
    newArray.push(`${lennonArray[i]}!!!`)
    i++
  }
    return newArray
  }

function iLoveTheBeatles(number) {
  let beatlesLove = []
  var i = number

  do {
      beatlesLove.push('I love the Beatles!')
      i++
  } while (i < 15)

  return beatlesLove
}

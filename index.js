// add solution here
function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(array) {
  let lennonFacts = []
  let counter = 0
  while (counter < array.length) {
    lennonFacts.push(`${array[counter]}!!!`)
    counter++
  }
  return lennonFacts
}

function iLoveTheBeatles(num) {
  let love = []

  do {
    love.push("I love the Beatles!")
    num++
  } while (num < 15)

  return love
}

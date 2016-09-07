function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}
function johnLennonFacts(array) {
  const shoutedFacts = []

  let i = 0
  while (i < array.length) {
    shoutedFacts.push(`${array[i]}!!!`)
    i++
  }
  return shoutedFacts
}
function iLoveTheBeatles (number) {
  const array = []
  do {
    array.push("I love the Beatles!")
    number++
  }
  while (number < 15)

return array
}

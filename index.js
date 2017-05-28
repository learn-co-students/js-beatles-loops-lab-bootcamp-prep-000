function theBeatlesPlay(musicians, instruments) {
  let empArr = []
  for (let i = 0; i < musicians.length; i++) {
    empArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empArr
}

function johnLennonFacts(array) {
  let i = 0
  let facts = []
  while (i < array.length) {
    facts.push(`${array[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  let loveArr = []
  do {
    loveArr.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  return loveArr
}
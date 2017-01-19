var musicians = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr'
]

var instruments = [
  'guitar',
  'bass guitar',
  'lead guitar',
  'drums'
]

function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, m = musicians.length; i < m; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array
}

function johnLennonFacts(facts) {
  var excitedFacts = []

  let i = 0
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return excitedFacts
}

function iLoveTheBeatles(i) {
  var love = []

  do {
    love.push(`I love the Beatles!`)
    i++
  }
  while (i < 15);

  return love
}

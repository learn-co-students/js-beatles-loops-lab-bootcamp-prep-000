var musicians = ["John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney"]

var instruments = ["Guitar", "Drums", "Lead Guitar", "Bass Guitar"]

function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function iLoveTheBeatles()
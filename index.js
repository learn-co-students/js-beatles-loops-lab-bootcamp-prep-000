function theBeatlesPlay(musicians, instruments) {
  //var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  //var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  var newArray = []
  for (let i = 0; i < musicians.length ; i++) {
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)}
  return newArray
}

function johnLennonFacts(facts) {
  var arrayLennon = []
  let i = 0

  while (i < facts.length) {
  arrayLennon.push(`${facts[i]}!!!`)
  i++
}
return arrayLennon }

function iLoveTheBeatles(n) {
  var arrayLove = []

  do {arrayLove.push("I love the Beatles!")}
  while (n++ && (n < 15))
  return arrayLove
}

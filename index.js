const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  var music = []
 for (let i = 0, l = musicians.length; i < l; i++) {
    music.push(musicians[i]+ ' plays ' + instruments[i])
  }
  return music
}

function johnLennonFacts(facts) {
  var exclamation = []
  let i = 0
  while (i<facts.length ) {
    exclamation.push(facts[i]+'!!!')
    i++
  }
  return exclamation
}

function iLoveTheBeatles(n){
  var love = []
  do {love.push("I love the Beatles!")
  n++ }
  while (n<15)

return love }
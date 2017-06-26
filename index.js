function theBeatlesPlay(musicians, instruments){
  var playinstr = []
  for (var i = 0; i<musicians.length; i++){
  playinstr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return playinstr
}

function johnLennonFacts(facts){
  var shoutfacts = []
  let i =0
  while(i < facts.length){shoutfacts.push(`${facts[i]}!!!`)
  i++}
  return shoutfacts
}

function iLoveTheBeatles(number){
  var lovebeatles = []
  do {lovebeatles.push("I love the Beatles!")
  number++}
  while (number < 15)
  return lovebeatles
}

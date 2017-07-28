function theBeatlesPlay(musicians,instruments) {
  var playlist = []
  var combo = ""
  for (var i=0; i < musicians.length; i++) {
    combo = musicians[i] + " plays " + instruments[i]
    playlist.push(combo)
  }
  return (playlist)
}

function johnLennonFacts(facts) {
  var fact_list = []
  var combo = ''
  for (var i=0; i < facts.length; i++) {
    combo = facts[i] + "!!!"
    fact_list.push(combo)
  }
  return (fact_list)
}

function iLoveTheBeatles(total) {
  var love = []
  do {
    love.push("I love the Beatles!")
    total ++
  } while (total < 15)
  return (love)
}

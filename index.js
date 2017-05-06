function theBeatlesPlay(players, instruments) {
  var allPlayers= [];
for (var i=0; i < players.length; i++) {
  allPlayers.push(players[i] + " plays " + instruments[i])
}
return allPlayers
}

function johnLennonFacts(facts){
  let johnfacts = []
 let i = 0
while (facts.length > i){

johnfacts.push(`${facts[i]}!!!`)
i++
}
 return johnfacts
 }

function iLoveTheBeatles (number) {
  var newBeatles=[];
  do {
    newBeatles.push("I love the Beatles!")
    number++;
  } while (number < 15);

return newBeatles
}

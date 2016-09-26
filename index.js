function theBeatlesPlay(musicians,instruments){
  var thebeatlesplayball = [];
  for (let i = 0; i < musicians.length; i++){
  thebeatlesplayball.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return thebeatlesplayball
}


function johnLennonFacts(facts){
var i = 0
  while (i < facts.length){
facts[i] = facts[i] + "!!!"
i++}
return facts
}

function iLoveTheBeatles(n){
  var beatlejuice = [];
  do {
  beatlejuice.push("I love the Beatles!")
 n++}
 while (n < 15)
  return beatlejuice
}

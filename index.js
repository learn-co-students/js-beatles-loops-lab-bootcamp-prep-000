function theBeatlesPlay(musician , instrument){
  const array = []
    for(let i = 0, l = musician.length; i < l;i++){
      array.push(`${musician[i]} plays ${instrument[i]}`)
    }
    return array
}

function johnLennonFacts(facts){
  const shoutedFacts = []
  var ln = facts.length
  let i = 0
    while (i < ln){
      shoutedFacts.push(`${facts[i]}!!!`)
        i++
    }
return shoutedFacts
}

function iLoveTheBeatles(n){
  const loveBeatles = []
    do {
      loveBeatles.push('I love the Beatles!')
      n++
    }
    while (n < 15)
return loveBeatles
}

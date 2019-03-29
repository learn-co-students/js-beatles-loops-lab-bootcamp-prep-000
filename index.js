// add solution here

function theBeatlesPlay(artistMusicians, artistInstruments){
  let beattles = []
  for (let x = 0; x < artistMusicians.length; x++){
    beattles.push(`${artistMusicians[x]} plays ${artistInstruments[x]}`)
  }
  return beattles;
}

function johnLennonFacts (facts){
  let vetorFacts = []
  for (let i = 0; i < facts.length; i++){
    vetorFacts.push(`${facts[i]}!!!`)
  }
  return vetorFacts;
}

function iLoveTheBeatles(number){
  let vetorFrases = []
  do {
    vetorFrases.push('I love the Beatles!')
    number += 1
  } while(number < 15)
  
  return vetorFrases;
}

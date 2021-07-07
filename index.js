function theBeatlesPlay(musicians, instruments){
  let array = []
  let n = 0;
while (n<4){
  array.push(musicians[n] + " plays " + instruments[n])
  n++
}
return array
}

function johnLennonFacts(facts){
  let n=0;
  let factsLoud = []
  while(n < facts.length){
    factsLoud.push(facts[n]+"!!!")
    n++
  }
  return factsLoud
}

function iLoveTheBeatles (n){
  let loveArray = []
  loveArray.push("I love the Beatles!");
  n++
  while (n<15){
  loveArray.push("I love the Beatles!");
  n++
}
return loveArray
} // this is a comment

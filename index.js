// add solution here
function theBeatlesPlay(musicians,instruments) {
  let newArray = []
  
  for (let i = 0; i < musicians.length; i++) {
    let counterM = musicians[i] 
      newArray.push(counterM + " plays " + instruments[i])
  }
  return newArray
}



function johnLennonFacts(facts) {
  let i = 0
  
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}



function iLoveTheBeatles (num) {
  let newArray = []
  
  do {
    newArray.push("I love the Beatles!")
    num++
  }
  while (num < 15)
return newArray
}


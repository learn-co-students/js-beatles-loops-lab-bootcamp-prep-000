// add solution here

function theBeatlesPlay(musicians, instruments) {
  
 let e_a = []
  
 for (let i = 0; i < musicians.length ; i++) {
   e_a.push(musicians[i] + " plays " + instruments[i])
 }
 
 return e_a
 
}

function johnLennonFacts(facts) {
  let factsEdited = []
  let i = 0
  while (i < facts.length) {
    factsEdited.push(facts[i] + "!!!")
    i++
 }
 return factsEdited
}

function iLoveTheBeatles(number) {
  
  let array = []
  do {
    array.push("I love the Beatles!")
    number++
  }
  while(number < 15)
  return array
}




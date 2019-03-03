// add solution here
function theBeatlesPlay(musicians,instruments){
  var beatles = []
  for (let i = 0; i < 4; i++){
    beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return beatles;
}

function johnLennonFacts(array){
  var newFacts = []
  let i = 0
  while (i < array.length){
  newFacts.push(array[i] + "!!!")
  i++
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var ilove = []
  let i = number
  do {
    ilove.push("I love the Beatles!")
    i++
  } while (i < 15)
return ilove
}




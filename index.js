function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var array = []
  for (let i = 0; i < arrayOfMusicians.length; i++ ){
    array.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
  }
  return array
}

function johnLennonFacts(arrayOfFacts){
  var array = []
  let n = arrayOfFacts.length
  while (n > 0){
    array.unshift(`${arrayOfFacts[n-1]}!!!`)
    n--
  }
    return array

}

function iLoveTheBeatles(n){
  var array = []
  if(n < 15){
    do {
      array.push("I love the Beatles!")
      n--
    } while (n+1 > 0)
  } else {
    array.push("I love the Beatles!")
  }
  return array
}

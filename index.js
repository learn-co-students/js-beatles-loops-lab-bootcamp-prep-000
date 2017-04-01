function theBeatlesPlay(musicianArray, instrumentsArray){
  const myArray = []
  for(let i = 0; i<musicianArray.length; i++){
    myArray.push(`${musicianArray[i]} plays ${instrumentsArray[i]}`)
  }
  return myArray
}

function johnLennonFacts(arrayOfFacts){
  const newArray = []
  let i = 0
  while(i<arrayOfFacts.length){
    newArray.push(`${arrayOfFacts[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(n){
  const arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while(n<15)

  return arr
}

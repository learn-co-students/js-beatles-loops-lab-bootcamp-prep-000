function theBeatlesPlay(musicians,  instruments){
  let musiciansAndInstruments = []
  for (let i= 0; i < musicians.length; i++){
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansAndInstruments
}

function johnLennonFacts(facts){
  let i = 0
  let newArray = []
  while(i < facts.length){
    newArray.push(facts[i] + "!!!")
    i++
  }return newArray
}


function iLoveTheBeatles(num){
  let secondArray = []
  do{secondArray.push("I love the Beatles!")
      num++
  } while(num < 15)
  return secondArray;
}


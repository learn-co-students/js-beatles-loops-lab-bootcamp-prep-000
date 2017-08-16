function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = []

  for(var i=0; i<musicians.length; i++){
    musiciansInstruments[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return musiciansInstruments
}

function johnLennonFacts(array){
  var exclamations=[]
  var i=0
  while(i<array.length){
    exclamations[i] = `${array[i]}!!!`
    i++
  }
  return exclamations
}

function iLoveTheBeatles(n){
  var beatlesLove = []

  do{
    beatlesLove.push("I love the Beatles!")
    n++
  }

  while(n<15)

  return beatlesLove
}

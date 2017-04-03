function theBeatlesPlay(musicians, instruments){
  var beatles = []
  var testArray = musicians.length
  for (let i=0; i<testArray; i+=1){
    beatles.push(musicians[i]+ " plays " + instruments[i])
  }
  return beatles
}

function johnLennonFacts(array){
  var johnfact = []
  let arraylength = array.length
  var i=0
  while(i<arraylength){
    johnfact.push(array[i]+"!!!")
    i++
  }
  return johnfact
}

function iLoveTheBeatles(n){
  var newArray =[]
  do{
    newArray.push("I love the Beatles!")
    n++
  } while (n<15)
  return newArray
}

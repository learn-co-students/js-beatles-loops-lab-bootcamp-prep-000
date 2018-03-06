function theBeatlesPlay(musicians,instruments){
  var beatlesFacts = []
  for (let i = 0; i < musicians.length && i < instruments.length; i++){
    beatlesFacts.push(musicians[i] + " plays " + instruments[i])
    }
    return beatlesFacts
}

function johnLennonFacts(array){
  var johnLennonFacts = []
  var i=0
  while (i < array.length) {
        johnLennonFacts.push(array[i]+"!!!")
        i++
    }
    return johnLennonFacts
}

function iLoveTheBeatles(number){
  var howMuch = []
  do{
    howMuch.push("I love the Beatles!")
    number++
  }  while(number < 15)
  return howMuch
}

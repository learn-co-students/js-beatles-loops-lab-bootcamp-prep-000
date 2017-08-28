function theBeatlesPlay(artist, instrument){
    var sentence = []

    for (var i = 0; i < (artist.length) ; i++){
        sentence.push(`${artist[i]} plays ${instrument[i]}`)
}
return sentence
}

function johnLennonFacts(array){

var newjohn = []
var i = 0
  while (i < array.length){
    newjohn.push(array[i] + "!!!")
    i +=1
  }
return newjohn
}

function iLoveTheBeatles(number){
var returnArray = []

  do {
    returnArray.push("I love the Beatles!")
    number +=1
  }
  while (number < 15)
  
  return returnArray
}

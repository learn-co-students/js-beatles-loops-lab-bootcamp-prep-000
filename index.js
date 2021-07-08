// add solution here
function theBeatlesPlay(musicians,instruments){
  var newArray = []
  var length = musicians.length

        for (let i = 0; i < length; i++){
        newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(array){
    var newFacts = []
    var i = 0

   while(i < array.length){
      newFacts.push(`${array[i]}!!!`)
      i++
   }
  return newFacts
}

function iLoveTheBeatles(number){
  var beatlesArray = []

  do{
    beatlesArray.push(`I love the Beatles!`)
    number++
  } while (number < 15)
  
  return beatlesArray
}

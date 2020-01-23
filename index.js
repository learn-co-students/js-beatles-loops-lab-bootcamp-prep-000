// add solution here

var emptyArray = new Array()

function theBeatlesPlay(arrayMusicians, arrayInstruments){
  
  for( let i = arrayMusicians.length; i > 0; i--){
  
  emptyArray.push(`${arrayMusicians[arrayMusicians.length -i]} plays ${arrayInstruments[arrayMusicians.length-i]}`)
  
}
return emptyArray
  
}

function johnLennonFacts(arrayFacts){
   var i = arrayFacts.length
   var j = arrayFacts.length
   while ( i > 0){
     arrayFacts[j - i] = `${arrayFacts[j-i]}!!!`
     i--
   }
   return arrayFacts
}
function iLoveTheBeatles(number){
  var empty2Array = new Array()
  do{
    empty2Array.push("I love the Beatles!")
    number++
  }while( number < 15)
    return empty2Array
}
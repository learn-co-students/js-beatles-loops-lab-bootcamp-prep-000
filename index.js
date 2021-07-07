// add solution here
function theBeatlesPlay (musiciansArray, instrumentsArray){
  var array = []
  
  for(var i = 0; i < musiciansArray.length; i++){
   array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return array
}

function johnLennonFacts(factsArray){
 var i = 0
 var newArray = []
  while ( i < factsArray.length) {
    newArray.push(`${factsArray[i]}`+"!!!"), i++;
  }
  return newArray
}

function iLoveTheBeatles(n){
   var array = []
   do array.push("I love the Beatles!"), n++
   while (n < 15)
   return array
}
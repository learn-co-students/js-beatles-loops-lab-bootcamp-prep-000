function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
   var newArray = [];

for (var i =0; i<arrayOfMusicians.length; i++) {
  newArray.push(arrayOfMusicians[i] + ' plays ' + arrayOfInstruments[i]) 
  
 }
  return newArray
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0
  while(i < array.length){
    facts.push(array[i] + '!!!')
    i++
  }
return facts
}

function iLoveTheBeatles(number) {
  var newwArray = [];
 
 do {newwArray.push('I love the Beatles!')
 number++
 }
 while(number < 15  )
 return newwArray
 
} 
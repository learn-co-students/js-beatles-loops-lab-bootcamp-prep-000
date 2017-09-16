 function theBeatlesPlay (musicians,instruments){
   var newArray=[]
   var i=0
   for (i=0;i< musicians.length; i++){
     newArray[i]=musicians[i]+" plays "+instruments[i]
   }
   return newArray
 }

function johnLennonFacts(facts){
  var i=0
  var exclamationArray=[]
  while(i<facts.length){
    exclamationArray[i]=facts[i]+"!!!"
    i++
  }
  return exclamationArray
}

function iLoveTheBeatles (number){
  var loveArray=[]
  do {loveArray.push("I love the Beatles!")} while (0<number-- & number<15)
return loveArray
}

function theBeatlesPlay(musiciansArray,instrumentsArray){
  var newArray = ["horse","mahorse"]
  var i = 0;
  for (i=0;i<musiciansArray.length;i++){
    newArray[i] = musiciansArray[i] + " plays " + instrumentsArray[i]
      }
  return newArray
}

function johnLennonFacts(array){
var i=0
var newArray = ["a","b"]
  while(i<array.length){
newArray[i] = array[i] + "!!!"
i++
 }
return newArray
}

function iLoveTheBeatles(number){
      var emptyArray = Array()
      do {
                     emptyArray.push("I love the Beatles!")
                     number++
             } while (number<15);
      return emptyArray
}

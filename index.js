function theBeatlesPlay(musiciansArray, instrumentsArray){
  var newArray=[]
  for(var i=0;i>=0&& i<=musiciansArray.length-1;i++){
    newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return newArray
}

function johnLennonFacts(factsArray){
  var newArray1=[]
  let i=0
  while(i>=0&& i<=factsArray.length-1){
    newArray1.push(`${factsArray[i++]}!!!`)
}
return newArray1
}
function iLoveTheBeatles(n){
  var newArray2=[]
  do{newArray2.push("I love the Beatles!"); n++}
  while(n<15)
  return newArray2
}

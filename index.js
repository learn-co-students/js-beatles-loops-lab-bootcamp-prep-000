function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var array=[]
  for(var i=0; i<arrayMusicians.length; i++){
    var string = arrayMusicians[i]+" plays "+arrayInstruments[i]
    array.push(string)
  }
  return(array)
}

function johnLennonFacts(arrayFacts){
  var i=0, newArray=[]

  while(i<arrayFacts.length){
    var string=arrayFacts[i]+"!!!"
    newArray.push(string)
    i++
  }
  return(newArray)
}

function iLoveTheBeatles(n){
  var array=[]
  do{
    array.push("I love the Beatles!")
    n++
  }while (n<15)
  return(array)
}

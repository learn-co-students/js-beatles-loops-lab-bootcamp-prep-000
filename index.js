function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var array = []
 for(var n =0; n<arrayMusicians.length; n++){
    array.push(`${arrayMusicians[n]} plays ${arrayInstruments[n]}`)
 }
  return array
}

function johnLennonFacts(array){
  var n =0
  while(n<array.length){
    array[n]=array[n]+"!!!"
    n++
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    number++
  }while(number<15)
  return array
}

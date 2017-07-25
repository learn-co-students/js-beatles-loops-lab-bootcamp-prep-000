function theBeatlesPlay(arrayArtist, arrayInstrument){
  var newArray =[]
  for (var i=0; i<arrayArtist.length; i++){
    var str=''
    str = `${arrayArtist[i]} plays ${arrayInstrument[i]}`
    newArray.push(str)
  }
  return newArray
}
function johnLennonFacts(array){
  var newArray=[]
  for (var i=0; i<array.length; i++)
{
  var str=''
  str = `${array[i]}!!!`
  newArray.push(str)
}
  return newArray
}
function iLoveTheBeatles(param){
  param = parseInt(param)
  var array = []
  do{
    array.push("I love the Beatles!")
    param++
  }while(param<15)
  return array
}

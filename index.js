function theBeatlesPlay(musicArr, instrumentArr){
  var arr = []

  for(var x = 0; x < musicArr.length; x++){
    arr[x] = musicArr[x] + " plays " + instrumentArr[x]
  }
  return arr
}

function johnLennonFacts(factArr){
  var updatedArr = []

  var counter = 0
  while (counter < factArr.length){
    updatedArr[counter] = factArr[counter] + "!!!"
    counter++
  }
  return updatedArr
}

function iLoveTheBeatles(num){
  var arr = []
  do{
    arr.push("I love the Beatles!")
    num++
  }while(num < 15);

  return arr
}

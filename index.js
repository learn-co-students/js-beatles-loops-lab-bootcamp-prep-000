function theBeatlesPlay(musicians,instruments){
  var storage = []
  for(var i=0;i<musicians.length;i++){
    storage.push(musicians[i] + " plays " + instruments[i])
  }
  return storage
}

function johnLennonFacts(array){
  var counter = 0;
  while(counter < array.length){
    array[counter] += "!!!"
    counter++
  }
  return array
}

function iLoveTheBeatles(num){
  var storage = []
  do{
    storage.push("I love the Beatles!")
    num++
  } while(num <15);

  return storage
}

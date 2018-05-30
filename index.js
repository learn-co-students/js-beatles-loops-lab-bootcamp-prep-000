function theBeatlesPlay(artist,instrument){
  var emptyArr =[];
  for(var i=0; i< artist.length; i++){
    emptyArr[i]=artist[i] +" plays "+ instrument[i]
  }
  
  return emptyArr
}

function johnLennonFacts(array){
  var i=0;
  while(i<array.length){
    array[i]= array[i]+"!!!"
    i++
  }
  
  return array;
}

function iLoveTheBeatles(n){
  var emptyArr =[];
  
  do{
    
    emptyArr.push("I love the Beatles!")
    n++
  } while(n<15)
  
  return emptyArr
}
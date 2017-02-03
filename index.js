function theBeatlesPlay(musicians,instruments){
  var newarray = []
  for(let i = 0; i < musicians.length; i++ ){
    newarray.push( musicians[i]+" plays " + instruments[i])
  }
  return newarray
}

function johnLennonFacts(facts){
  var i = 0
  var newfactsarray = []
  while(newfactsarray.length < facts.length){
    newfactsarray.push(facts[i]+"!!!")
    i++
  }
  return newfactsarray
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!")
  }while (array.length<n+1 && n<15)
  return array 
}
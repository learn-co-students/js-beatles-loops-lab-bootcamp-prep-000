function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i=0; i<instruments.length; i++){
        array.push(musicians[i]+" plays "+instruments[i])
    }
  return array
}

function johnLennonFacts(fact){
  var i=0
  var array=[]
  while(i<fact.length){
    array.push(fact[i]+"!!!")
    i++
  }
  return array
}


function iLoveTheBeatles(number){
  var array = []
  var i=0
  do{
    array.push("I love the Beatles!")
    i++
    console.log(i)
    if (number>=15){
      break
    }
  } while (i<number+1)
  return array
}

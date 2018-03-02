function theBeatlesPlay(musician, inst){
  var newArray = []
  
    for (let i=0;i<musician.length;i++){
      newArray.push(`${musician[i]} plays ${inst[i]}`)
    }
  
  return newArray
}

function johnLennonFacts(array){
  let i=(array.length-1)
  while (i>=0) {
    array[i]=array[i]+"!!!"
    i--
  }
  return array
}

function iLoveTheBeatles(num){
  var newArray = []
      do {
        newArray.push("I love the Beatles!")
          if (num>=15){
            num =0
          } 
          num--
        
      } while(num>=0 )
  
  
  return newArray
}
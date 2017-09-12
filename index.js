function theBeatlesPlay(musicians, instruments){
  let band =[]
  for(let i = 0; i < musicians.length; i++){
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(array){
  let i = 0
  while(i < array.length){
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  let array = []
  do{
    array.push("I love the Beatles!")
    n++
  }
  while(n < 15)
  return array
}

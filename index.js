function theBeatlesPlay(musicians, instruments){
  let array = [] 
  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(facts){
  const array = [];
  let x = 0
  while (facts.length > x){
    array.push(`${facts[x]}!!!`)
    x++
  }
  return (array)
}
///the x is also the index to access each element in the array.*facts array, 
function iLoveTheBeatles(num){
  const array = []
  let y= 15
  do { 
    array.push(`I love the Beatles!`)
      num++
  } while (num < y)
  return (array)
}
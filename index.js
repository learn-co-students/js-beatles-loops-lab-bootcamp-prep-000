function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (let i = 0; i < musicians.length ; i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
} 
function johnLennonFacts(facts){
  var newArray = []
  var i = 0
  while (i<facts.length){
   newArray.push(`${facts[i]}!!!`)
   i++
  }
  return newArray
}
 function iLoveTheBeatles(num){
  var last=[]
  var i = 0
   if (num > 15){
     last.push("I love the Beatles!")
   }
   else {
  do { i++ 
    console.log(last.push("I love the Beatles!"))
  }
  while (i < 15 - num)
     
   }
  return last
  }

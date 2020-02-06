function theBeatlesPlay(musicians, instruments){
  let n = []
  for(var i = 0; i < musicians.length; i++){
    n.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return n
}

function johnLennonFacts(array){
  let facts = []
  let i = 0
  while (i < array.length){
    facts.push(`${array[i]}!!!`)
    i++
  }
  return facts
}


// function johnLennonFacts(array){
//   while (array){
//     if (array){
//       [array.push]
//     }
//     else {
//       return [array.push]
//     }
//   }
//   return [array.push]
// }


function iLoveTheBeatles(num){
  let e = [];
  
  do {
    e.push("I love the Beatles!");
    num++
  } 
  while(num < 15);
  return e
}
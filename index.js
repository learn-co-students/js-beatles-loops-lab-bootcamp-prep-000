// add solution here
function theBeatlesPlay(mus, inst) {
  var arr1 = []
  for ( var counter = 0; counter < mus.length ; counter++) { 
    arr1.push(`${mus[counter]} plays ${inst[counter]}`)
}
   return arr1
}


function johnLennonFacts(factsA) {
  var count = 0
  var arr1 = []
  while ( count < factsA.length ) {
    arr1.push(`${factsA[count]}!!!`)
    count++
}
   return arr1
}


function iLoveTheBeatles(n){
  var arr1 = []
  do {arr1.push("I love the Beatles!")
    n++
  } 
  while (n < 15)
  return arr1
}





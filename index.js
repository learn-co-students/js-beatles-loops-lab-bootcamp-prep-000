// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr1 = []
  for (var a = 0; a < musicians.length; a++){
    arr1.push(`${musicians[a]} plays ${instruments[a]}`)
  }
  return arr1
}

function johnLennonFacts(facts){
  var arr2 = []
  var counter = 0
  while (counter < facts.length){
    arr2.push(`${facts[counter]}!!!`)
    counter++
  }
  return arr2
}

function iLoveTheBeatles(count){
  var arr3 = []
  var i = 0
    do {
      arr3.push("I love the Beatles!")
      i++
      }
    while(i < 15-count);
    return arr3
}

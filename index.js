// add solution here

function theBeatlesPlay(musicians,instruments){
  var newArray = []
  for(var i =0; i<musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var newArrayTwo = []
  var i = 0
  while (i<facts.length){
  newArrayTwo.push(`${facts[i]}!!!`)
  i++
  }
return newArrayTwo
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
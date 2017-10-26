function theBeatlesPlay(musicians,instruments){
  var theyPlay = [];
  for (var i = 0; i <= (musicians.length - 1); i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay
}

function johnLennonFacts(facts){
  var n = 0
  var newArray = []
  while (n < facts.length){
    newArray.push(facts[n]+"!!!")
    n++
  }
  return newArray
}

function iLoveTheBeatles(number){
  var array= [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15)
  return array
}

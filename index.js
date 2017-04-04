var theBeatlesPlay = function(musicians, instruments) {
  let array = []
  for (let i = 0; i < musicians.length; i++){
    let string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}

var johnLennonFacts = function(facts) {
  let counter = 0
  let array = []
  while (counter < facts.length) {
    let newFact = facts[counter] + "!!!"
    array.push(newFact)
    counter++
  }
  return array
}

var iLoveTheBeatles = function(number) {
  let array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return array
}

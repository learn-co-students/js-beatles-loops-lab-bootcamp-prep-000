var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians,instruments) {
  const myArray = [];

  for (let i = 0; i < musicians.length; i++) {
  myArray.push(`${musicians[i]} plays ${instruments[i]}`)
}

return myArray

}


var facts = ["Fact 1","Fact 2","Fact 3","Fact 4"]

function johnLennonFacts(facts) {

  const factsOutput = [];

  let i = 0
  while (i < facts.length) {
    factsOutput.push(`${facts[i]}!!!`)
    i++
  }
  return factsOutput
}

function iLoveTheBeatles(n) {
  const loveArray = [];

  do {
      loveArray.push("I love the Beatles!")
      n++;
  } while (n < 15);

  return loveArray
}

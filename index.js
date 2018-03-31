function theBeatlesPlay(musician, instrument) {
  var empty = []
  var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  for (let i=0; i<4; i++) {
    if (i===0)
    empty.push(`${musician [0]} plays ${instrument[0]}`)
    if (i===1)
    empty.push(`${musician [1]} plays ${instrument[1]}`)
    if (i===2)
    empty.push(`${musician [2]} plays ${instrument[2]}`)
    if (i===3)
    empty.push(`${musician [3]} plays ${instrument[3]}`)
  }
  return empty;
}

function johnLennonFacts(facts) {

  var i = 0

  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
return facts;
}

function iLoveTheBeatles(number) {
  // Create a function iLoveTheBeatles which accepts a number as a parameter.
  // The body of the function should create a variable that stores an empty array.
  // Then, implement a do-while loop inside the function that adds "I love the Beatles!"
  // to the empty array. Then the loop should increment the number passed in as a parameter.
  // The condition of the loop should check to see that the parameter number is less than 15.
  // The function should return the array with the strings "I love the Beatles!".
  var empty =[]
  do {
    empty.push("I love the Beatles!");
    number++;
  } while (number<15);
  return empty;
}

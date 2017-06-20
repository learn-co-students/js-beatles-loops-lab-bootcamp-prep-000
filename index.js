function theBeatlesPlay(musicians, instruments) {  //two parameters
  const arr = []                                   //empty array called arr

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)  //musicians0 with instruments0 and so on
  }

  return arr
}

function johnLennonFacts(facts) {
  const theFacts = []                            //theFacts is name of array
  let i = 0                                      //initialize
  while (i < facts.length) {                    //while i is less then length of facts in array
    theFacts.push( `${facts[i]}!!!`)            //push facts with !!! into array theFacts
    i++                                         //iterate
  }
  return theFacts                              //return complete array theFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
      arr.push('I love the Beatles!')           //add to array "I love the Beatles!"
      n++                                     //increment number
  } while (n < 15)                         //while the number is less then 15
                                         //
  return arr
}

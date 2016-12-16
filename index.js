function theBeatlesPlay(musicians, instruments){
  var myArray = []
  for(let i  = 0; i < musicians.length; i++){
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
}
function johnLennonFacts(facts){
  for(let i = 0; i < facts.length; i++){
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}
function iLoveTheBeatles(n){
  var myArray = []
  do{
    myArray.push("I love the Beatles!")
    n++;
  }while(n < 15)
  return myArray
}

/*
+ Create a function `iLoveTheBeatles` which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds
`"I love the Beatles!"` to the empty array. Then the loop should increment
the number passed in as a parameter. The condition of the loop should check to
see that the parameter number is less than `15`. The function should return the
array with the strings `"I love the Beatles!"`.
*/

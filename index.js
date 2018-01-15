function theBeatlesPlay (musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var count = 0;
  var array = []
  while (count < facts.length){
    array.push (`${facts[count]}!!!`)
    count++
  }
  return array
}

function iLoveTheBeatles(number){
 var array = []
  do{
    array.push (`I love the Beatles!`)
    number++
  } while (number < 15)
  return array
}

//Create a function iLoveTheBeatles which accepts a number as a parameter. `>>
// The body of the function should create a variable that stores an empty array. >>
// Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array. >>
// Then the loop should increment the number passed in as a parameter.
// The condition of the loop should check to see that the parameter number is less than 15.
// The function should return the array with the strings "I love the Beatles!".

function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var counter = 0
  while (counter < array.length) {
    array[counter] = array[counter] + "!!!"
    counter++
  }
  return array
}

/*
Then, implement a do-while loop inside the function
that adds "I love the Beatles!" to the empty array.

Then the loop should increment the number passed in
as a parameter. The condition of the loop should
check to see that the parameter number is less than
15. The function should return the array with the
strings "I love the Beatles!".
*/

function iLoveTheBeatles(number) {
  var array = []

  do {
    array.push("I love the Beatles!")
  } while (number < 15 && array.length <= number) {
    --number
  }
  return array
}

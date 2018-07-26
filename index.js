// add solution here


//Create a function theBeatlesPlay, which accepts two parameters- an array of musicians and an array of instruments.
function theBeatlesPlay(musicians, instruments) {
//The body of the function should create an empty array stored in a variable.
  var array = []

//The function should also contain a for loop which loops over the array of musicians. You will want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is).
  for (var i=0; m=musicians.length; i<m; i++) {

//The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar".
//This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array. 
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

//The function should return the array of new strings.
return array
}

// function theBeatlesPlay(musicians, instruments) {
//   const arr = []

//   for (let i = 0, l = musicians.length; i < l; i++) {
//     arr.push(`${musicians[i]} plays ${instruments[i]}`)
//   }

//   return arr
// }







// function johnLennonFacts() {
  
// }
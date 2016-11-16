//create a function theBeatlesPlay that accepts two parameters-an array of
//musicians and instruments. the body stores an empty array stored in a variable.
//the function contains a for loop
function theBeatlesPlay(musicians,instruments) {
  var emptyArray = []
  for(let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return emptyArray
}

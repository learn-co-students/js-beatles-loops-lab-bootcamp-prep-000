/* 
1. Declare a function named theBeatlesPlay
2. Function accepts 2 parameter named musicians, instruments, whose values are strings. 
3. When call function, return array of new strings
*/
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for(var i=0;i<musicians.length;i++){ 
    var whoPlaysWhat = musicians[i]+' plays '+instruments[i]
    emptyArray.push(whoPlaysWhat)
  }
  return emptyArray
}

/* 
1. Declare a function named johnLennonFacts
2. Function accepts parameter named facts, whose value is string. 
3. Use a while loop to loop over the facts array and add "!!!" to the end of every fact. 
4. The function should return an array of strings with exclamation points.
*/
function johnLennonFacts(facts){  //Function accepts one argument
  var i = 0 //Declare iterator
  while (i < facts.length){ //Iterate range of elements in argument
    facts[i] = facts[i]+'!!!' //appends exclamation points
    i++ // Add one to counter/iterator
  }
  return facts
}

/* 
1. Declare a function named iLoveTheBeatles.
2. Function accepts parameter named x , whose value is number.
3. When call function, return array with the strings "I love the Beatles!".
*/
function iLoveTheBeatles(x){
  var parameter = Number(x) // Makes parameter a number
  var counter = 0 // Make a counter
  var loveThemToo = [] // Create blank array
  do{
    loveThemToo.push('I love the Beatles!') //Append a string to array
    counter++
  }
  while(counter <= parameter && parameter < 15) //Checks to see if counter is equal or less than parameter, and if parameter is less than 15
  return loveThemToo //returns precious product

}

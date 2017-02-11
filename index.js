function theBeatlesPlay(musicians, instruments) {
  //create new array to hold the strings being created
  var newArray = []
  //for loop to iterate through the musicians array
  for (var i = 0; i < musicians.length; i++) {
    //can place EXACTLY what you want return in the push(). In this test its the string combining the arguments.
    newArray.push( musicians[i] + ' plays ' + instruments[i] )
  }
  return newArray
}


function johnLennonFacts(arrayOfFacts) {
  // create array to store combining of array and string
  var shoutedFacts = []
  // create the 'i' iterater outside the 'while' loop
  var i = 0
  // as long as arrayOfFacts is it will push one to the new 'shoutedFacts' array with '!!!' at the end
  while (i < arrayOfFacts.length) {
    shoutedFacts.push(arrayOfFacts[i] + '!!!')
    //need i++ to go through again and push the next one into the new array
    i++
  }
    // returns the new shoutedFacts array.
      return shoutedFacts
}



function iLoveTheBeatles(n) {
  //create new array to store items
  var emptyArray = []
  // What we put in the  'do' will run once before executing code.
  do {
    //pushing 'I love the beatles to the new array'
    emptyArray.push('I love the Beatles!')
    //getting the passed in number and adding '1' to it.
    n++
    //as long as the passed in numbee is less than stated (15) the loop will continue to run, adding 'I love beatles'
  }while (n < 15);
  // once finished , return the new array
  return emptyArray
}

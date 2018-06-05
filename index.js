//DONE Create a function theBeatlesPlay, 

    //DONE which accepts two parameters- an array of musicians and an array of instruments. 
    
//DONE The body of the function should create an empty array stored in a variable. 

//DONE The function should also contain a for loop which loops over the array of musicians. 

    //DONE You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is). 
    
//DONE The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar". 

//DONE This string should be added to the empty array you created. 

//DONE The loop should make the same sentence for every member of the musicians array. 

//DONE The function should return the array of new strings.


function theBeatlesPlay(musicians, instruments) {
  var newMusicians = []
  for (var i = 0; i < musicians.length; i++) {
    newMusicians.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newMusicians
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//DONE Create a function johnLennonFacts. 

//DONE This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):

//DONE Use a while loop to loop over the facts array and add "!!!" to the end of every fact. 

//DONE The function should return an array of strings with exclamation points



function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//DONE Create a function iLoveTheBeatles which accepts a number as a parameter. 

//DONE The body of the function should create a variable that stores an empty array. 

//DONE Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array. 

//DONE Then the loop should increment the number passed in as a parameter.

//DONE The condition of the loop should check to see that the parameter number is less than 15. 

//DONE The function should return the array with the strings "I love the Beatles!".





function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    number++
  } while (number < 15)
  return empty
}







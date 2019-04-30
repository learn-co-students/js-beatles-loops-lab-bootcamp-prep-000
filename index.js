// Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.
// Create a variable with an empty array.
// Use a for loop, which iterates over the array. of musicians. Be careful about what value you set your counter variable to store.
//(Hint: Think about what the first index of an array is).
// The first time through the loop, it should create a string using the first index of the musicians array
//and the first index of the instruments array: "John Lennon plays guitar".
// Add this string to the empty array you created. The loop should make the same sentence for every member of the musicians array.
// The function should return the array of new strings containing what instruments each musician plays.
function theBeatlesPlay(musicians, instruments){
  let band=[];
  for (let i=0; i<musicians.length; i++){
       band.push(musicians[i] + " plays " + instruments[i]);
    }

  return band;
}
//Create a function johnLennonFacts.
//This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):
//Use a while loop to loop over the facts array and add "!!!" to the end of every fact.
//Return an array of strings with exclamation points.

function johnLennonFacts(facts){
let i=0;
let array=[];
  while (facts.length>i){
    array.push(facts[i] + "!!!");
       i++;
  }
  return array;
}
//Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
//Create a function iLoveTheBeatles which accepts a number as a parameter.
//The function should create a variable that stores an empty array.
//Implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
//The loop should then increment the number passed in as a parameter.
//The condition of the loop should check to see that the parameter number is less than 15.
//It should contain a number of strings that represents the difference between the input number and 15.
//Return the array with the strings "I love the Beatles!".
function iLoveTheBeatles (num){
  let array= [];
  let i= num;
  do {
    array.push("I love the Beatles!")
  } while  (num<15){
    array.push("I love the Beatles!")
    i++
  }
  return array;
}

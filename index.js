function theBeatlesPlay(musicians, instruments){ // function with two parameters (two arrays)
  var play = [];  // create an empty array to store to combo of musicians and instruments arrays
  for (var i = 0; i < musicians.length; i++){ // for loop sees if i is less than the length of the array, if true, add a string to the new array
    play.push(musicians[i] + " plays " + instruments[i]); //pushes a position from the musicians array and the instruments array. Then combines them.
  }
  return play // return the array
}
function johnLennonFacts(facts){  // function has takes one array and add exclimation points at the end of each string
  var i = 0; // this is to start the while loop at 0
  while(i < facts.length){ // while loop goes through the facts array until i equals the length of the array
     //for position i the loop adds !!! to the end of the array
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}
function iLoveTheBeatles(n) { // function iLoveTheBeatles takes a number as a parameter
var Beatles = [];  //  creates a variable that stores an empty array
do{ // do-while loop inside the function that adds `"I love the Beatles!"` to the empty array.
  Beatles.push("I love the Beatles!")
  n++ // the loop increments the number as a parameter
} while (n < 15); // loop checks that parameter is less than 15
return Beatles; //Returns the new array with "I love the Beatles!" strings
}


// var i = 0;
// while(i < musicians.length) {
//   play.push(musicians[i] + " plays " + instruments[i]);
//   i++;
// }
// for (var i = 0; i < musicians.length; i++){
//   play.push(musicians[i] + " plays " + instruments[i]);
// }
// musicians.map(function(musician, i){
//   return `${musician} plays ${instruments[i]}`;
// });
// var i = 0;
// do {
//   play.push(musicians[i] + " plays " + instruments[i]);
//   i++;
// } while(i < musicians.length)

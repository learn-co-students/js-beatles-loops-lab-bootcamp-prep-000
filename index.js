/* Create a function `theBeatlesPlay`, which accepts two parameters- an array of
musicians and an array of instruments. The body of the function should create an
empty array stored in a variable. The function should also contain a for loop
which loops over the array of musicians. You'll want to be careful about what
value you set your counter variable to store. (Hint: Think about what the first
index of an array is). The first time through the loop, the body of the loop
should create a string using the first index of the musicians array and the
first index of the instruments array: `"John Lennon plays guitar"`. This string
should be added to the empty array you created. The loop should make the same
sentence for every member of the musicians array. The function should return the
array of new strings. */
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

  /*Create a function `johnLennonFacts`. This function will accept one argument, an
array of facts about John Lennon (note that it might not be exactly the
following facts):Use a while loop to loop over the facts array and add "!!!" to the end of every fact.
Return an array of strings with exclamation points.
 /* "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];*/ 


function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

/*Create a function iLoveTheBeatles which accepts a number as a parameter.
The function should create a variable that stores an empty array.
Implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
The loop should then increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. It should contain a number of strings that represents the difference between the input number and 15.
Return the array with the strings "I love the Beatles!".*/

 function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
 }
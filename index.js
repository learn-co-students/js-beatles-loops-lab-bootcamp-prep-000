/*+ Create a function `theBeatlesPlay`, which accepts two parameters- an array of musicians and an array of instruments. 
The body of the function should create an empty array stored in a variable. 
The function should also contain a for loop which loops over the array of musicians. 
You'll want to be careful about what value you set your counter variable to store. 
(Hint: Think about what the first index of an array is). 
The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: `"John Lennon plays guitar"`. 
This string should be added to the empty array you created. 
The loop should make the same sentence for every member of the musicians array. 
The function should return the array of new strings.*/

function theBeatlesPlay(M_array, I_array){
  var array = [];
  for (var i =0; i < M_array.length; i++){
    var string = M_array[i] + " plays " + I_array[i];
    array.push(string);
  }
  return array;
}

function johnLennonFacts(array){
  for (var i = 0; i < array.length; i++){
    array[i] += "!!!";
  }
  return array;
}

/*
+ Create a function `iLoveTheBeatles` which accepts a number as a parameter. 
  The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds `"I love the Beatles!"` to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than `15`. The function should return the array with the strings `"I love the Beatles!"`.
*/

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return array;
}






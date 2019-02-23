function theBeatlesPlay(musicians,instruments) {
  var nothing = []
  for (var i = 0; i < musicians.length; i++) {
    nothing.push(musicians[i] + ' plays ' + instruments[i])
  }
  return nothing;
}

// "nothing" is the name of the array thats empty.
// counter variable i is set to 0 since that is the first index of an array. 
// the aim of this is to link the musicians with their instruments. hence why the conditoin of the for loop is i less than the lenth of the array of musicians. since one all musicians are linked with an instrument it is done.
// "i++"" is the iteration to incrementing loop.
// "nothing.push" - by using the push function this allows us to add a element to out empty array "nothing". note - the push fuction is destructive.
// inside the parentheses for the push we have the sentence that we want to be output.
// finailly we as it to return the array called "nothing" which so no longer be empty. 


 function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

// we asked to create a "while loop" function called johnLennonFacts. which will take an arguement called "array" inside its parentheses.
// again using the variable i starting from 0 since that the begining of the index.
// now starting the while loop which follows the format of "while ([condition]) { [loopBody];}" 
// so firstly we have the condition inide of the parentheses. as the loop can only be executed i times which must be lest than the lenth of the array(which will be the list of facts).
// next we have the loopbody:which as requested will add "!!!" to the end of each fact in our array. This array we did not have to create out self but would contain a list of facts about john.
// and to finally return the array with the updates to the facts 



 function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}

// firstly asked to create a function called iLoveTheBeatles that takes the arguement(parameter) "number".
//next to have a variable with contains an empty array which we call "arr".
//within the function iLoveTheBeatles we will implement a "do-while loop". 
//"do-while loops" follow the formate of:"do { [loopBody]; } while ([condition])" 
//in the "do" part we want the function to print the string "I love the Beatles!" we do this by using the .push function.
// the "while" condition gives that i must be less thank or equal to number and number which both must be less than 15.
// and to return the string in the arr
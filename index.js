// add solution here

function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for ( let i = 0; i < musicians.length; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  } return array;
}


function johnLennonFacts(arr) { //declare function give arr
  var result= []; //create empty array to store result
  var i = 0;  //set strating index value
  while(i < arr.length) { //sets condition to end when index gets to end of string but using the length method on arr
    result.push(arr[i] + '!!!'); // push method on result, arr of index and concatenation
    i++; // incrementation
  }
  return result; 
}

function iLoveTheBeatles(number) { 
  
  let newArray = []; 
  do {
    newArray.push(`I love the Beatles!`); //this will happen one time, whether or not number meets condition below
    number++; //increment number of times string above is pushed into newArray
  } while (number < 15); //(that number subracted from 15 will be the output number of times the string is logged); 

  return newArray; // this needs to be outside the loop, otherwise only first item will be returned
}




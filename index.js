// add solution here
var musiArr = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instArr = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musiArr, instArr){
  var newArr = [];
  // for loop which loops over the array of musicians.
  
  //create a string using the first index of the musicians array 
  //and the first index of the instruments array
 for (var i = 0; i < musiArr.length && i < instArr.length; i++) {
    //This string should be added to the empty array you created.
    var combiStr = musiArr[i] + " plays " + instArr[i]
    newArr.push(combiStr)
  }

  //returns an array of strings containing what instruments eachmusician plays
  return newArr
}

var factsArr = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(factsArr){
  var i = 0;
  var n = factsArr.length
  while (i < n) {
    factsArr[i] = factsArr[i] + "!!!";
    i++;
  }
  return factsArr
}



// function iLoveTheBeatles(num){
//   var empArr = [];
//   var text = "I love the Beatles!"
//   var i = 0;
//   //dowhileloop that adds "I love the Beatles!" to the empty array. 
//   //Then the loop should increment the number passed in as a parameter. 
//   //Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
//   do {
//     empArr[num] = text 
//     --num
//   } while (i <= num);
  
//   //The function should return the array with the strings "I love the Beatles!".
//   return empArr
// }


// function iLoveTheBeatles(num){
//   var empArr = [];
//   var text = "I love the Beatles!"
//   //dowhileloop that adds "I love the Beatles!" to the empty array. 
//   //Then the loop should increment the number passed in as a parameter. 
//   do {
//     empArr.push(text)
//     num++ 
//   } while ( num === 17);
  
//   //The function should return the array with the strings "I love the Beatles!".
//   return empArr
// }

// function iLoveTheBeatles(num){
//   var empArr = [];
//   var text = "I love the Beatles!"
//   var i = 0
//   //dowhileloop that adds "I love the Beatles!" to the empty array.
//   //Then the loop should increment the number passed in as a parameter.
//   //Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
//   do {
//     empArr[i] = text;
//     ++i;
//   } while ( i <= num)
  
//   //The function should return the array with the strings "I love the Beatles!".
//   return empArr
// }

function iLoveTheBeatles(num){
  var empArr = [];
  //dowhileloop that adds "I love the Beatles!" to the empty array. 
  //Then the loop should increment the number passed in as a parameter. 
  //Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
  do {
    empArr.push("I love the Beatles!");
    ++num;
  } while (num < 15);
  
  //The function should return the array with the strings "I love the Beatles!".
  return empArr
}



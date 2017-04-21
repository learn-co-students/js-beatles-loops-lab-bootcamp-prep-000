function theBeatlesPlay(musicians, instruments){
  var A = [];
  for(let i = 0; i < musicians.length; i++){
    //create a string using the first index of the musicians array
    //and the first index of the instruments array: `"John Lennon plays guitar"`
    var string = `${musicians[i]} plays ${instruments[i]}`;
    A.push(string);
  }
  return A;
}

function johnLennonFacts(array){
  //Use a while loop to loop over the facts array and add `"!!!"` to the end of every fact.
  //The function should return an array of strings with exclamation points.
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
//The function should return the array with the strings `"I love the Beatles!"`.
  var B = [];
  do {
    B.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return B;
}

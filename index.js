function theBeatlesPlay(musicians, instruments) {
  var array = [];
 for (let i = 0; i < musicians.length; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
 }
 return array
}
//needed to make a new array here inside the function
//let and var were interchangeable after for
//musicians length is used because array length is unknown
//array push puts new statment at the end of the array list

function johnLennonFacts(array) {
  var i = 0
  while (i<array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array
}
//array is equal to incremented index statements plus exclaimation points
//facts only run for the duration of the array length
//the final array returns a list of punctuated facts

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!"); number++;
  } while (number < 15);
  return array
}
//empty array is filled with statment in quotations
//number is incremented after each statment as long as the number is <15
//returns an array with the same statment a random number of times but <15
//do while loops wil run at least once

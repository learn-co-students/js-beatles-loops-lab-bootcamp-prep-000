
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i=0;i<musicians.length;i++){
     array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
/*Create a function johnLennonFacts. This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):*/
function johnLennonFacts(facts) {
  var array=[];
  let i = 0;
  while(i<facts.length){
    array.push(facts[i]+`!!!`);
    i++;
  }
  return array;
}
/*Create a function iLoveTheBeatles which accepts a number as a parameter. The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. The function should return the array with the strings "I love the Beatles!".*/
function iLoveTheBeatles(n){
  var array=[];
  do{
    array.push(`I love the Beatles!`)
    n++;
  }while(n<15)
  return array;
}

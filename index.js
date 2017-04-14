function theBeatlesPlay(musician, instrument){
  var empty = []
  for(let i=0; i<4; i++){
    empty.push(musician[i] + ' plays ' + instrument[i]);
  }
  return empty
}

//"for" loop loops over the array of musicians
//loop 1: create a string using the first index of the musicians
//array and the first index of the instruments array: "John Lennon plays guitar"
//add to empty array
//make same sentence for every member of the musicians array
//return array of new strings

function johnLennonFacts(facts){
var empty = [];
var n = 0;
  while(n < facts.length){
    empty.push(facts[n] + '!!!')
    n++ ;
  }
  return empty
}


//create function johnLennonFacts
//accepts an array of fact about john lennon : argument
//while loop loops over facts and adds !!!
//return array

function iLoveTheBeatles(n){
  var empty = [];
  do{
    empty.push("I love the Beatles!");
    n++;
  }
  while(n<15);
  return empty;
}

//function iLoveTheBeatles accepts a number as a parameter
//body creates var that stores empty array
//do while loop that adds "I love the Beatles!" to empty array
//condition: check to see that the number is less than 15
//return array

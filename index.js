//create a function (theBeatlesPlay) with two arguments (musicians and instruments)
function theBeatlesPlay(musicians, instruments){
  //create an empty array to push the two arguments into using const because this value does not change
  const beatles = [];
  /*create a "for loop" that cycles through the musician/instruments array and creates a new array, using let to represent a variable that is modified 
   For loop conditions = statement 1 let i = 0 starts our counter at 0 before the loop runs*/
  for (let i = 0, band = musicians.length; i < band; i++){
    //push the musican/instruments into the new array creating the string (X musican) plays (Y instruments)
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  //return the newly created looped array of musicians and instruments combinations 
  return beatles;
}

//create a function (johnLennonFacts) with one arguments (facts)
function johnLennonFacts(facts){
  //create an empty array to push the arguments into using const because this value does not change
  const johnLennon = [];
  //start the loop counter at 0
  let i = 0;
  //create a while loop that while there are facts it pushes those facts into the new array
  while(i < facts.length) {
    //Add the facts into the new array johnLennon
    johnLennon.push(`${facts[i]}!!!`);
    //increase the counter by one
    i++;
  }
    //return the newly created looped array johnLennonFacts
  return johnLennon;
}

//creating a function iLoveTheBeatles with argument n for numbers
function iLoveTheBeatles(n){
  //create a empty array to push paramater I love the beatles into
  const beatleLove = [];
//create a do love that pushed I love the beatles as long as number is less than 15
//once number is less than 15 stop and return beatleLove  
  do {
    beatleLove.push("I love the Beatles!");
    n++;
  } while ( n < 15);

  return beatleLove;
}

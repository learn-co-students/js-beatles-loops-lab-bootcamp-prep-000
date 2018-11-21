//function which accepts two parameters, an array of musicians
//and an array of instruments
const myArray = [];

function theBeatlesPlay(musicians, instruments){
  for (let i = 0; i < musicians.length; i++){
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray;
}

//a function which accepts an array of facts about John Lennon
//and adds !!! to end the of each statement

var i = 0;

function johnLennonFacts(facts){
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

//a function iLoveTheBeatles which accepts a number as a parameter
//and adds "I love the Beatles" to an empty array

function iLoveTheBeatles(num){
    var someArray = [];
    do {
      someArray.push("I love the Beatles!");
      num++;
    } while(num < 15);
    return someArray;
}

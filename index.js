function theBeatlesPlay (musician, instrument) {
  var myArray = [];
  for (let i = 0; myArray.length < musician.length; i++) {
    myArray.push(musician[i] + " plays " + instrument[i]);
    }
    return myArray;
}

function johnLennonFacts (facts) {
  let x = facts.length - 1;
  
  while (x >= 0) {
    facts[x] = facts[x] + "!!!";
    x--;
  }
  return facts;
}

function iLoveTheBeatles (number) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
      } while (number < 15); 
         return newArray;
}
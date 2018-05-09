function theBeatlesPlay(musicians, instruments){
 var newArray = [];
 for (let i =0; i<musicians.length ;i++) {
   newArray.push(`${musicians[i]} plays ${instruments[i]}`)   
 }
 return newArray
}

function johnLennonFacts(facts){
  let i = 0;
  let newArray = [];
  while(i < facts.length) { 
    newArray.push(`${facts[i]}!!!`)
    i++;
  }
  return newArray
}

function iLoveTheBeatles(number){
    let newArray = [];
    do {
      newArray.push("I love the Beatles!");
      number++;
    } while (number < 15)
    return newArray;
}

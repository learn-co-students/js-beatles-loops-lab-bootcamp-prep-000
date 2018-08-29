//theBeatlesPlay(musicians, instruments)

 function theBeatlesPlay(musicians, instruments) {
   let newArray = [];
   for(let i = 0; i < musicians.length; i++) {
       newArray.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return newArray;
 }


//johnLennonFacts(facts)

function johnLennonFacts(facts) {
  let factsList = [];
  let i = 0;
  while (i < facts.length) {
    factsList.push(`${facts[i]}!!!`);
    i++;
  }
  return factsList;
}


//iLoveTheBeatles(num)

function iLoveTheBeatles(num) {
  let loveArray = [];

  do {
    loveArray.push('I love the Beatles!');
    num++
  } while (num < 15)

  return loveArray;
}

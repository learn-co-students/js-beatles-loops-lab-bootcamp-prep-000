var array = [];

function theBeatlesPlay(musicians, instruments) {
  //var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

// function johnLennonFacts(facts) {
//   for (let i = 0; i < facts.length; i++) {
//     //facts.concat(`${facts[i]}!!!`)
//     //facts.concat(`${[i]}!!!`) --- gives weird error
//       return facts.concat(`${facts[i]}!!!`)
//   }
// }


function johnLennonFacts(facts) {
  var newFacts = [];
  let i = 0;
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return newFacts;
}




function iLoveTheBeatles(number) {
  var allYouNeedIs = [];
  do {
    allYouNeedIs.push(`I love the Beatles!`);
    number++;
  } while (number < 15);
  return allYouNeedIs;
}

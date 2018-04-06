// returns an array of strings containing what instruments each musician plays

function theBeatlesPlay(musicians, instruments) {
const beatleSentence = [];
  
  for (let i = 0; i < 4; i++) {
  beatleSentence.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatleSentence;
}

// returns an array of strings with exclamation points

function johnLennonFacts(facts) {
const array = [];

  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

/* returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
returns an array of 'I love the Beatles!' once when passed the parameter 17 */

function iLoveTheBeatles(n) {
const array = [];
  
    do {
      array.push("I love the Beatles!");
      n++;
    } while(n < 15);
    
  return array;
}
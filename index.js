// add solution here

//  Notes 
//  musicians is the musicians array 
//  instruments is the instruments array 


function theBeatlesPlay(musicians, instruments) {
  
  const beatlesArray = [];

  for(let i =0; i < musicians.length; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  const loudFacts = [];
  let i = 0;
  while(i<facts.length){
    loudFacts.push(`${facts[i]}!!!`)
    i++
  }
  return loudFacts;
}

function iLoveTheBeatles(number) {
  const iLoveTheBeatlesAarray = [];

  do {
    iLoveTheBeatlesAarray.push("I love the Beatles!")
    number++
  } while(number<15);
  return iLoveTheBeatlesAarray;
}
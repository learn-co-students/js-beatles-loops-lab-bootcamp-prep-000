// add solution here
function theBeatlesPlay(musicians, instruments){
  let finalArray = [];

  for(let i = 0; i < musicians.length; ++i){
    let currentMusician = musicians[i];
    let currentInstrument = instruments[i];

      finalArray.push(`${currentMusician} plays ${currentInstrument}`)


  }

  return finalArray;
}


function johnLennonFacts(facts){
  let finalArray = [];

  for(let i = 0; i < facts.length; ++i){
    finalArray.push(facts[i] + "!!!");
  }

  return finalArray;
}


function iLoveTheBeatles(number){
  let finalArray = [];

  do{
    finalArray.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return finalArray;
}

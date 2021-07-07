function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  let result = [];
  for (let i = 0; i < arrayOfMusicians.length; i++){
    const currentMusician = arrayOfMusicians[i];
    const currentInstrument = arrayOfInstruments[i];
    result.push(`${currentMusician} plays ${currentInstrument}`)
  }
  return result
}

function johnLennonFacts (arrayOfFacts){
  let i = 0
  while (i < arrayOfFacts.length){
    arrayOfFacts[i] += '!!!';
    i++;
  }
  return arrayOfFacts
}

// function iLoveTheBeatles(n){
//   let result = [];
  
// }



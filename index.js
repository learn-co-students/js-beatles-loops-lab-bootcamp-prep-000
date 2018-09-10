// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  try {
    if(arrMusicians.length !== arrInstruments.length) {
      throw "arrays unequal";
    }
  }
  catch(err) {
    console.log("Error: " + err)
  }
  let arrTheBeatlesPlay = []
  for (let i = 0; i < arrMusicians.length; ++i){
    arrTheBeatlesPlay.push(arrMusicians[i] + " plays " + arrInstruments[i])
  }
  return arrTheBeatlesPlay;
}

function johnLennonFacts(arrFacts) {
  let i = 0;
  while (i < arrFacts.length) {
    arrFacts[i] = arrFacts[i] + "!!!";
    ++i;
  }
  return arrFacts;
}

function iLoveTheBeatles(n) {
  let arrILoveTheBeatles = [];
  do {
    arrILoveTheBeatles.push("I love the Beatles!");
    ++n;
  } while (n < 15);
  return arrILoveTheBeatles;
}
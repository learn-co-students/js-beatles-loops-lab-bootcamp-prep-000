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
  arrTheBeatlesPlay = []
  for (let i = 0; i < arrMusicians.length; ++i){
    arrTheBeatlesPlay.append(arrMusicians[i] + " plays " + arrInstruments[i])
  }
  return arrTheBeatlesPlay;
}

function johnLennonFacts(arrFacts) {
  let i = 0;
  while (i < arrFacts.length) {
    arrFacts[i] = arrFacts[i] + "!!!";
  }
  return arrFacts;
}

function iLoveTheBeatles(n) {
  let arrILoveTheBeatles = [];
  do {
    arrILoveTheBeatles.append("I love the Beatles!");
    ++n;
  } while (n < 15);
}
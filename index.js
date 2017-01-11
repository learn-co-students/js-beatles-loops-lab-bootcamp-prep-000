function theBeatlesPlay(arrMusicians, arrInstruments){
  var stringArray = [];
  for (let i = 0; i < arrMusicians.length; i++){
    stringArray.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`)
  }
  return stringArray;
}

function johnLennonFacts(arrFacts){
  var i = 0;
  while (i < arrFacts.length){
    arrFacts[i] += "!!!";
    i += 1;
  }
  return arrFacts;
}

function iLoveTheBeatles(num){
  var hcoreFan = [];
  do {
    hcoreFan.push("I love the Beatles!");
    num -= 1;
  } while (num < 15 && num >= 0);
  return hcoreFan;
}
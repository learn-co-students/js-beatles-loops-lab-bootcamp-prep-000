function theBeatlesPlay(musArray, insArray) {
  let newArray = [];
  for (let i = 0; i < musArray.length; i++) {
    let string = musArray[i] + " " + "plays" + " " + insArray[i];
    newArray.push(string);
    }
    return newArray;
  }

function johnLennonFacts(facArray){
  let excArray = [];
  for(let i = 0; i < facArray.length; i++) {
    let strWithExc = facArray[i] + "!!!";
    excArray.push(strWithExc);
  }
  return excArray;
}

function iLoveTheBeatles(num) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return newArray;
}
console.log(iLoveTheBeatles(14));
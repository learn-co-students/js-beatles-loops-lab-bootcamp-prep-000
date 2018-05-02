function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var musiciansInfo = [];
  for (let i = 0; i < musiciansArray.length; i++) {
    musiciansInfo.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
    //musiciansInfo[i] = Object.assign({}, musiciansInfo, { [i]: `${musiciansArray[i]} plays ${instrumentsArray[i]}`}); 
  }
  return musiciansInfo;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(factsArray) {
  var i = 0;
  var newArray = [];
  while (factsArray.length  > i) {
    newArray.push(`${factsArray[i]}` + "!!!");
    //newArray[i] = Object.assign({}, newArray, { [i]: `${factsArray[i]}` + "!!!"});
    i++;
  }
  return newArray;
} 

function iLoveTheBeatles(number) {
  var strings = [];
  do{
      number++;
      strings.push("I love the Beatles!");
  } while (number < 15);
  return strings;
}
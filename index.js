const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(first,second){
  var temp = [];
  for (let i=0;i<first.length;i++){
    temp[i] = `${first[i]} plays ${second[i]}`
  }
  return temp;
}

function johnLennonFacts(array){
  /*for (let i = 0; i < array.length; i++){
    array[i] += "!!!";
  }*/ var count = 0;
  while (count < array.length){
    array[count] += "!!!";
    count++;
  }
  return array;
}

function iLoveTheBeatles(howMany){
  var keepShouting = [];
  do {
    keepShouting.push("I love the Beatles!");
    howMany++;
  } while (howMany < 15)
  return keepShouting;
}

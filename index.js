const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments){
  let arr = [];
  for(let i=0; i<musicians.length; i++){
    arr.push(musicians[i]+' plays '+instruments[i]);
  }
  return arr;
}

function johnLennonFacts(factsList){
  let i = 0;
  while(i < factsList.length){
    factsList[i] = factsList[i] + "!!!";
    i++;
  }
  return factsList;
}

function iLoveTheBeatles(num){
  let arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return arr;
}

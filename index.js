const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(array1, array2){
  let array=[];
  for (let i=0; i<array1.length; i++){
  array.push(`${array1[i]} plays ${array2[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  let newArray=[];
  let i=0;
  while(i<array.length){
    newArray.push(`${array[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(n){
  let array=[];
  do {
    array.push("I love the Beatles!");
    n++;
  }while(n<15);
  return array;
}
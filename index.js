//Test 1: Two Arrays Combined into 3rd Array of Strings

let musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
let instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(array1, array2) {
  let newArray = [];
  for (let i = 0; i <= 3; i++) {
    newArray.push(array1[i] + " plays " + array2[i]);
  }return newArray;
}
theBeatlesPlay(musicians, instruments);

//Test 2: While Loop over an Array

function johnLennonFacts(array) {
  let newArray = [];
  let counter = 0;
  while(counter < array.length) {
    newArray.push(array[counter] + "!!!");
    counter += 1;
  }return newArray
}

johnLennonFacts(["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]);

//Test 3: Do While Loop Returns Array of Strings

function iLoveTheBeatles(n) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n += 1;
  }while (n<15);
  return newArray;
}

//Completed Lesson
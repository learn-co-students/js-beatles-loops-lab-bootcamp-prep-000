var musician = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instrument = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musician, instrument){
  var array = [];
  for(var i = 0; i < musician.length; i++ ){
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array){
  var i = 0;
  var newArray = [];
  while(i < array.length){
     newArray.push(`${array[i]}!!!`);
     i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  } while(
    number < 15
  );
  return array;
}

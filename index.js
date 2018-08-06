// add solution here
function theBeatlesPlay (musicians,instruments) {
  let array = [];
  for (let x = 0; x < musicians.length; x++) {
    array.push(`${musicians[x]} plays ${instruments[x]}`);
    
  }
  return array;
}

musicianArray=["some guy","some other guy"];
instrumentArray=["something","some other thing"];
console.log(theBeatlesPlay(musicianArray,instrumentArray));

function johnLennonFacts (facts) {
  let array =[];
  let x= -1;
  while (x < facts.length-1) {
    x++;
    array.push(`${facts[x]}!!!`)
  }
  return array;
}

const factsArray = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
console.log(johnLennonFacts(factsArray));

function iLoveTheBeatles (number) {
  let array=[];
  do { array.push("I love the Beatles!");
  number++; }
  while (number < 15);
  return array
}

console.log(iLoveTheBeatles(10));

/*function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());*/






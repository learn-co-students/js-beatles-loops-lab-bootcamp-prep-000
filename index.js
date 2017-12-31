function theBeatlesPlay(musicians, instruments){
  let array = [];
  for (let i = 0; i<musicians.length && i<instruments.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  const array = [];
  let i = 0;
  while (i < facts.length){
    array.push(`${facts[i]}!!!`);
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  const array = [];
  do{
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array
}


// function doWhileLoop(array){
//   function maybeTrue() {
//     return Math.random() >= 0.5;
//   }
//   do {
//     array.shift()
//   } while (array.length > 0 && maybeTrue());
//   return array
// }

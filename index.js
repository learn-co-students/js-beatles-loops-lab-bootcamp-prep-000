// add solution here

//const arr = [];

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  let arr = [];  
  for(var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return arr;
}

const newArr = theBeatlesPlay(musicians, instruments);
console.log(newArr);


const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];
        
function johnLennonFacts(facts){
  let arr = [];
  let i = 0;
  while(i < facts.length){
    arr.push(`${facts[i]}!!!`);
    i++;
  }
  return arr;
}


const num = 7;
function iLoveTheBeatles(num){
  let arr = [];
  do{
    arr.push(`I love the Beatles!`);
    num++;
  }while(num < 15);
  return arr;
}


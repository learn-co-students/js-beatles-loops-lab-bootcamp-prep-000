// add solution here

function theBeatlesPlay(instruments, musicians){
  let inst = [];

  for (let i = 0; i < musicians.length; i++ ){

   inst.push(`${instruments[i]} plays ${musicians[i]}`);

  }
return inst;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){

let escl = [];
let i = 0;
  while ( escl.length < facts.length){
    escl.push(`${facts[i]}!!!`);
    i++;

  }
  return escl;
}


function iLoveTheBeatles(number){

let emp = [];

do {
  emp.push('I love the Beatles!');
number++;
} while(number < 15);

return emp;
}

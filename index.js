// add solution here
/* Create a function johnLennonFacts.

This function will accept one argument, an array of facts about John Lennon:

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian", 
  "He was a choir boy and boy scout", 
  "He hated the sound of his own voice" 
];
Use a while loop to loop over the facts array and add "!!!" to the end of every fact.*/ 

var lennonFacts = [ "He was the last Beatle to learn to drive",
  "He was never a vegetarian", 
  "He was a choir boy and boy scout", 
  "He hated the sound of his own voice" 
]; 

function johnLennonFacts () {
  while (i=0, i<=lennonFacts.length, i++){
    console.log(`Did you know, ${lennonFacts[i]}!!!'); 
  } 
} ; 

johnLennonFacts(lennonFacts); 

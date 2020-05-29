// add solution here
var musicians=[
  "John Lennon",
  "Paul McCartney",
  "Ringo Starr",
  "George Harrison"]
var instruments= [
  "rhythm guitar",
  "bass",
  "drums",
  "lead guitar"]
var whoPlaysWhat=[]

function theBeatlesPlay(musicians, instruments) {
 for (let i = 0; i < 4; i++) {
 whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
 } 
 return whoPlaysWhat
}


var facts= [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  "While on tour, he enjoyed playing Monopoly",
  "Harmonica was the first instrument Lennon learned to play"];

function johnLennonFacts(facts){
 let i=0;
 var excitedFacts=[];
 while (i<facts.length) {
excitedFacts.push(`${facts[i]}!!!`);
  i+=1
  }
   return excitedFacts
}

function doWhileLoop(num){
  do { console.log("I run once regardless.")}
  while (incrementVariable()<= num);
}

let i = 0;
 function incrementVariable() {
  i = i + 1;
  return i;
}

function iLoveTheBeatles(num){
var empty=[]
 do { empty.push("I love the Beatles!")}
 while(incrementVariable()<15);
 return empty
}

function iLoveTheBeatles(num){
  var empty=[];
  function incrementVariable() {
    num = num + 1;
    return num;
  }
 do { 
   empty.push("I love the Beatles!")
  } while(incrementVariable()<15);
 return empty
}
// add solution here
var newArr=[]
const musicians=["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments=["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians, instruments) {
  for (let counter = 0; counter < 4; counter++) {
    newArr.push(`${musicians[counter]} plays ${instruments[counter]}`);
    }
    return newArr;
}

theBeatlesPlay();

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

//var newFacts=[];


function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    //newFacts = [`${facts[i]}!!!`];
   i++;
    
    }
     return facts;
}

johnLennonFacts();

//let num = 0;

function iLoveTheBeatles(num) {
  var loveArr=[];
  do {
    loveArr = [...loveArr, "I love the Beatles!"];
    num = num + 1;
    
  }while (num < 15);
  return loveArr;
}

iLoveTheBeatles(num);
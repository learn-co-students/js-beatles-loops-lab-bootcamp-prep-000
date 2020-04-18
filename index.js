// add solution here
musicians=["Paul McCartney","John Lennon","George Harrison", "Ringo Starr"];
instruments=["bass","guitar","guitar","drums"];

function theBeatlesPlay(musicians,instruments) {
 var empty=[];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return empty;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i=0;
 function incrementVariable() {
  i = i + 1;
  return i;
}
var new_empty=[];
do {
  new_empty.push(`${facts[i]}!!!`);
} while (incrementVariable() < facts.length);
return new_empty;
}

function iLoveTheBeatles(num){
    var emptyArray=[];
    do{
        emptyArray.push(`I love the Beatles!`);
    num=num+1; }
    while (num<15)
return emptyArray;
}


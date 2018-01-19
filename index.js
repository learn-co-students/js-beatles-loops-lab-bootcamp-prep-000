const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians,instruments){
  var musiciansinstruments=[];
  for(let i=0;i< (musicians.length ||        instruments.length);i++){
    musiciansinstruments[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
  return musiciansinstruments;
}

function johnLennonFacts(facts){
  var n=0;
  var modifiedfacts=[]
  while (n<facts.length){
    modifiedfacts[n]=`${facts[n]}!!!`;
    n++;
  }
  return modifiedfacts;
}

var number=7;
function iLoveTheBeatles(number){
  var counter=0;
  var i=0;
  var loveBeatlesArray=[];
  do{
    loveBeatlesArray[i]="I love the Beatles!";
    number++;
    i=i+1;
  }while(number<15);
   return loveBeatlesArray;
}
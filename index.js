  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments){
 var musical=[];

 for(let i=0;i<=musicians.length-1;i++){
   musical.push(`${musicians[i]} plays ${instruments[i]}`);
}
return musical;
}

console.log(theBeatlesPlay(musicians, instruments));

var johnLennonFactsArray=[
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(johnLennonFactsArray){
 var newjohnLennonFacts=[];
 var i=0;
 while(i<=johnLennonFactsArray.length-1){
   newjohnLennonFacts.push(`${johnLennonFactsArray[i]}!!!`);
   i++;
 }
 return newjohnLennonFacts;
}

console.log(johnLennonFacts(johnLennonFactsArray));

function iLoveTheBeatles(num){
  var lovebeatles=[];
  var i=1;
  do{
     lovebeatles.push(`I love the Beatles ${i} times !`);
     i++;
  }while(i<num)
  console.log(`after loop :${i}`);
  return lovebeatles;
}

console.log(iLoveTheBeatles(15));

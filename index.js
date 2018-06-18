const musicians=["John Lennon",];
const instruments=["guitar",];
function theBeatlesPlay(musicians,instruments){
  var array=[];
  for (var i=0; instruments.length>0; i++){
    array.push( musicians.splice(i,1)+ ' plays '+ instruments.splice(i,1))
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(jlfacts) {
  const arrayFacts=[];
  var count=3
  while(count>0){ 
  arrayFacts.push(facts.splice(count,1,facts(3)+ '!!!'));
  --count;
  }
  return arrayFacts;
}

function iLoveTheBeatles(number){
  var arrayLove=[];
  do {
    arrayLove.push('I Love The Beatles!');
    ++number
  } while(number<15);
  return arrayLove();
}
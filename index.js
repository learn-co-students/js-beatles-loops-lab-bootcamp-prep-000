function theBeatlesPlay(musicians, instruments){
  
  var emptyarray = [];
  for( let i = 0; (i < musicians.length) && (i < instruments.length); i++){
    emptyarray[i] = musicians[i] + " plays " + instruments[i]
    console.log(emptyarray[i])
  }
  
  return emptyarray
  
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    
    facts[i] += "!!!" 
    i++
  }
  
  return facts
}

function iLoveTheBeatles(num){
   var emp = [];
    var i = 0;
  do {
    emp[i] = 'I love the Beatles!';
    i++;
    num++;
  } 
  while( num < 15  );
  
  return emp
}


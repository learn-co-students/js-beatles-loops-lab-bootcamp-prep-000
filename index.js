const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay (arrMusicians, arrInstruments) {
  
  var arr = [];
  for (var i = 0; i < arrMusicians.length; i++) 
  {
    arr.push(arrMusicians[i] +  " plays " + arrInstruments[i])
  }
  
  return arr
  
}

function johnLennonFacts (facts) {

  var arr = [];
  var i = 0;
   while (i <facts.length) {   
 arr.push(facts[i] + '!!!');
 i ++
   }
  return arr
}


function iLoveTheBeatles  (num) {
  var arr = [];
  do {arr.push("I love the Beatles!")
    num ++
  }
while ( num <15 )
 
  return arr

  
}












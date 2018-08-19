// add solution here
var musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
  ]
  
  var instruments = [
    "Guitar",
    "Bass Guitar",
    "Lead Guitar",
    "Drums"
    ]

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for( var i = 0; i < 4; i++){
   if ( i === 0) {
      emptyArray.push(`${musicians[0]} plays ${instruments[0]}`)
   }
     
   else { emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
   }
}
  return emptyArray;
}    
 // Don't have to put 'return' when push.-ing!
 
 
 var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var otherArray = [];
  var i = 0;
  while (otherArray.length < facts.length) {
    console.log(otherArray.push(`${facts[i]}!!!`))
    i++;
  }
  return otherArray;
}

// Had to create new array
// Had to add var i and incorporate i++ increment to execute loop
//Increment required reference to old array, not a number (counts to forever otherwise bc == true)

function iLoveTheBeatles(n) {
  var array = [];
  function incrementLoop() {
     n = n + 1;
  }
  do {
    array.push("I love the Beatles!");
    incrementLoop();
  }
  while (n < 15);
  return array;
}

// Had to nest incrementLoop in 'do' so it would execute
//
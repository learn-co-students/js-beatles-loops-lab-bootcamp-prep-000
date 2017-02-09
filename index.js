//1
var musicians = [
  "John Lennon",
  "Paul McCarthy",
  "George Harrison",
  "Ringo Starr"
]

var instruments =[
  "rhythm guitar and vocals.",
  "bass and vocals.",
  "lead guitar.",
  "drums."
]

function theBeatlesPlay(musicians, instruments){
  var array=[];
  for(var i =0;i<musicians.length;i++)
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  return array;
}


//2
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var array =[]
  let countup = 0;

  while(countup < facts.length) {
  array.push(`${facts[countup++]}!!!`)
}
  return array;
}

//3
function iLoveTheBeatles(number){
var array=[]
do {
  array.push("I love the Beatles!")
  number++
}
while(number<15);
return array;
}

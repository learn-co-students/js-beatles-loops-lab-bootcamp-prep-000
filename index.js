function theBeatlesPlay(musician, instruments){
  var newarray = [];

  for (var i =0; i<musician.length; i++){
    newarray.push(musician[i] + " plays " + instruments[i]);
  }

  return newarray;
}

/*
var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];
*/


function johnLennonFacts(facts){
//  var facts = [
//  "He was the last Beatle to learn to drive",
//  "He was never a vegetarian",
//  "He was a choir boy and boy scout",
//  "He hated the sound of his own voice"
//  ];
  var newfacts = []
  let i = 0
    while (i<facts.length)  {
      newfacts.push(facts[i] + "!!!")
      i++;
    }
  return newfacts;

}



function iLoveTheBeatles(num){
  var emptyarray = [];

  do {

    emptyarray.push("I love the Beatles!");
    num++;

  } while (num < 15);

  return emptyarray;

}

/*
function johnLennonFacts(facts) {
  let n = 0
  while (n<=facts.length)  {
    facts[n] + "!!!";
    n++
  }
    return facts;
  }
*/

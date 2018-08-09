
function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (let i=0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  var j = '!!!';
  var myArray= new Array();

  while (i < facts.length) {
    myArray[i] = facts[i].concat('!!!'); // tried plus for concat; concat not working, tested in console.
    ++i; // tried ++1
  }
  return myArray;
}
//
//
// function  iLoveTheBeatles(n) {
//   var myArray = new Array();
//   do {
//     myArray.push("I love the Beatels!");
//     n++;
//   } while(n <15);
//   return myArray;
// }

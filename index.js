function theBeatlesPlay(arrM, arrI){
  var array = [];
  for (var i = 0; i < arrM.length; i++ ) {
     array.push(arrM[i] + " plays " + arrI[i]);
  }
    return array;
}
  
   const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(array) {
var guy = [];
var i = 0;
  while (i < array.length) {
     guy.push(array[i] +"!!!");
     i++;
  }
  return guy;
  }
function iLoveTheBeatles(num) {
  var love = [];
  do { 
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}
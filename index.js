function theBeatlesPlay (musicians,instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
return newArray;
}
 const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
function johnLennonFacts(array){
  var newArray = [];
  var i = 0;
while (i < array.length) {
        newArray.push(array[i] +"!!!");
        i++;
// for (var i = 0; i < array.length; i ++)
//     newArray.push(array[i] + '!!!')
// alternate solution with for loop.
}
return newArray;
}
function iLoveTheBeatles (num) {
  var newArray = [];
  var i =  0;
  do {newArray.push('I love the Beatles!'); num++} 
  while  (num < 15);
  return newArray;
}
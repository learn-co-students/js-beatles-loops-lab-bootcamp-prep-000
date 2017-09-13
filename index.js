function theBeatlesPlay(musicians,instruments){
  var newStrings = [];
  for (var i = 0; i<=musicians.length-1; i++) {
  newStrings.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return newStrings;
}
/*
function theBeatlesPlay(musicians,instruments){
  var newStrings = [];
  for (var i = 0; i<=musicians.length-1; i++) {
  newStrings[i]= (musicians[i]+" plays "+instruments[i]);
}
  return newStrings;
}
*/
function johnLennonFacts(facts){
  var strings = []
  let i = 0;
  while (i < facts.length) {
  strings.push(`${facts[i]}!!!`);
  (i++);
}
  return strings;
}
/*
function johnLennonFacts(facts){
  var strings = []
  let i = 0;
  while (i <= facts.length-1) {
  (strings[i] = facts[i]+"!!!");
  (i++);
}
  return strings;
}
*/
function iLoveTheBeatles(number){
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return emptyArray;
}

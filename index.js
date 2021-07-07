// add solution here
function theBeatlesPlay(arrayMusician, arrayInstrument) {
  var i = 0;
  var array = [];
  for ( i = 0; i < arrayMusician.length; i++) {
    array.push(arrayMusician[i] + " plays " + arrayInstrument[i]);
  }
  return array;
}
function johnLennonFacts(facts) {
  const array = [];
  let i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}
function iLoveTheBeatles(number) {
  const array = [];
  do {
    array.push("I love the Beatles!")
    number++
  }
  while (number < 15);
  return array;
}
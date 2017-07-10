function theBeatlesPlay (musicians, instruments) {
  var array = new Array();
  //steps through musicians and instruments arrays, compiling them into shared array
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts (facts) {
  //initializes counter
  var number = 0;
  //as long as we haven't reached the end of the array
  while(number < facts.length) {
    //we add `!!!` to the exisiting string within the array
    facts[number] += `!!!`;
    number++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = new Array();
  //adds the first string to the array and increments the passed number
  do {
    array.push(`I love the Beatles!`)
    number++
  } while (number < 15);
  return array
}

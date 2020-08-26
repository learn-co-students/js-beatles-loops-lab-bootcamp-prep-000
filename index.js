// add solution here
function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments) {
  var array=[];
  for (let i = 0; i < 4; i++) {
      array.push(`${arrayOfMusicians.shift()} plays ${arrayOfInstruments.shift()}`);
  }
  return array;
}

function johnLennonFacts(arrayofJohnLennonFacts) {
  var array = [];
  let length = arrayofJohnLennonFacts.length;
  while (length > 0) {
    array.push(`${arrayofJohnLennonFacts.shift()}!!!`)
     --length;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
     array.push("I love the Beatles!");
     ++number;
   } while (number < 15);
  return array;
}

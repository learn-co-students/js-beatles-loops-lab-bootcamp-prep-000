// add solution here
function theBeatlesPlay (musicians, instruments){
  const array = [];
    for (var i =0; i<4; i++) {
      array.push(  musicians[i] + " plays " + instruments[i] )
    }
  return array
}

function johnLennonFacts(facts) {
//                       ^^^^^
// your function has to accept the argument here

  var data = facts.slice(); // make a copy of the passed array

  var i = 0;

  while (i < data.length) { // i is less than the length of the data array run the function and i increases everytime the function is run, when the function runs 5 times the while method ends

    data[i] += '!!!'; // use += to add the !!!

    i++; // increment after adding the !!!
  }

  return data
}

function iLoveTheBeatles(num){
  var array = [];

  function incrementVariable() {
    num = num + 1;
    return num;
  }

  do {
  array.push("I love the Beatles!");
} while (incrementVariable() < 15);
return array;
}

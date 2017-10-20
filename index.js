function theBeatlesPlay(musicians, instruments) {
  // var musicians = ["John Lennon", "Paul McCartney", "George Harrison",
  //   "Ringo Starr"];
  // var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var array = ([]);
  for (var i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return (array);
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += ('!!!');
    i++
  }

   return (array);
}

function iLoveTheBeatles(number) {
  var array = [];
    do {
      array.push("I love the Beatles!");
      number++;
    } while (number < 15);

  return (array)
}

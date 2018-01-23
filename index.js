function theBeatlesPlay(musicians, instruments) {
  var array = [];
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  
  while (array[i]) {
    newArray.push(array[i].concat("!!!"));
    i++;
  }
  
  return newArray;
}

function iLoveTheBeatles(number) {
  var array = [];
  
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}



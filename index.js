var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  var newArray = [];
  for (var i = 0; i < 4; i++) {
  newArray.push (`${musicians[i]} plays ${instruments[i]}`);
}
  return newArray;
}


function johnLennonFacts(facts)
{
  var array = [];
  var i = 0;
  while (i < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(number)
{
  var array = [];

  if (number < 15){
    do {
      array.push("I love the Beatles!");
    } while (array.length < number + 1)
    return array;
  }
  else{
    return ("I love the Beatles!");
  }
}

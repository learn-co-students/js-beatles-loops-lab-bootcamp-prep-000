function theBeatlesPlay(musician, instrument)
{
  var beatle = []
  for (var i = 0; i < musician.length; i++){
    beatle.push(musician[i] + " plays " + instrument[i]);
  }
    return beatle;
}







function johnLennonFacts(array) {
    var newfacts = [];
    var i = 0;
    while (i < array.length) {
        newfacts.push(array[i] +"!!!");
        i++;
    }
    return newfacts;
}

function iLoveTheBeatles(number)
{
  var beatlearray = [];
  do {beatlearray.push("I love the Beatles!");
  number++;
  }
  while (number<15);
  return beatlearray;
}
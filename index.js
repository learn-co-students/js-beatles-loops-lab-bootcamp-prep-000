function theBeatlesPlay(arrArtist, arrInstrument) {
  var array = [];
  for (var i = 0; i < arrArtist.length; i++) {
    var newArray = [];
    newArray.push(arrArtist[i], arrInstrument[i]);
    var newArrays = newArray.join(" plays ");
    array.push(newArrays);
  }
  return array
}

const facts = ["Said he'd rather have been a member of Monty Python",
"He's favourite game while on tour was Monopoly",
"Once demanded that Yoko write a list of everyone she'd slept with",
"As a teenager, he considered himself a Teddy Boy",
"He thought he was Jesus"];

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!";
    counter++;  
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array
}
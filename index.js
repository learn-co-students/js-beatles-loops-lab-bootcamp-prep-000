// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments){
var results =[];
for(var i=0; i<arrayMusicians.length; i++){

    results.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
}

return results;
}

theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]);

function johnLennonFacts(array){
  var i = 0;
  var results =[];
  while(array[i]){
    results.push(array[i]+"!!!");
    i++;
  }
  return results;
}

johnLennonFacts([ 'John Lennon plays Guitar ', 'PaulMcCartney plays Bass Guitar ', 'George Harrison plays LeadGuitar ', 'Ringo Starr plays Drums ' ] )

function  iLoveTheBeatles (number){
  var number = number + 1
  var results =[];
  var i = 0;

  do{
    i++;
    results.push("I love the Beatles!");
  }

  while (i<number);
  if (number<=8){
  return (results);
}
  else {
    return (["I love the Beatles!"]);
  }
}

iLoveTheBeatles(7)

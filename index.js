musicians = ['John Lennon','Jimi Hendrix','Madonna'];
instruments = ['Guitar','Tambourine', 'Flute'];

function theBeatlesPlay (musicians,instruments){
  const array = [];
  for (let i=0; i< musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(facts){
  var newFacts = [];
  let i = 0;
  while (i<facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}


function iLoveTheBeatles(number){
  var newArray = [];
  let i = number;
  do {
    newArray.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  return newArray;
}

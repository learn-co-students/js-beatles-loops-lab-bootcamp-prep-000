
function theBeatlesPlay (name, instruments) {
  const array = [];
  for (let i = 0; i < name.length ; i++  ) {
    array[i] =  name[i] + " plays " + instruments[i];
    console.log (array[i]);
  }
  return (array);
}

function johnLennonFacts(facts) {
  const array = [];
  for (let i = 0; i < facts.length ; i++  ) {
    array[i] =  facts[i] + "!!!";
    console.log (array[i]);
  }
  return (array);
}

function iLoveTheBeatles (number) {
  const array = [];
  let i = 0;
  do {
    array.push("I love the Beatles!");
    i = i + 1;
    if ( number > 15) {
      i = i + number;
    }
  } while ( i <= number );
  console.log(array);
  return array;
}

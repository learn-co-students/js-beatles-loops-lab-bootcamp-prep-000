// add solution here
var theBeatlesPlay = (musicians,instruments) => {
  let strings = [];
  for( let i=0; i<instruments.length; i++ ) {
      strings.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return strings;
};

var johnLennonFacts = (facts) => {
  let f=0, strings=[];
  while( f<facts.length ) {
    strings.push(facts[f++]+"!!!");
  }
  return strings;
};

var iLoveTheBeatles = (number) => {
  let array = [];
  do {
    array.push("I love the Beatles!");
  } while( ++number<15 );
  return array;
};

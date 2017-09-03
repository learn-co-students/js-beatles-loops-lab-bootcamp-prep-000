function theBeatlesPlay (musicians, instruments){
  var musiciansAndTheirInstrumentsArray = [];
  for (var i = 0; i < 4 ; i++){
    musiciansAndTheirInstrumentsArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansAndTheirInstrumentsArray;//returns an array of strings containing what instrument each musician plays
}

function johnLennonFacts(facts){
 var factsAboutJohnLennonArray = [];
 let i = facts.length;
  while (--i >= 0){
    factsAboutJohnLennonArray.unshift(`${facts[i]}!!!`);
  }
  return factsAboutJohnLennonArray;//returns an array of strings with exclamation points
}



function iLoveTheBeatles(number){
  var iLoveTheBeatlesArray = [];
  var number1 = number;
  do{
    iLoveTheBeatlesArray.push(`I love the Beatles!`);
    --number1;
  } while (number < 15 && number1 >= 0);
  return iLoveTheBeatlesArray;//returns an array of 'I love the Beatles!' 1 more time than the parameter passed and only once if parameter is 15 or more
}

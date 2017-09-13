function theBeatlesPlay(artist, instrument){
  var str = [];
  for (let i=0; i < artist.length || i<instrument.length;i++){
    str.push(`${artist[i]} plays ${instrument[i]}`);
  }

  return str;
}

function johnLennonFacts(facts){
  let i = 0;
  while (i<facts.length) {
    facts[i] = facts[i]+"!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  } while (number<15)

  return array;

}

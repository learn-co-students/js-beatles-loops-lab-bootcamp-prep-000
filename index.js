function theBeatlesPlay(beatles,instruments){
  var plays = [];
  for (let i = 0; i < beatles.length; i ++){
    plays[i] = `${beatles[i]} plays ${instruments[i]}`;
  }
  return plays;
}

function johnLennonFacts(facts){
  var exclam = [];
  var i = 0;
  while (i < facts.length){
    exclam.push(`${facts[i++]}!!!`);
  }
  return exclam;
}

function iLoveTheBeatles(num){
  var lovem = [];
  do{
    lovem.push('I love the Beatles!');
    num++
  } while (num < 15);
  return lovem;
}

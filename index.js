// add solution here

function theBeatlesPlay(musicians, instruments){
  var a = [];

for(var i=0; i < musicians.length; i++){
  var person = musicians[i];
  var instrument = instruments[i];
  a.push(`${person} plays ${instrument}`)
  }
  return a
}

function johnLennonFacts(facts){
  var counter = 0;
  while(counter < facts.length){
    facts[counter] = facts[counter]+"!!!";
    counter++
  }
  return facts
}

function  iLoveTheBeatles(number){
  var a = [];
  do{
    a.push("I love the Beatles!");
    number++;
  }while(number < 15)
  return a;
}





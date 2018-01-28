const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i=0; i < (musicians.length); i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts (facts){
  var arrayy = [];
  var i= 0;
  while (i<facts.length){
   arrayy.push(facts[i] + "!!!");
   i++;
  }
  return arrayy;
}

function iLoveTheBeatles(number){
  var niz =[];
  do{
    niz.push("I love the Beatles!");
    number++;
  } while (number<15);
  return niz;
}
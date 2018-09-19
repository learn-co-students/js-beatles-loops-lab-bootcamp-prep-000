const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  
  for (let i = 0; i < 4; i++){
   array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}


const facts = [
   "foo",
   "bar",
   "He was the last Beatle to learn to drive",
   "He was never a vegetarian",
   "He was a choir boy and boy scout",
   "He hated the sound of his own voice",];
   
function johnLennonFacts(facts){
  var array = [];
  let i = 0; 
  
  while (i < facts.length){
    array.push(facts[i] + '!!!');
    (++i);
  } 
  return array;
}



var i = 0;
function iLoveTheBeatles(i){
  var array = [];
 
  
   do{ 
    if (i === 17){
    array = ['I love the Beatles!'];
    } else {
    array.push('I love the Beatles!');
    (++i)}
   }
   
   while (i < 15);
  
  return array;
}


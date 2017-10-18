const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

theBeatlesPlay(musicians,instruments);

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var m=0;m<musicians.length;m++){
    var str = musicians[m] + ' plays ' + instruments[m];
    array.push(str);
  }
  return array
}

function johnLennonFacts(array){
  for(let i in array){
    array[i] = array[i] + "!!!";
  }
  return array
}

function iLoveTheBeatles(num, param){
  var array = [];
  do{
    array.push("I love the Beatles!");
    num++;
    if(num > param){
      return array;
    }
  }while(num<15);
    return array;
}

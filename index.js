function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for(var i = 0; i<musicians.length; i+=1) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

//test function
console.log(theBeatlesPlay(['a','b'],['1','2']));

function johnLennonFacts(array){
  for(var i = 0; i<array.length; i+=1) {
    array[i]=array[i] + '!!!';
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

//test function
johnLennonFacts(facts);
console.log(facts);

function iLoveTheBeatles(n) {
  var y = n+1;
  var storage = [];
  if(n<15) {
  do {
    storage.push('I love the Beatles!');
  } while (storage.length<y);
  }
  else {
    storage.push('I love the Beatles!');
  }
  return storage;
}

//test function
console.log(iLoveTheBeatles(3));

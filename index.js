var musicians = ['Shakira', 'MCR', 'The Beatles']
var instruments = ['Sax', 'Flute','Piano']

function theBeatlesPlay(array1, array2){
    var x = []
    for (var z =0; z<(array1.length); z++){
    var y = String(array1[z] + " plays " + array2[z])
    x.push(y)
    }
  return x 
}




function johnLennonFacts(array){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  var newArray = [];
  let count = 0;
  while(count<array.length){
    newArray.push(array[count] + '!!!');
    count++;
  }
  return newArray
}

function iLoveTheBeatles(number){
  var empty =[]
  do {
    empty.push('I love the Beatles!');
    number ++;
  }
  while (number<15);
  return empty
}


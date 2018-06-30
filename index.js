function theBeatlesPlay(musicians, instruments){
  var myArray = []; 
    for (let i = 0; i < musicians.length; i++){
      myArray[i] = musicians[i] + ' plays ' + instruments[i];
    }
  return myArray; 
}

function johnLennonFacts(facts){
  let i = 0;
    while (i < facts.length){
      facts[i] += '!!!';
      i++;
    }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
  arr.push("I love the Beatles!");
  num++;
} while (num < 15);
return arr;
}


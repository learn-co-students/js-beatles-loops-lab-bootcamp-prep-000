function theBeatlesPlay(musicianArray, instrumentArray) {
  let array = [];
  for (let i = 0; i < musicianArray.length; i++) {
    let str = `${musicianArray[i]} plays ${instrumentArray[i]}`; 
    array.push(str);
  }
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  var newArray = [...facts];
  while(i < newArray.length) {
    newArray[i] += "!!!";
    i++;
  }
  return newArray;
} 

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return array;
}
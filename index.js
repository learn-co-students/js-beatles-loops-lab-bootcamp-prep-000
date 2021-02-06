// add solution here
const array = [];

function theBeatlesPlay (musicians, instruments) {
  for (let i=0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
     return array;
  }
  
  function johnLennonFacts (array) {
    let i = 0;
    while (i < array.length) {
     array[i] = array[i] + '!!!';
     i++;
    } 
    return array;
  }
  
  function iLoveTheBeatles (num) {
    var newArray = [];
    do {
      newArray.push("I love the Beatles!")
      num++
    } while (num < 15)
    return newArray;
  }

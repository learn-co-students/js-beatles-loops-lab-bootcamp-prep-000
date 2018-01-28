function theBeatlesPlay(musicians, instruments){
  let array = [];
  for(let i = 0; i < musicians.length; i ++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(array){
  for(let i = 0; i<array.length; i++){
    array[i] = `${array[i]}!!!`
  }
  return array;
}

function iLoveTheBeatles(number){
  let array = [];
  do {
    --number
    array.push("I love the Beatles!");
  } while (number <15 && number > -1);
  return array;
}
function theBeatlesPlay(musicians,instruments){
  var beatles = [];
  for(let i = 0; i < musicians.length; i++ ){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  } return beatles;
}

// while loop
  //loop over facts and add "!!!" to the end of every facts
//return an array of strings with the added characters
function johnLennonFacts(array){
  let i = 0;
  while(i < array.length){
    array[i]=array[i]+'!!!';
    i++;
  } return array;
}


function iLoveTheBeatles(n){
  var emptyArray = [];

  do{
    emptyArray.unshift("I love the Beatles!");
    n++;

  }while(n < 15){
   }return emptyArray;
}

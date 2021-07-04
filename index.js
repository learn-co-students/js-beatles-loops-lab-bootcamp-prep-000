// add solution here
function theBeatlesPlay(musicians, instruments){
  let beatle = [];
  for (let i = 0; i < musicians.length; i++){
    beatle.push(`${musicians[i]} plays ${instruments[i]}` );
}
 return beatle; 
}

function johnLennonFacts(array){
  let count = 0;
  let jon = [];
  while (count < array.length){
    jon.push(`${array[count]}!!!`);
    ++count;
  }
 return jon;
}

//let i = 0;

//function incrementVariable() {
  //i = i + 1;
  //return i;


function iLoveTheBeatles(num){
  let beatlemania = [];
  do {
    beatlemania.push("I love the Beatles!");
    ++num;
    
  } while (num < 15);
    
 return beatlemania;
}



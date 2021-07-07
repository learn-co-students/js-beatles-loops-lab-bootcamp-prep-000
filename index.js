// add solution here



function theBeatlesPlay(musicians, instruments){
 
  var arrayPhrases = [];
  
  for(let i = 0; i<musicians.length; i++){
   arrayPhrases.push(`${musicians[i]} plays ${instruments[i]}`)
  } //end of loop
  return arrayPhrases;
}


function johnLennonFacts(array){
  let i = 0;
  while(i <= array.length - 1){
    array[i] = array[i] + '!!!';
    i += 1; 
    
  }
  return array;
}

function iLoveTheBeatles(number){
  var array=[];
  do{
  array.push('I love the Beatles!');
  number++;
  } while(number<15);

return array;
  }















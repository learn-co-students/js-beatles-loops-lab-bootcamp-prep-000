
// 1) Beatles Loops returns an array of strings containing what instruments eachmusician plays:


function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i =0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return array;
}

/* 
2) Beatles Loops johnLennonFacts returns an array of strings with exclamationpoints:
*/
function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

/*
3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:
*/
function iLoveTheBeatles (number){
  var array=[];
  do{
    array.push('I love the Beatles!')
    number++
  }while( number < 15)
  return array;
}
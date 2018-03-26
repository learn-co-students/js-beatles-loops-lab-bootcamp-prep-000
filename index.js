//1) Beatles Loops returns an array of strings containing what instruments each musician plays:
function theBeatlesPlay(musician, instrument){
  var coolPeoplePlay = [];
  for (var i=0; i< musician.length; i++){
    coolPeoplePlay.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return coolPeoplePlay;
} 

  //2) Beatles Loops johnLennonFacts returns an array of strings with exclamation points:

function johnLennonFacts(facts){
 var i = 0;
  while (i+1 <= facts.length){
    facts[i]= facts[i] + '!!!';
    i++;
  }
  return facts;
}
    
    
  //3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
  //4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:
  
  function iLoveTheBeatles (number){
    var newArray = [];
    do {
      newArray.push("I love the Beatles!");
     number = number++;
    } while (number < 17); 
    return newArray;
  }
     
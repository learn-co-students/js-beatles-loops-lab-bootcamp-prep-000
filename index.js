
function theBeatlesPlay (musicians, instruments){
  var sentence = []
  for (let i=0; i < musicians.length; i++){
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}



function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
  var newString = facts[i] + "!!!";
  facts[i] = newString;
  i += 1;
  }
  return facts
}


function iLoveTheBeatles(number){
  var newArray = []
  do{
    newArray.push("I love the Beatles!")
    number+=1;
    }while(number<15)
  return newArray;
}
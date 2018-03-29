

function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(let i=0;i<musicians.length;i++){
    array.push(musicians[i].toString() +" plays "+ instruments[i].toString())
    console.log(array)
    
  }
  return array
}

theBeatlesPlay(['hans', 'berry'],['flut','gitar'])

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var final = [];
  while(facts.length>0){
    var firstElement = final.push(facts.shift()+"!!!");
  }
  console.log(final)
  return final
}
johnLennonFacts(facts);

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!")
  }while(array.length <= number && number < 15)
  return array
}
function theBeatlesPlay (anArrayMusicians, anArrayInstruments){
 let comboArray = [];
  for(let i = 0; i < anArrayMusicians.length; i++){
    comboArray.push(anArrayMusicians[i] + ' plays ' + anArrayInstruments[i]);
  } return comboArray;
}

function johnLennonFacts(facts){
  let newArray = [];
  let count = 0;
  while(count < facts.length){
    newArray.push(facts[count] + "!!!")
    count ++;
  } return newArray;
}

function iLoveTheBeatles(number){
  let newArray = [];
  do{
    newArray.push("I love the Beatles!");
    number ++
  }while(number < 15)
  return newArray
}


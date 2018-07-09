// add solution here
function theBeatlesPlay (arrayMusicians, arrayInstruments){
  var array = [];
  for (var index=0; index<arrayMusicians.length; index++){
    array=[...array, `${arrayMusicians[index]} plays ${arrayInstruments[index]}`]
  }
   return array;
  }
  
function johnLennonFacts(arrayFacts){
    let indexLennon=arrayFacts.length-1;
      while (indexLennon>-1) {
        arrayFacts[indexLennon] =arrayFacts[indexLennon]+"!!!";
        --indexLennon
      }
    return arrayFacts;
}

function iLoveTheBeatles (x){
  var array=[]
  do {
    array.push("I love the Beatles!")
    x++
  }
  while(x<15)
  return array;
}
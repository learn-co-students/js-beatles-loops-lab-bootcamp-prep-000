// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  
  let emptyArray = [];
  
  for (var i = 0; i < musiciansArray.length; i++) {
    
    emptyArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return emptyArray;
}


function johnLennonFacts(jlFactsArray) {
 
  var i = 0;
  
  while (i < jlFactsArray.length) {
    
   jlFactsArray[i] = `${jlFactsArray[i]}!!!`
   
    i++;
  }
  return jlFactsArray;
}


function iLoveTheBeatles(number) {
  let emptyArray = [];
  
  do {
    emptyArray.push("I love the Beatles!")
    number++;
    
  } while (number < 15)

  return emptyArray;
}





function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  
  let arr = [];
  
  for (let i = 0; i < arrayMusicians.length; i++) {
    
    arr.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  
  return arr;
  
}

function johnLennonFacts (arrFacts) {
  
  let i = 0;
 
  while (i < arrFacts.length) {
  
  arrFacts[i++] += '!!!';
  
    }
  
    return arrFacts;

    }

function iLoveTheBeatles (number) {
  
  let arr = [];
  
  let i = 0;
  
  do {
    
    arr.push("I love the Beatles!");
    
      } while (i++ < number && number < 15);
        
 
      return arr;
      
      }
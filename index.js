// add solution here
function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var array = [];
  for (let i = 0; i<arrayMusicians.length; i++) {
        array.push(arrayMusicians[i] + " plays " + arrayInstruments[i]);
      }
      return array;
    }
    
    function johnLennonFacts(arrayFacts) {
      var array = []
      var j = 0;
      while (j < arrayFacts.length) {
        array.push(arrayFacts[j] + "!!!")
        j++;
      }
      return array 
    }
    
    function iLoveTheBeatles (number) {
      var array = [];
      do {
        array.push("I love the Beatles!");
        number++; 
      } while (number < 15)
      
      return array
  }
    
    
  

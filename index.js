// add solution here

function theBeatlesPlay (musicians, instruments)
{
 var myarray = [] 
 for (let i = 0; i < musicians.length; i++) {
   myarray.push(musicians[i] + ' plays ' + instruments[i]);
    }
    return myarray
}

function johnLennonFacts(facts) {
  
  let newFacts = [];
  var i = 0
  
  while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}

function iLoveTheBeatles (num) { 
  
  let beatlesarray = []
  let string = "I love the Beatles!"
  
  do {
    
    beatlesarray.push(string)
    num ++;
    }
   while (num < 15);
   return beatlesarray;
   }
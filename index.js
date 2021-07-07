// add solution here
function theBeatlesPlay(musicians,insruments){
          var array=[];
          for (var i =0; i< musicians.length; i++){
          array.push(musicians[i] + ' plays '+ insruments[i]);
          }
          return array;
}

function johnLennonFacts(facts) {
  
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;}
  
function iLoveTheBeatles(num) {
    var array = [];
   
    do {
      array.push(`I love the Beatles!`)
      num++
    }
    while(num < 15)
    
    return array
    
  }
  
  iLoveTheBeatles(16);
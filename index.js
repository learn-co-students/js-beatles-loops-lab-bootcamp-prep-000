// add solution here
function theBeatlesPlay (musicians, instruments) {
  var variable=[];
  for (let i=0; i<=musicians.length-1; i++) {
     variable.push (musicians[i]+" plays "+instruments[i] )
  } 
  return variable
} 

function johnLennonFacts (facts) {
  var variable1=[];
  var i=0
  while (i<facts.length) {
       variable1.push (facts[i] + "!!!");
       i++;
  }
  return variable1
}

function iLoveTheBeatles (num) {
  var variable2=[];
  do {
    variable2.push ("I love the Beatles!");
    num++
  } while (num<15);
  return variable2;
}




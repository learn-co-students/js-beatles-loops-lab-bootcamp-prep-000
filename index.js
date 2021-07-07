// add solution here
function theBeatlesPlay(mus, inst){
  
  var theBeatlesPlayArray = [];
  var i;
  
  for(i = 0; i < mus.length; i++){
   var theBeatlesPlayArrayContents = (mus[i] + " plays " + inst[i])
   theBeatlesPlayArray.push(theBeatlesPlayArrayContents)
  }
  return theBeatlesPlayArray
}


function johnLennonFacts(jLF){
  var i = 0;
  
  while (i < jLF.length){
    jLF[i]=(jLF[i] + "!!!")
    i++
  }
  return jLF;
}


function iLoveTheBeatles(num){
  var beatlesArray = [];
  var counter = 0;
  do {
    beatlesArray[counter] = "I love the Beatles!"
    counter++
    num++
  }
  while (num < 15);
  return beatlesArray
}
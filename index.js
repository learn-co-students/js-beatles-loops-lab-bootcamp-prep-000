// add solution here
function theBeatlesPlay(musicians, instruments){
  let xRay = [];
  for(let i = 0; i < musicians.length; i++){
    xRay.push(musicians[i] + " plays " + instruments[i]);
  }
  return xRay;
}

function johnLennonFacts(xRay){
  let i = 0;
  while(i < xRay.length){
    xRay[i] = xRay[i] + "!!!";
    i++;
  }
  return xRay;
}

function iLoveTheBeatles(numbah){
  let xRay = [];
  do {
    xRay.push("I love the Beatles!")
    numbah++;
  } while(numbah < 15)
  return xRay;
}
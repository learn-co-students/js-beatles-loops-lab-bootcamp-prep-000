function theBeatlesPlay(bandmembers, instruments) {
  var bandSpecs = [];
  for (var i = 0; i < bandmembers.length; i++) {
  bandSpecs.push(`${bandmembers[i]} plays ${instruments[i]}`);
  }
  return bandSpecs;
}/*there are limitiations to this function- case when bandmembers.length > instruments.length, you will get nonsensical values; only ideal 
for input arrays that are of equal length */
function johnLennonFacts(faxArray) {
  var i = 0;
  while(i < faxArray.length) {
    faxArray[i]= `${faxArray[i++]}!!!`;
    }
  return faxArray;
}

function iLoveTheBeatles(number) {
  var initiallyblank = [];
  do {
    initiallyblank.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return initiallyblank;
}
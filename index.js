const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function theBeatlesPlay(musicians,instruments){
  var newArray=[]
  for(var i=0;i<musicians.length;i++){
    newArray.push(musicians[i]+" plays "+instruments[i])
  }
  return newArray
}
function johnLennonFacts(facts){
  var fArray=[]
  for(var i=0;i<facts.length;i++){
    fArray.push(facts[i]+"!!!")
  }
  return fArray
}
function iLoveTheBeatles(n){
  var nArray=[]
  do {
    nArray.push('I love the Beatles!')
    n++
  }
  while (n<15)
  return nArray
}

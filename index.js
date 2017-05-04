function theBeatlesPlay(artist,instrument){
var arr=[]
for(var i=0;i<artist.length;i++){
  arr.push(`${artist[i]} plays ${instrument[i]}`)}
return arr
}

function johnLennonFacts(facts){
  var arr=[]
  for(var i=0;i<facts.length;i++){
    arr.push(facts[i]+`!!!`)}
  return arr
}

function iLoveTheBeatles(num){
  var arr=[]
  do{arr.push('I love the Beatles!');num++}
  while (num<15);
  return arr
}

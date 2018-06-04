var musicians
var instruments
var facts
var numb1

function theBeatlesPlay(musicians,instruments){
var newarray=[]
var i
for(i=0;i<musicians.length;i++){
newarray[i] = `${musicians[i]} plays ${instruments[i]}`
}

return newarray
  
}

function johnLennonFacts(facts){
  var i=0
  var mo="!!!"
 while(i<facts.length){
    facts[i]+=mo
    i++
  }
  return facts
}

function iLoveTheBeatles(numb1){
  var newarray=[]
  var i
  do{
  newarray.push("I love the Beatles!")
  numb1++
  }
  while(numb1<15)
  return newarray
}
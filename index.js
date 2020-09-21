// add solution here

function theBeatlesPlay(musicians,instruments){
  var array=[]
  for (let i=0;i<musicians.length;i++){
    array[i]=`${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts){
  let i=0
  while(i<facts.length){
    facts[i]=facts[i]+"!!!"
    i+=1
  }
  return facts
}

function iLoveTheBeatles(num){
  var array=[]
  do {
    array.push("I love the Beatles!")
    num+=1
  } while (num<15)
  return array
}
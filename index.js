function theBeatlesPlay(mus,ins){
  var tmpArr=[];
  for(let i=0;i<mus.length;i++){
    tmpArr.push(mus[i]+" plays "+ins[i])
  }
  return tmpArr
}
function johnLennonFacts(facts){
  var tmpArr=[];
  var i=0;
  while(i<facts.length){
    tmpArr.push(facts[i]+"!!!")
    i++
  }
  return tmpArr
}
function iLoveTheBeatles(num){
  var tmpArr=[];
  do{
    tmpArr.push("I love the Beatles!");
    num++
  }while(num<15)
  return tmpArr;
}
// add solution here
function theBeatlesPlay(people,things){
  var pthings=[];
  var i=0;
  for(i=0;i<people.length;i++){
    pthings.push(people[i]+' plays '+things[i])
  }
  return pthings;
}

function johnLennonFacts(facts){
  var jj=[];
  var i=0;
  while(i<facts.length){
    jj.push(facts[i]+'!!!')
    i++
  }
  return jj;
}

function iLoveTheBeatles(num){
  var ooo=[];
  do {
    ooo.push('I love the Beatles!')
    num++
  } while(num<15)
  return ooo;
}
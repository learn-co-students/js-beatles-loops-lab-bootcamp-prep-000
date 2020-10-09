// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr = new Array();
  for(let i = 0; i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts){
  var i=0;
  var arr = new Array();
  while(i<facts.length){
    arr[i] = facts[i].concat("!!!");
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = new Array();
  do{
    arr.push("I love the Beatles!");
    num++;
  } while(num<15)
  return arr;
}

function theBeatlesPlay(musicians, instruments){
  var empArry =[];
  for(var i=0; i<musicians.length;i++){
    empArry.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empArry;
}

function johnLennonFacts (facts){
  var arr = [];
  let i=0;
  while (i<facts.length){
    arr.push(`${facts[i]}!!!`);
    i++;
  }
  return arr;
  
}

function iLoveTheBeatles(num){
  var arr=[];
  do{
      arr.push("I love the Beatles!");
      num++;
      
  } while (num<15)
  
  return arr;
}
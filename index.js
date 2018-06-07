function theBeatlesPlay(musicians, instruments){
  let newArr=[];
  for(var i=0; i < musicians.length; i++){
    let str = `${musicians[i]} plays ${instruments[i]}`;
    newArr.push(str);
  }
  return newArr;
}

function johnLennonFacts(facts){
  let newArr=[];
  let i = 0;
  let str = '';
  while(i < facts.length){
    str = `${facts[i]}!!!`;
    newArr.push(str);
    i++
  }
  return newArr;
}

function iLoveTheBeatles(n){
  let newArr=[];
  let str = "I love the Beatles!";
  
  do{
    newArr.push(str);
    n++
  } while(n < 15);
  return newArr;
}
function theBeatlesPlay(musicians,instruments){
var newArr=[];
  for (let i=0; i<musicians.length; i++){
    newArr.push(musicians[i]+" plays "+instruments[i]);
    console.log(newArr);
  }
  return newArr;
}

function johnLennonFacts(facts){
var arrLen = facts.length;
  while (arrLen){
    facts[arrLen-1] = facts[arrLen-1]+"!!!";
    console.log(facts);
    arrLen--;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var newAr=[];
  do{
    newAr.push("I love the Beatles!");
    console.log(newAr);
    n++;
  } while (n<15)
  return newAr;
}
// add solution here
function theBeatlesPlay(arrM, arrI){
  empArr = [];
  for(i=0; i < arrM.length; i++){
    str = `${arrM[i]} plays ${arrI[i]}`;
    empArr.push(str)
  }
  return empArr 
}

function johnLennonFacts(factsArr){
  let count = 1;

  while(count < factsArr.length){
    factsArr.push('!!!');
    ++count;
  }

}


function iLoveTheBeatles(num){
  empArr = [];
  do{
    empArr.push('I love the Beatles!');
    ++num;
  }while (num < 15);
  return empArr
}

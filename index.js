// add solution here
function theBeatlesPlay(arrM, arrI){
  let empArr = [];
  for(var i=0; i < arrM.length; i++){
    let str = `${arrM[i]} plays ${arrI[i]}`;
    empArr.push(str)
  }
  return empArr 
}

function johnLennonFacts(factsArr){
  let count = 0;
  let newArr = [];

  while(count < factsArr.length){
    newArr.push(factsArr[count].concat('!!!'));
    ++count;
  }
  return newArr;
}


function iLoveTheBeatles(num){
  let empArr = [];
  do{
    empArr.push('I love the Beatles!');
    ++num;
  }while (num < 15);
  return empArr
}

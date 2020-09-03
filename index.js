// add solution here
function theBeatlesPlay (mus, ins) {
  let emp = [];
  for (let i=0; i<mus.length; ++i){
    emp.push(`${mus[i]} plays ${ins[i]}`);
  }
  return emp;
}

function johnLennonFacts(arr){
  let i=0;
  while (i<arr.length){
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num){
  let emp = [];
  do {
    emp.push("I love the Beatles!");
    num++;
  } while (num<15);
  return emp;
}
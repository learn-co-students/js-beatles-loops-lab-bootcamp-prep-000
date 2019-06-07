// add solution here

function theBeatlesPlay(arr1, arr2){
  let band = []
  for (let i =0; i < arr1.length; i++){
    band[i] = arr1[i] +  " plays " + arr2[i];
  }
  return band
}

function johnLennonFacts(arr){
  let i =0
  let newArr = []
  while (i < arr.length){
    newArr[i] = arr[i] + "!!!"
    i++
  }
  return newArr
}

function iLoveTheBeatles(num){
  let arr = []
  let i = 0
  do {
    arr[i] = "I love the Beatles!"
    i++
    num ++
  }
  while(num < 15);
  return arr
}
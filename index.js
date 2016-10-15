function theBeatlesPlay(arr_1, arr_2){
  let ret = [];
  for(let i = 0; i < arr_1.length; i++){
      ret.push(arr_1[i] + " plays " + arr_2[i]);
    }
  return ret;
}
function johnLennonFacts(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + "!!!";
  }
  return arr;
}
function iLoveTheBeatles(n){
  let ret = [];
  do{
    ret.push("I love the Beatles!")
    n++;
  } while(n < 15)
  return ret;
}

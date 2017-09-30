function theBeatlesPlay(ar, ins){
  var ar2 = []
  for (let i = 0; i<ar.length; i++){
    ar2.push(ar[i] + " plays " + ins[i])
  }
  return ar2
}

function johnLennonFacts(arr){
  var arr2 = []
  let counter = 0
  while (counter < arr.length){
    arr2.push(arr[counter] + "!!!")
    counter = counter + 1
  }
  return arr2
}

 function iLoveTheBeatles(num){
   var arrr = []
   do { arrr.push('I love the Beatles!')
      num = num+1
   } while (num < 15)
   return arrr
 }

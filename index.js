function theBeatlesPlay(arrMus,arrIns){
  var newArr = [];
  for (let i = 0; i<arrMus.length; i++){
    newArr.push(`${arrMus[i]}`+ " plays " + `${arrIns[i]}`);
   }
   return newArr;
  }
  function johnLennonFacts(arr){
    var i = 0;
    while (i < arr.length){
      arr[i]= arr[i] + '!!!'
      i++
  }
  return arr;
  }
  
function iLoveTheBeatles(num){
  var arr = [];
    do{ arr.push("I love the Beatles!");
      num++;
      
    }while (num<15);
    
  return arr;
  }
  
  


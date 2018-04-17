function theBeatlesPlay(musicians, instruments){
  var arr = [];
  
  for(let m = 0; m<musicians.length; m++){
    let s = `${musicians[m]}` + " plays " + `${instruments[m]}`
    arr.push(s);
  }
  
  return arr;
}


function johnLennonFacts(facts){
  var s = "!!!";
  let i =0;
  
  while(i<facts.length){
    facts[i]=facts[i]+ s;
    i++;
  }
  
  return  facts;
}


function iLoveTheBeatles(num){
  var newArr = [];
  let s = "I love the Beatles!";
  
  if(num > 15){
    newArr[0] = s;
    return newArr ;
  }else{
      do{
        newArr.push(s);
         num--;
      }while(num>=0)
  }
  return newArr;
}  
  

function theBeatlesPlay(array1,array2){
  
  var theBeatlesPlayThis =[];
  
  for (var i = 0; i < array1.length; i++) 
  {
   theBeatlesPlayThis.push(`${array1[i]}` + " plays " +`${array2[i]}`);
  
  }
  return theBeatlesPlayThis;
}

function johnLennonFacts(array) {
  let i = 0;
  let lennonFacts= [];
   while (i <= array.length - 1){
    console.log(array[i]);
       lennonFacts.push(array[i] + '!!!');
       i++; 
  }
  return lennonFacts;
}

function iLoveTheBeatles(int) 
{ var newArray = [];
  do {
    newArray.push("I love the Beatles!");
       int++;
  } while (int<15);
      return newArray;
}
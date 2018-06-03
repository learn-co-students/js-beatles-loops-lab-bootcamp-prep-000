function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i = 0; i < musicians.length;i++)
  {array.push(`${musicians[i]} plays ${instruments[i]}`)
    
  }
  console.log(array)
  return array
}
function johnLennonFacts(facts){
  var count = 0
  var newArray = []
  while(count < facts.length){
 newArray.push(`${facts[count]}!!!`);
++count;

    
  }
  console.log(newArray)
  return newArray
}
function iLoveTheBeatles(n){
  var newArray = []
  do { newArray.push("I love the Beatles!");
  ++n;
    }
  while(n < 15){
    ++n;
  }
  console.log(newArray)
  return newArray
}

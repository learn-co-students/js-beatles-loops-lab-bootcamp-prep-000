function theBeatlesPlay(musicians, instruments){
  var newArr = [];
   for(var i = 0; i < musicians.length; i++){
      newArr.push(musicians[i] +" plays " +instruments[i]);
   }
   return newArr
}
  function johnLennonFacts(facts){
    let counter = facts.length
    while(counter>0){
      --counter;
      facts[counter] = facts[counter]+ "!!!"
    }
    return facts
  }

function iLoveTheBeatles(number){
  var newArr = [];
  do {
  number++
  newArr.push("I love the Beatles!")
} while (number<15);

  return newArr

}

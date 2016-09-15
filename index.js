function theBeatlesPlay(arrMusician, arrInstruments){
  var my_array =[];
  for( let i = 0; i < arrMusician.length; i++){
    my_array.push(`${arrMusician[i]} plays ${arrInstruments[i]}`)
  }
  return my_array
}
function johnLennonFacts(facts) {
  var i = 0;
  var my_array =[];
  while(i < facts.length){
    my_array.push(facts[i]+"!!!")
    i++
  }
  return my_array
}
function iLoveTheBeatles(num){
  var my_array = [];
  do{
    my_array.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return my_array
}

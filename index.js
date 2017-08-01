
function theBeatlesPlay(musicians,instruments){
  return musicians.map((musician,i) => `${musician} plays ${instruments[i]}`)
}

function johnLennonFacts(facts){
  return facts.map(fact=>  fact+"!!!")
}

function iLoveTheBeatles(n){
  let array=[];
  let s = "I love the Beatles!";
  do{
   array.push(s); 
 }while( ++n< 15)
 return array;
}

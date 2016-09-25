function  theBeatlesPlay(musicians,instruments){
  var emptyArray = [];
  for(var i =0; i<musicians.length;i++){
    emptyArray[i]=musicians[i]+" plays "+instruments[i];
  }return emptyArray;
}
function johnLennonFacts(facts){
var i =0;
  while (i < facts.length) {
    facts[i]=facts[i]+"!!!";
    i++;
  }return facts;


}
function iLoveTheBeatles(number){
  var ar =[];
  var i = 0
do{

    ar[i] = "I love the Beatles!";
    i++;
  }while (number<15 && i<=number);
  return ar;
}

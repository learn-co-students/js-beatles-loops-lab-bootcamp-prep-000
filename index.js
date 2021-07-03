function theBeatlesPlay(musicians,instruments){
  var sentenceArray=[];
  for (var i=0;i<4;i++){
    sentenceArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentenceArray;
}


function johnLennonFacts(facts){
  var newArray=[];
  var i=0;
  while(i<facts.length){
    newArray.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(n){
  var loveArray=[];
  do{
    loveArray.push('I love the Beatles!');
    n++;
  }while( n <15);
  return loveArray;
}
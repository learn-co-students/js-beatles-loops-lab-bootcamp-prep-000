function theBeatlesPlay (arraym, arrayi){
  var x=[];
  var string="";
  for(let i=0; i<arraym.length;i++){
    string=arraym[i]+" plays " +arrayi[i];
    x.push(string);
    string="";
    
  }
  return x;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts){
  for(let i=0; i<facts.length;i++){
    facts[i]=facts[i]+"!!!";
  }
  return facts;
}

function iLoveTheBeatles (num){
  var x=[];
  x.push("I love the Beatles!")
  num++;
  while (num<15){
     x.push("I love the Beatles!")
     num++
  }
  return x;
}




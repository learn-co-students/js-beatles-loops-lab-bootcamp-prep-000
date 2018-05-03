function theBeatlesPlay(arrMusic, arrInstru){
  
  var emptyarr=[];
 
  for(let i=0; i<arrMusic.length; i++){
    // var phrase=`${arrMusic[i]} plays ${arrInstru[i]}`;
    // emptyarr[i]=(phrase);
    emptyarr.push(`${arrMusic[i]} plays ${arrInstru[i]}`)
    
  }
  return emptyarr;
}
function johnLennonFacts(jonfact){
  var jonlen=jonfact.length-1;
  while(jonlen>=0){
    jonfact[jonlen]=jonfact[jonlen]+"!!!"
    console.log(jonfact[jonlen])
    jonlen--;
  }
  return jonfact
}
function iLoveTheBeatles(num){
  var emp=[];
  do{
    emp.push("I love the Beatles!")
    num++;
  }
  while(num<15);
  return emp;
}
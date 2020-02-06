// add solution here
 function theBeatlesPlay(arrMusic, arrInstru){
    var storage =[];

    for (let i=0; i < arrMusic.length; i++) {
        var Musician = arrMusic[i];
        var instruments = arrInstru[i]
        
        storage.push(Musician + ' plays '+ instruments);
    }return storage;}
////////////////////////////////
  function johnLennonFacts(arrOfFacts){
    var storage = [];
    
  while(arrOfFacts.length > 0)
  {
    storage.push(arrOfFacts.shift()+'!!!');
    }
    return storage
  }
//////////////////////////////////  
function iLoveTheBeatles(num){
    var diff = 15 - num;
    var storage = [];

    do{
        storage.push('I love the Beatles!');
       
      }
    while ( storage.length < diff);
    return storage;
}

  
  
  
  
  
  
  
  
  
  
  
  
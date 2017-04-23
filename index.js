  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  function theBeatlesPlay (musicians, instruments){
    var playing=[];
    for(var i=0; i<musicians.length; i++){
      playing.push(musicians[i] + " plays " + instruments[i]);
    }
    return playing;
  }

/**const facts=[
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];**/

  function johnLennonFacts(facts){
    var i=0;
    while(i < facts.length){
      facts[i]=facts[i]+"!!!";
      i++;
    }
    return facts;
  }
//
  johnLennonFacts(facts);

  function iLoveTheBeatles(num){
    var i=0;
    var arr=[];
    do{
      arr[i]="I love the Beatles!";
      i++;
    
    }while(num<15 && arr.length<=num);
    return arr;
  }
//iLoveTheBeatles(num);

  
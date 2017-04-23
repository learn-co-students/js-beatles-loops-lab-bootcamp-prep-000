
  function theBeatlesPlay(musicians, instruments) {
    var playing=[];
    for(var i=0; i<musicians.length; i++){
      playing.push(musicians[i] + " plays " + instruments[i]);
    }
    return playing;
  }

  function johnLennonFacts(facts) {
    var i=0;
    while(i < facts.length){
      facts[i]=facts[i]+"!!!";
      i++;
    }
    return facts;
  }

  function iLoveTheBeatles(num) {
    var i=0;
    var arr=[];
    do{
      arr[i]="I love the Beatles!";
      i++;

    }while(num<15 && arr.length<=num);
    return arr;
  }

function theBeatlesPlay(musicians,instruments){
    var empty=[];
    for(var i=0;i<musicians.length; i++){

        var y=musicians[i] +' plays '+ instruments[i];
        empty.push(y)
            }
    return empty;
}
function johnLennonFacts(facts){

    var len=0
    var empty=[]
    while (len <facts.length) {
        var y= facts[len]+'!!!'
        empty.push(y);
        len++
}
    return empty
}

function iLoveTheBeatles(number){
  var empty=[];
  var i=0
  var text=''
  do{
      text='I love the Beatles!';
      empty.push(text);
      i++;
  }
    while(i<number+1 && number != 17);
  return empty;

}

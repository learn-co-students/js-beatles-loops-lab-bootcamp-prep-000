function theBeatlesPlay(musicians,instruments) {
  var tmp = [];
  for (var i = 0; i < musicians.length; i++){
    tmp.push(musicians[i] + " plays " + instruments[i] )
  }
  return tmp;

}

function johnLennonFacts(ar) {
  var i=0;
  var tmp = [];
  while(i < ar.length){
   tmp.push(ar[i].concat('!!!'));
   i++;
 }
 return tmp;
}

function iLoveTheBeatles(num) {
 var tmp = [];
 do {
   tmp.push("I love the Beatles!")
   num += 1;
 } while (num < 15);
 return tmp;
}

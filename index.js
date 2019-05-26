function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
   array.push(console.log(`${musicians[i]} + " plays " + ${instruments[i]}`));
  }
  
    return array;
}

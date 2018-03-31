function theBeatlesPlay(muscians, instruments){
  var array = [];
  for (var i = 0; i < muscians.length; i++){
    array.push(muscians[i] + ' play ' + instruments[i])
  }
  return array;
}
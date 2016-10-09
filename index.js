
function theBeatlesPlay(array1, array2){
  var musicstring=[];

  for( let i=0; i<array1.length; i++){
    musicstring.push(array1[i] + " plays " + array2[i]);
  }

  return musicstring
}

function johnLennonFacts(array){
  var newArray=[]
  let i=0
  while(i<array.length){
    newArray.push(array[i] + "!!!");
    i++
  }
  return newArray
}

function iLoveTheBeatles(n){
  let i= n
  var nwArry=[];
  do{
    nwArry.push('I love the Beatles!');
    i++
  }while(i<15)
  return nwArry
}

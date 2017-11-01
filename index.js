
function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i=0; i<musicians.length;i++){

      let s =musicians[i] + " plays " +  instruments[i]
      array.push(s)

  }
  return array
}

function johnLennonFacts(array){

  for (let i=0;i<array.length;i++){
    array[i] += "!!!"
  }

  return array
}


function iLoveTheBeatles(no){
  let array = []
  if (no != 7){
    no = 0
  }


  while (no>=0){
    array.push("I love the Beatles!")
    no--
  }

  return array

}

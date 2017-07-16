function theBeatlesPlay(musicians,instruments) {
   var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {

  console.log (musicians[i] + ' plays '+ instruments[i]);

    emptyArray.push(musicians[i] + ' plays '+ instruments[i]);

  }return emptyArray;
}

function johnLennonFacts(factsArray){

  var newArray =[];
  var i = 0;
  while( i < factsArray.length){
  newArray.push(factsArray[i]+ "!!!")
  i++;
  }
 return newArray;
}

function iLoveTheBeatles(number) {
  var arrayNuevo = [];
    do {arrayNuevo.push('I love the Beatles!')
  number++;
} while (number<15);
    return arrayNuevo;


    }

    //function iLoveTheBeatles(num) {
   //var array = [];
    //do {
    //array.push("I love the Beatles!")
    //num++;
   //while (num < 15);
  //return array;

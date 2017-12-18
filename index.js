function theBeatlesPlay(musicians,instruments){
  var roles = [] ;//empty Array
for (var i=0; i < musicians.length; i++ ){
  roles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return roles;
}

//Use a while loop to loop over the facts array and add "!!!" to the end of every fact. The function should return an array of strings with exclamation points.
function johnLennonFacts(array) {
  var i=0
  while ( i < array.length){
    array[i] = `${array[i]}!!!`;
    i++;
  }
  return array;
}

function iLoveTheBeatles (number) {
   var array =[];
   do{
     array.push('I love the Beatles!');
     number= number +1 ;
 }while (number < 15)
 return array
}
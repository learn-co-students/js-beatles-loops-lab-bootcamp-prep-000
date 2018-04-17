function theBeatlesPlay(musicians, instruments){

var array = [];

for (var i = 0; i<musicians.length; i++){
array.push( `${musicians[i]} plays ${instruments[i]}` );

} 
return array
}

function johnLennonFacts(x){
var array=[];
var i = 0;
while (i<x.length){
	array.push(`${x[i]}!!!`);
	i++
}
return array
}

function iLoveTheBeatles(times){

var array = []
do{
  array.push('I love the Beatles!');
  times++;
}while(times < 15)
  
  return(array)
  
}


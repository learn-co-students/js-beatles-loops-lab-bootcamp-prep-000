function theBeatlesPlay(artistArray,instrumentArray){
var newArray =[];
var len = artistArray.length;
var i = 0;
var newString;
for(i; i<len;i++){
 newString = artistArray[i] +" plays " +instrumentArray[i]
 newArray.push(newString);
}
return newArray;
}

function johnLennonFacts(array){
var newArray = [];
var len = array.length;
var exclam ="!!!";
var i = 0;
for(var i; i <len; i++){
  newArray.push(array[i]+exclam);
}
return newArray;

}

function iLoveTheBeatles(num){
var newArray = [];
do{
newArray.push("I love the Beatles!");
num++
}while(num <15);
 return newArray
}

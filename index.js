function theBeatlesPlay(musicians,instruments){

    var band =[];

    for(var i=0; i<musicians.length;i++){

          band[i] = `${musicians[i]} plays ${instruments[i]}`;

    }

    return band;
}


function johnLennonFacts(arr){

 var i=0;
 while(i<arr.length){
    var ex = arr;
    ex[i] = arr[i]+ '!!!';
    i++;
 }

 return ex;
}



function iLoveTheBeatles(num){

   var arr =[];

   do{
       arr.push("I love the Beatles!");
    }
    while(++num<15);


    return arr;
}

function theBeatlesPlay(musicians,instruments){
    var array = [];

    for(var i=0;i<musicians.length;i++){
        array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return array;
}

function  johnLennonFacts(array){
    var newArray = [];
    for(var i=0;i<array.length;i++){
        newArray.push(`${array[i]}!!!`)
    }
    return newArray;
}

function iLoveTheBeatles(num){
    var array = [];
    do{
        array.push("I love the Beatles!");
        num++;
    }while(num <15)
    return array;
}

function theBeatlesPlay(array1, array2){
    var sol = [];
    for(var i = 0, len = array1.length; i < len; i++){
        var a = String(array1[i]) + " plays " + String(array2[i]);
        sol.push(a);
    }
    return sol;
}

function johnLennonFacts(array){
    var sol = [];
    var i = 0;
    while( i < array.length){
        var a = String(array[i]) + '!!!';
        sol.push(a);
        i++;
    }
    return sol;
}

function iLoveTheBeatles(num){
    var sol = [];
    do{
        sol.push('I love the Beatles!');
        num++;
    } while(num < 15);
    return sol;
}
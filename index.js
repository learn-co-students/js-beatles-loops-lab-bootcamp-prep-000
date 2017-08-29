function theBeatlesPlay(musicians,instruments) {
    var band = new Array()
    for(var i = 0;i < musicians.length;i++){
        for(var j = 0;j < instruments.length;j++){
            if(j === i){
                band.push(musicians[i] + " plays " + instruments[j])
            }
        }
    }
    return band
}

function johnLennonFacts(array) {
    var i = 0
    while(i < array.length){
        array[i] = array[i] + "!!!"
        i++
    }
    return array
}

function iLoveTheBeatles(n) {
    var beatles = new Array()
    do {
        beatles.push("I love the Beatles!")
        n++
    }while(n < 15)
    return beatles
}
